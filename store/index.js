import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
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
                    .post('https://place-63c32.firebaseio.com/posts.json', postData)
                    .then(res => {
                        vuexContext.commit('addPost', {...postData, id: res.data.name, autorData: new Date() })
                    })
                    .catch(e => console.log(e))
            },
            editPost(vuexContext, editedPost) {
                return axios
                    .put('https://place-63c32.firebaseio.com/posts/' + editedPost.id + '.json', {...editedPost, autorData: new Date() })
                    .then(res => {
                        vuexContext.commit('editPost', {...editedPost, autorData: new Date() })
                    })
                    .catch(e => console.log(e))
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}
export default createStore