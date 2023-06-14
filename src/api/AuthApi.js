import axios from "axios";

export const LOGIN = async({email, password}) => {
    const { data } = await axios.post("http://localhost:3000/auth/login", {
        email, password
    })
    const { AccountBalance, ...rest} = data.data
    return rest
}