import axios from axios

const request = axios.create({
    baseURL: 'localhost:3001',
    timeout: 20000
})

export default request