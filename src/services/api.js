import { createAxiosInstance, authHeaders } from '../utils/networking'

const http = createAxiosInstance()

// axios.defaults.baseURL = 'http://localhost:3000'
// axios.defaults.headers = axios.defaults.headers || {}
// axios.defaults.headers['api_client'] = 'abc123'
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export const test = () => axios.get('/')

export const login = someToken => {
    
    /* eslint-disable no-undef */
    let params = new URLSearchParams()
    params.append( 'some_token', someToken )
    
    return axios.post( '/users/login', params )
    
}
