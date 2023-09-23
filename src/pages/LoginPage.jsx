import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const login = () => {
        console.log(password);
        if (password === "@12345@") {
            localStorage.setItem("user", true)
            navigate("/mg")
        }
    }
    return (
        <div className='flex flex-col justify-center align-middle items-center'>
            <img
                className="rounded-full w-64 h-72 mt-20"
                src="https://e0.pxfuel.com/wallpapers/168/994/desktop-wallpaper-downloa-swami-vivekananda-quotes-swami-vivekananda.jpg" />
            <h2 className="text-2xl mt-10 font-bold">શ્રી વિવેકાનંદ એજ્યુકેશન ઇન્સ્ટિટ્યૂટ</h2>
            <input className='border-solid border-2 rounded-md w-100 md:w-1/2 lg:w-1/4 border-blue-500 px-3 py-1 mt-16' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className='bg-orange-500 rounded-md px-6 py-2 mt-2 text-white' onClick={login}>
                Login
            </button>
        </div>
    )
}

export default LoginPage