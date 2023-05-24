import * as React from 'react'
import axios from 'axios'

import * as Toaster from 'react-hot-toast'
const useLogin =  () =>{
    const [username , setUsername] = React.useState("")
    const [password , setPassword] = React.useState("")


    const LoginF = async () =>{

            const reqBody = {
                username : username , 
                password : password 
            }


            await axios.post("http://localhost:3001/me/auth", reqBody).then(res=>{
                console.log(res)
                if (res.status == 200) {
                    //set token 
                    localStorage.setItem("token", String(res.data))
                    Toaster.toast.success("Login successfully")
                    //mode to dashboard 
                    window.location.href = "http://localhost:5173/dashboard"
                }else{
                    Toaster.toast.error("Login failed")
                    console.log(res)
                }
            }
            ).catch(e=>{
                Toaster.toast.error("Login failed")
                console.log(e)
            }
            )
    }

    return {
        LoginF, username, password , setUsername, setPassword
    }
}



export default useLogin

