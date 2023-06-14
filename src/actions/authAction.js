import { LOGIN } from "../api/AuthApi"

export const LoginUser = ({ email, password }, statusDispatch) => {
    return async (dispatch) => {
        try {
            statusDispatch({
                type : "AUTH_LOADING",
                payload: {
                    email, password
                }
            })
            const response = await LOGIN({email, password});
            if(response){
                dispatch({type: "LOGIN", payload: response})
            }
            statusDispatch({
                type : "AUTH_SUCCESS",
                payload: {
                    email, password
                }
            })
         
        } catch (error) {   

            statusDispatch({
                type : "AUTH_FAIL",
                payload: error.response?.data?.details
            })
        }
    }
}

