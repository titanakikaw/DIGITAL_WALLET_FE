import { fetchHistory } from "../api/HistoryApi"


export const LOAD_HISTORY = ({id}) => {
    return async(dispatch) => {
        try {
            const response = await fetchHistory({id})
            response.data.transactionHistory.sort((a,b) => new Date(b.TransDate) - new Date(a.TransDate));
            if(!response){
                return null;
            }
            dispatch({ type : "LOAD_HISTORY", payload: response.data })
        } catch (error) {
            console.log(error);
            return null
        }
    }
}