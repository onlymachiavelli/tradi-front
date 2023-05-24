import * as React from 'react'
import axios from 'axios'
import * as Toaster from 'react-hot-toast'

const useSignUp = () =>{

    const [username, setUser] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [phone, setPhone] = React.useState("")
    //fullname 

    const [fullname, setFullname] = React.useState("")
    
    //admin role 
    const [admin, setAdmin] = React.useState("")


    const Create = async () =>{
        const reqBody = {
            username: username,
            password: password,

            email: email,
            phone: phone,
            fullname: fullname,
            role: admin,
        }

        await axios.post("http://localhost:3001/me/", reqBody).then(res=>{
            console.log(res)
            if (res.status == 201) {
                Toaster.toast.success("Account created successfully")

                //mode to dashboard 
                window.location.href = "http://localhost:3001/dashboard"


            }else{
                Toaster.toast.error("Account creation failed")
                console.log(res)

            }
        }).catch(e=>{
            console.log(e)
            Toaster.toast.error("Account creation failed")
        })
        
    }
    return {
        username, password, setPassword, setUser
        , email, setEmail, admin, setAdmin, phone, setPhone,
        fullname, setFullname, 
        Create
    }
}


export default useSignUp