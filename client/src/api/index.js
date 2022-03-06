import axios from 'axios'

const instance = axios.create({
    baseURL: VUE_APP_API_URL,
})

// example: instance.post(url, data)
