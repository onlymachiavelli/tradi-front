import * as React from 'react'
import useLogin from '../hooks/login'
import * as Toaster from 'react-hot-toast'
const Login = () =>{
    const { LoginF, username, password , setUsername, setPassword} = useLogin()
    return (
        <div className='w-full bg-[#ecebeb] h-screen flex justify-center items-center'>
            <div className='w-1/3 h-auto'>
            <form className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4 border"
            onSubmit={(e)=>{
                e.preventDefault()
                LoginF()
            }}
            >
                <p className='flex justify-center py-4 font-bold text-3xl text-gray-700'>Login Admin</p>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" >
                    Username
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" 
                value={username}
                
                onChange={(e)=>{
                    setUsername(e.target.value)
                    }
                }
                />
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                </label>
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                    }
                }
                />
                <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Sign In
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                </a>
                </div>
            </form>
            </div>
            <Toaster.Toaster
        position="top-right"
        reverseOrder={false}
      />
        </div>
    )

}
export default Login