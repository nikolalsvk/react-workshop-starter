import { API } from '../shared/api'
import User from '../models/User'

export class UserService {
    async fetchUsers() {
        // Fetch your users
        const { data } = await API.get('/posts')

        return new User(data)
    }
}

export const userService = new UserService()
