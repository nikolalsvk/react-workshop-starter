import { api } from '../shared/api'
import Post from '../model/Post'

class PostService {
    fetchPosts = async () =>
        await api.get('/posts').then(posts => posts.map(post => new Post(post)))
}

export default new PostService()
