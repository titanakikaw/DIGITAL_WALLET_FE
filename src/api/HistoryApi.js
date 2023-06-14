import axiosIntance from '../utils/axiosInstance'   

const fetchHistory = async ({id}) => {
    try {
        const response = await axiosIntance.get(`/api/transaction/history/${id}`)
        if(!response){
            return null
        }
        return response

    } catch (error) {
        console.log(error)
        return null
    }
}

export {
    fetchHistory
}