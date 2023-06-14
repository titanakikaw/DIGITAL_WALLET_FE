import { createContext, useContext, useEffect, useReducer } from 'react'
import { LOAD_BALANCE } from '../actions/walletActions';
import { AuthContext } from './AuthContext';

const walletInitState = {
    AccountBalance : 0
}

const WalletReducer = (state = walletInitState, {type, payload}) => {
    switch (type) {
        case "LOAD_BALANCE":
            return payload;
        case "DEPOSIT_BALANCE":
            console.log(state)
            return {...state, AccountBalance: state.AccountBalance + payload }
        case "DEBIT_BALANCE":
            return {...state, AccountBalance: state.AccountBalance - payload }
        default:
            return state;
    }
}


const WalletContext = createContext();

const WalletProvider = ({children}) => {
    const { account } = useContext(AuthContext);
    const [ balance, walletDispatch] = useReducer(WalletReducer, walletInitState);
    const token = localStorage.getItem('token')
    useEffect(() => {
        if(account?.UserID && token != ''){
            LOAD_BALANCE({id : account?.UserID })(walletDispatch)
        }
     
    }, [account?.UserID])

    const value = {
        balance,
        walletDispatch
    }

    return (
        <WalletContext.Provider value={value}>
            {children}
        </WalletContext.Provider>
    )
}

export { WalletContext, WalletProvider}