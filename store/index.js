import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [],
            token: null,
            enrre: ''
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            },
            addPost(state, post) {
                state.loadedPosts.push(post)
            },
            editPost(state, editedPost) {
                const postIndex = state.loadedPosts.findIndex(
                    post => post.id === editedPost.id
                );
                state.loadedPosts[postIndex] = editedPost
            },
            setToken(state, token) {
                state.token = token;
            },
            clearToken(state) {
                state.token = null;
            },
            setEnrre(state, enrre) {
                state.enrre = enrre
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get('https://place-63c32.firebaseio.com/posts.json')
                    .then(res => {
                        const postsArray = []
                        for (const key in res.data) {
                            postsArray.push({...res.data[key], id: key })
                        }
                        vuexContext.commit('setPosts', postsArray)
                    })
                    .catch(e => context.error(e))
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            },
            addPost(vuexContext, postData) {
                return axios
                    .post('https://place-63c32.firebaseio.com/posts.json?auth=' + vuexContext.state.token, postData)
                    .then(res => {
                        vuexContext.commit('addPost', {...postData, id: res.data.name, autorData: new Date() })
                    })
                    .catch(e => console.log(e))
            },
            editPost(vuexContext, editedPost) {
                return axios
                    .put('https://place-63c32.firebaseio.com/posts/' + editedPost.id + '.json?auth=' + vuexContext.state.token, {...editedPost, autorData: new Date() })
                    .then(res => {
                        vuexContext.commit('editPost', {...editedPost, autorData: new Date() })
                    })
                    .catch(e => console.log(e))
            },
            authenticateUser(vuexContext, authData) {
                let authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=';
                if (!authData.isLogin) {
                    authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=';
                }
                return this.$axios.$post(authUrl + process.env.API_KEY, {
                        email: authData.email,
                        password: authData.password,
                        returnSecureToken: true
                    }).then(res => {
                        vuexContext.commit('setToken', res.idToken);
                        vuexContext.dispatch('setLogoutTimer', res.expiresIn * 1000);
                        vuexContext.commit('setEnrre', '');
                    })
                    .catch(e => { vuexContext.commit('setEnrre', e.response.data.error.message) })
                    //.catch(e=> authData.error= e.response.data.error.message)
            },
            setLogoutTimer(vuexContext, duration) {
                setTimeout(() => {
                    vuexContext.commit('clearToken')
                }, duration)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            },
            isAuthenticated(state) {
                return state.token != null
            }
        }
    })
}
export default createStore