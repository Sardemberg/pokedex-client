import request from "./request"

export default {
    login: (data) => request.post('/login', {
        headers: {
            "access-token": ""
        },
        data
    }),
    register: (data) => request.post('/register', {
        headers: {
            "access-token": ""
        },
        data
    })
}