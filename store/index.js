import Vuex from 'vuex'
import axios from 'axios'
import Cookie from 'js-cookie'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [],
            token: null,
            ofertaFormativa: [],
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
            },
            setFormativa(state, formativa) {
                state.ofertaFormativa = formativa
            },
            addFormativa(state, formativa) {
                state.ofertaFormativa.push(formativa)
            },
            editFormativa(state, editedFormativa) {
                const formativaIndex = state.ofertaFormativa.findIndex(
                    formativa => formativa.id === editedFormativa.id
                );
                state.ofertaFormativa[formativaIndex] = editedFormativa
            },
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get('https://place-63c32.firebaseio.com/.json')
                    .then(res => {
                        const postsArray = [];
                        const formativaArray = [];
                        for (const key in res.data.posts) {
                            postsArray.push({...res.data.posts[key], id: key })
                        };
                        for (const key in res.data.formativa) {
                            formativaArray.push({...res.data.formativa[key], id: key, favorito: false })
                        }
                        vuexContext.commit('setPosts', postsArray);
                        vuexContext.commit('setFormativa', formativaArray);
                    })
                    .catch(e => context.error(e))
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            },
            addPost(vuexContext, postData) {
                return axios
                    .post('https://place-63c32.firebaseio.com/posts.json?auth=' + vuexContext.state.token, {...postData, autorData: new Date() })
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
            setFormativa(vuexContext, formativa) {
                vuexContext.commit('setFormativa', formativa)
            },
            addFormativa(vuexContext, postData) {
                return axios
                    .post('https://place-63c32.firebaseio.com/formativa.json?auth=' + vuexContext.state.token, postData)
                    .then(res => {
                        vuexContext.commit('addFormativa', {...postData, id: res.data.name, favorito: false })
                    })
                    .catch(e => console.log(e))
            },
            editFormativa(vuexContext, editedPost) {
                //falta implementar
                return axios
                    .put('https://place-63c32.firebaseio.com/formativa/' + editedPost.id + '.json?auth=' + vuexContext.state.token, {...editedPost, autorData: new Date() })
                    .then(res => {
                        vuexContext.commit('editFormativa', {...editedPost, autorData: new Date() })
                    })
                    .catch(e => console.log(e))
            },
            editFavoritos(vuexContext, editedFormativa) {
                vuexContext.commit('editFormativa', editedFormativa)
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
                        localStorage.setItem('token', res.idToken);
                        localStorage.setItem('tokenExpiration', new Date().getTime() + +res.expiresIn * 1000);
                        Cookie.set('jwt', res.idToken);
                        Cookie.set('expirationDate', new Date().getTime() + +res.expiresIn * 1000)
                            //vuexContext.dispatch('setLogoutTimer', res.expiresIn * 1000);
                        vuexContext.commit('setEnrre', '');
                    })
                    .catch(e => { vuexContext.commit('setEnrre', e.response.data.error.message) })
                    //.catch(e=> authData.error= e.response.data.error.message)
            },
            // setLogoutTimer(vuexContext, duration) {
            //     setTimeout(() => {
            //         vuexContext.commit('clearToken')
            //     }, duration)
            // },
            initAuth(vuexContext, req) { //req isServer
                let token;
                let expirationDate;
                if (req) {
                    if (!req.headers.cookie) {
                        return;
                    }
                    const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
                    if (!jwtCookie) {
                        return;
                    }
                    token = jwtCookie.split('=')[1];
                    expirationDate = req.headers.cookie.split(';').find(c => c.trim().startsWith('expirationDate=')).split('=')[1];
                } else {
                    token = localStorage.getItem("token");
                    expirationDate = localStorage.getItem("tokenExpiration");

                    // if (new Date().getTime() > +expirationDate || !token) {
                    //     vuexContext.commit('clearToken')
                    //     return;
                    // }
                }
                if (new Date().getTime() > +expirationDate || !token) {
                    console.log('No token or invalid token');
                    //vuexContext.commit('clearToken');
                    vuexContext.dispatch('logout');
                    return;
                }
                //vuexContext.dispatch('setLogoutTimer', +expirationDate - new Date().getTime());
                vuexContext.commit("setToken", token);
            },
            logout(vuexContext) {
                vuexContext.commit('clearToken');
                Cookie.remove('jwt');
                Cookie.remove('expirationDate');
                if (process.client) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('tokenExpiration');
                }
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            },
            isAuthenticated(state) {
                return state.token != null
            },
            ofertaFormativa(state) {
                return state.ofertaFormativa
            }
        }
    })
}
export default createStore