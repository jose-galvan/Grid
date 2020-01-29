import apiClient from '@/utils/apiClient.js'

export default {
    async getPosts(context){
        apiClient.get('posts')
            .then(({data}) =>  context.commit('loadPosts', data))
    }
}