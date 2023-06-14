import axios from 'axios'

const token = localStorage.getItem('token');
let accessToken_local = "";

if(token){
    const { accessToken } = JSON.parse(token);
    accessToken_local = accessToken
}

console.log(accessToken_local)

const instance = axios.create({
    baseURL: "http://localhost:3000/",
    timeout: 5000,
    headers: {
        Authorization: `Bearer ${accessToken_local}`
    }
})



instance.interceptors.response.use((response) => {
    return response.data
}, (err) => {
    return Promise.reject(err)
})

export default instance