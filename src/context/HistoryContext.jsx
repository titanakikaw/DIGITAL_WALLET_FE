import { createContext, useContext, useEffect, useReducer } from "react";
import { LOAD_HISTORY } from "../actions/historyAction";
import { AuthContext } from "./AuthContext";
import { WalletContext } from "./WalletContext";

const historyInitState = {};

const HistoryReducer = (state = historyInitState, { type, payload }) => {
    switch(type){
        case "LOAD_HISTORY":
            return payload;
        case "ADD_TRANSACTION": 
            return state;
        default:
            return state
    }
}


const HistoryContext = createContext();
const HistoryProvider = ({children}) => {
    const { balance } = useContext(WalletContext);
    const { account } = useContext(AuthContext)
 
    const [history, dispatchHistory] = useReducer(HistoryReducer, historyInitState)

    useEffect(() => {
        if(account?.UserID){
            LOAD_HISTORY({ id : account?.UserID })(dispatchHistory)
        }
   
    }, [balance?.AccountBalance])


    const value = {
        history,
        dispatchHistory
    }
    return(
        <HistoryContext.Provider value={value}>
            {children}
        </HistoryContext.Provider>
    )
}

export { HistoryContext, HistoryProvider}