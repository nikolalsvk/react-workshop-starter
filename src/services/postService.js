import { apiService } from '../shared/apiService'
import { BASE_URL } from '../shared/constants'

export class PostService {
    fetchPosts() {
        // Fetch your posts
        return apiService.get(BASE_URL)
    }
}

export const postService = new PostService()
