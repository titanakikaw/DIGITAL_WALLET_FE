import React, { useContext, useEffect } from 'react'
import { Navigate, Outlet,useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const AuthLayout = () => {
  const { account } = useContext(AuthContext)
  const navigate = useNavigate();
  
  useEffect(() => {
    // console.log(account)
    if(account){
      navigate('/dashboard')
    }
  }, [account])
 
 

  return (
    <div className='bg-baseColor w-full h-screen flex'>
        <div className='w-full lg:w-1/2 flex justify-center items-center font-white-defualt'>
           <Outlet/>
        </div>
        <div>
        </div>
    </div>
  )
}

export default AuthLayout