import { createContext, useContext, useReducer } from "react";

const StatusInitState = []

const StatusReducer = (state, { type, payload }) => {   
    const statusType = type.split("_");
  
    switch(statusType[1]){
        case 'LOADING':
            const indexError = state.findIndex((x) => x.type == statusType[0] && x?.error == true)
            return [...state.splice(0, indexError), ...state.splice(indexError + 1), {
                type: statusType[0],
                data: payload,
                loading : true
            }]
           
        case 'FAIL':
            const indexLoading = state.findIndex((x) => x.type == statusType[0] && x?.loading == true)
            return [...state.splice(0, indexLoading), ...state.splice(indexLoading + 1), {
                type: statusType[0],
                data: payload,
                error : true
            }]
         
        default:
            const index = state.findIndex((x) => x.type == statusType[0] && x?.error == true || x?.loading == true)
            return [...state.splice(0, index), ...state.splice(index + 1)]

    }
    return state
}   

const StatusContext = createContext();
const StatusProvider = ({ children }) => {
    const [ status , statusDispatch ] = useReducer(StatusReducer, StatusInitState)
    const value = { status, statusDispatch}
    return (
        <StatusContext.Provider value={value}>
            {children}
        </StatusContext.Provider>
    )
}

export { StatusProvider , StatusContext}