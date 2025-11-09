import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <div className="flex flex-col h-full w-full items-center bg-transparent"> 
        <h1 className="py-10 font-bold text-4xl">Welcome To EMS</h1>
        <div className='border-2 rounded-xl border-emerald-600 p-20 bg-amber-50'>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} className='flex flex-col items-center justify-center'>
                <input type="email" value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }} required className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' placeholder = "Enter Your Email" />
                <input type="password" onChange={(e)=>{
                    setPassword(e.target.value)
                  }} required className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' placeholder='Enter Password'/>
                  <button className='mt-7 text-white border-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log In</button>
            </form>
        </div> 
    </div>
  )
}

export default Login
