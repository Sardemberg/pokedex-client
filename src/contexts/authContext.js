import React, {createContext, useReducer} from "react";

const auth_context = {
    birth_date: null,
    email: null,
    name: null,
    access_token: null
}

export default function AuthContextProvider({children}){
    const reducer = (state, action) => {
        switch(action.type){
            case 'SET_ACCESS_TOKEN':
                return {...state, access_token: action.access_token}
            case 'SET_DATA':
                return {
                    ...state,
                    birth_date: action.data.birth_date,
                    email: action.data.email,
                    name: action.data.name,
                    access_token: action.data.access_token
                }
            default:
                console.warn("Operation for state not found")
        }
    }

    const [state, dispatch] = useReducer(reducer, auth_context)

    return(
        <AuthContext.Provider value={[state, dispatch]}>
            {children}
        </AuthContext.Provider>
    )
}


export const AuthContext = createContext(auth_context)