import axios from 'axios'
import { BASE_URL } from '../shared/constants'

class API {
    get = (path, queryParams) => {
        const reqUrl = BASE_URL + path
        return axios
            .get(reqUrl, {
                params: queryParams
            })
            .then(res => res.data)
    }

    post = (path, body) => {
        const reqUrl = BASE_URL + path
        return axios.post(reqUrl, body).then(res => res.data)
    }
}

export const api = new API()
