import { api } from '../shared/api'
import Post from '../models/Post'

// CRUD operations related to Post model

class PostsService {
    fetchPosts() {
        return api.get('/posts').then(postsArray => {
            console.log('PostsService', 'fetchPosts', postsArray)
            const posts = postsArray.map(post => {
                return new Post(post.id, post.title, post.body)
            })

            return posts
        })
    }
}

export const postsService = new PostsService()
