export default {
    loadPosts: (state, payload) => state.posts = payload,
    addPost: (state, payload) => state.posts.push(payload)
}