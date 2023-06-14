import React, { createContext, useCallback, useReducer, useState } from 'react'
import axios from 'axios';
import axiosInstance from '../utils/axiosInstance'


const AuthInitState = null


const AuthReducer = (state , { type, payload}) => {
    switch (type) {
        case "LOGIN":
            localStorage.setItem('token', JSON.stringify(payload))
            return payload;
        case "LOGOUT_SUCCESS":
            localStorage.removeItem('token')
            return AuthInitState
        default:
            return state;
    }
}


const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [account, dispatchAccount] = useReducer(AuthReducer, AuthInitState)
    const [authError, setAuthError] = useState();

    const value = {
        account,
        dispatchAccount
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }