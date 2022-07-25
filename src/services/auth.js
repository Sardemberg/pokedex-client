import request from "./request"

export default {
    login: (data) => request.post('/auth/sign_in', {
        ...data
    }),
    register: (data) => request.post('/auth', {
        ...data
    })
}