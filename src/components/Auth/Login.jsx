import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        console.log("form submitted")
        setEmail('')
        setPassword('')
    }
    return (
        <div className="flex min-h-screen w-full items-center justify-center">
            <div className="border-2 border-emerald-600 rounded-2xl p-20">
                <form onSubmit = {(e)=>{submitHandler(e)}} className="flex flex-col items-center justify-center gap-4">

                    <input
                        value= {email}
                        onChange = {(e)=>{
                            setEmail(e.target.value)
                        }}
                        required
                        type="email"
                        placeholder="Email"
                        className="text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-6 rounded-full placeholder:text-gray-400"
                    />

                    <input
                        value= {password}
                        onChange = {(e)=>{
                            setPassword(e.target.value)
                        }}
                        required
                        type="password"
                        placeholder="Password"
                        className="text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-6 rounded-full placeholder:text-gray-400"
                    />

                    <button className="mt-5 text-white bg-emerald-600 text-xl py-4 px-8 rounded-full">
                        Login
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Login
