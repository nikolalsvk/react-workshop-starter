import Axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

class API {
    get = async (path, params) => {
        const response = await Axios.get(BASE_URL + path, { params })
        return await response.data
    }

    post = async (path, body) => {
        const response = await Axios.post(BASE_URL + path, { body })
        return await response.data
    }
}

export const api = new API()
