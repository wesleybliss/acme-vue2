import store from '../vuex/store'
import axios from 'axios'

// Simple check to see if we're developing locally
export const hostIsLocal =
    window.location.host.includes('.local') ||
    window.location.host.includes('localhost')

let host = 'localhost:3000'
try {
    if (process.env.NODE_ENV === 'production')
        host = 'nitrade-api.wesleybliss.com'
}
catch (e) {}

export const createAxiosInstance = () => axios.create({
    baseURL: 'http://' + host,
    timeout: 1000,
    headers: {}
})

export const authHeaders = () => {
    return { headers: { 'Authorization': `Bearer ${store.state.user.token}` } }
}
