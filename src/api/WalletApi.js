import axiosIntance from '../utils/axiosInstance'   

const fetchBalance = async({id}) => {
    try {
        const response = await axiosIntance.get(`/api/transaction/balance/${id}`);
        if(!response){
            return null
        }
        return response
    } catch (error) {
        console.log(error)
        return null
    }
   
}


const depositBalance = async(params) => {
    const { id, amount } = params
    const response = axiosIntance.put(`/api/transaction/deposit/${id}`, {
        depositBal : amount
    })
    return response
  
}


const debitBalance = async(params) => {
    const { id, amount } = params
   
    const response = axiosIntance.put(`/api/transaction/debit/${id}`, {
        debitBal : amount
    })
    return response
   
}

export {
    fetchBalance,
    depositBalance,
    debitBalance
}