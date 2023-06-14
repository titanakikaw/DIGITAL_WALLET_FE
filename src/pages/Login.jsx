import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { LoginUser } from '../actions/authAction'
import { StatusContext } from '../context/StatusContext'


const Login = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { dispatchAccount, authError } = useContext(AuthContext)
    const { statusDispatch, status } = useContext(StatusContext)

  

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!emailRef.current.value || !passwordRef.current.value){
            return;
        }
        try {
            LoginUser({email : emailRef.current.value, password : passwordRef.current.value}, statusDispatch)(dispatchAccount)
        } catch (error) {
            console.log('at component')
        }
      
    }

    const loading = status.find((x) => x.type == "AUTH" && x?.loading === true);
    const error = status.find((x) => x.type == "AUTH"  && x?.error === true)
    console.log(error)
    return (
        <div className='w-full lg:w-1/2 h-96 p-5 '>
            <div className='mb-10'>
                <p className='text-lg'>Welcome</p>
                <p className='font-bold text-3xl uppercase'>Digital Wallet</p>
                <p className='text-xs'>Please enter your credentials</p>
            </div>
            
            <p className='text-red-800'>{error ? error?.data : '  '}</p>
            
            <form onSubmit={handleSubmit}>
                <div className='mb-5'>
                    <p className='text-xs mb-2'>Email</p>
                    <input ref={emailRef} type='email' name="email" className='text-black w-full rounded bg-thirdColor px-2 py-2 text-xs' placeholder='Please enter your email'/>
                </div>
                <div  className='mb-5'>
                    <p className='text-xs mb-2'>Password</p>
                    <input ref={passwordRef} type='password' name="password" className='text-black w-full rounded bg-thirdColor px-2 py-2 text-xs' placeholder='Please enter your email'/>
                </div>
                <div>
                    <input type='submit' disabled={loading && true} className='disabled:cursor-wait disabled:bg-gray-100 cursor-pointer rounded bg-secondaryColor w-full p-3 text-xs shadow-md ' value="Log in"/>
                </div>
                <p className='text-xs mt-2'>Dont have an account? <Link to="register" className='text-blue-400 uppercase'>Register here</Link></p>
            </form>

        </div>
    )
}

export default Login