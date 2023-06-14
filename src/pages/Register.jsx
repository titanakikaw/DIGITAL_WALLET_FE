import React from 'react'
import { Link } from 'react-router-dom'


const inputValues = [
    {
        type: "text",
        id: "name",
        name: "name",
        placeholder: "Please enter your complete name",
        text: "Complete Name"
    },
    {
        type: "email",
        id: "email",
        name: "email",
        placeholder: "Please enter your email",
        text: "Email"
    },
    {
        type: "password",
        id: "password",
        name: "password",
        placeholder: "Please enter your password",
        text: "Password"
    },
    {
        type: "password",
        id: "Cpassword",
        name: "Cpassword",
        placeholder: "Please re-enter your password",
        text: "Confirm Password"
    },
]


const Register = () => {
  return (
    <div className='w-full lg:w-1/2 h-auto p-5 '>
        <div className='mb-10'>
            <p className='font-bold'>Registration Form</p>
            <p className='text-xs'>Please enter fill in the fields</p>
        </div>
        <div>
           {
            inputValues.map((x) => {
                return(
                    <div className='mb-5' key={x.name}>
                        <p className='text-xs mb-2'>{x.text}</p>
                        <input  className='w-full rounded bg-thirdColor px-2 py-2 text-xs' {...x} />
                    </div>
                )
            })
           }
            <div>
                <input type='submit' className='cursor-pointer rounded bg-secondaryColor w-full p-3 text-xs shadow-md ' value="Log in"/>
            </div>
            <p className='text-xs mt-2'>Already have an account? <Link to="/auth" className='text-blue-400 uppercase'>Login here</Link></p>
        </div>

    </div>
  )
}

export default Register