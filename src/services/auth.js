import request from "./request"
import { useContext } from "react"
import AuthContext from "../contexts/authContext"

const auth_context = useContext(AuthContext)

export default {
    login: (data) => request.post('/auth/sign_in', {
        ...data
    }).then(response => {
        return response
    }),
    register: (data) => request.post('/register', {
        headers: {
            "access-token": ""
        },
        data
    })
}