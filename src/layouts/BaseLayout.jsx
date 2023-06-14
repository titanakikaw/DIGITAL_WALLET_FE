import React, { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AuthContext, AuthProvider } from '../context/AuthContext';

const BaseLayout = () => {
  const { dispatchAccount } = useContext(AuthContext)
  const navigate = useNavigate();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'))
    if(!token){
      navigate('/auth')
    }
    if(token != null){
      dispatchAccount({
        type: "LOGIN",
        payload: token
      })
    }

  }, [])
  return (
      <div>
        <Outlet/>
      </div>
  )
}

export default BaseLayout