import { debitBalance, depositBalance, fetchBalance } from "../api/WalletApi"

export const LOAD_BALANCE = ({id}) => {
    return async (dispatch) => {
        try {
            const {data} = await fetchBalance({id})
            if(!data){
                return null
            }
            dispatch({ type : "LOAD_BALANCE", payload: data})
        } catch (error) {
            return null
        }
    }
}

export const DEPOSIT_ACCOUNT = ({ id, amount }, statusDispatch) => {
    return async (dispatch) => {
      
        try {
            statusDispatch({
                type : "DEPOSIT_LOADING",
                payload: { id, amount }
            })
            const response = await depositBalance({ id  , amount})
            dispatch({
                type : "DEPOSIT_BALANCE",
                payload: parseFloat(amount)
            })
            statusDispatch({
                type : "DEPOSIT_SUCCESS",
                payload: { id, amount }
            })
        } catch (error) {
            statusDispatch({
                type : "DEPOSIT_FAIL",
                payload: error
            })
        }
    }
}



export const DEBIT_ACCOUNT  = ({ id, amount }, statusDispatch) => {
    return async (dispatch) => {
        try {
            statusDispatch({
                type : "DEBIT_LOADING",
                payload: { id, amount }
            })
            const response = await debitBalance({id , amount})        
            dispatch({
                type : "DEBIT_BALANCE",
                payload: parseFloat(amount)
            })
            statusDispatch({
                type : "DEBIT_SUCCESS",
                payload: { id, amount }
            })
        } catch (error) {
            statusDispatch({
                type : "DEBIT_FAIL",
                payload: error
            })
        }
    }
}