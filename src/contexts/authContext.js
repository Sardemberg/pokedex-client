import React, {createContext} from "react";

const auth_context = {
    birth_date: null,
    email: null,
    name: null,
    access_token: null
}

const authContext = createContext(auth_context)

export default function AuthContext({children}){
    return(
        <authContext.Provider value={auth_context}>
            {children}
        </authContext.Provider>
    )
}