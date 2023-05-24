import axios from 'axios'
import Cookies from 'universal-cookie'
import * as React from 'react'

const cook = new Cookies()





const useDash =  () =>{
    
    
    


    //get me    
    const [me ,setMe] : any = React.useState({})
    const [orders, setOrders] :any= React.useState([])
    const getMe = async () =>{


        if (!localStorage.getItem("token")) {
            
            //move to login area 
            window.location.href = "/login"
        }

        //get teh user information 
            axios.get("http://localhost:3001/me/", {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
                
            }).then(res =>{
                console.log(res.data)
                setMe(res.data)
            }).catch(e=>{
                console.log(e)
                cook.remove("token")
                localStorage.removeItem("token")
                window.location.href = "/login"
            })
    }




    const getOrders = async () =>{
        const token = localStorage.getItem("token")
        if (!token) {
            //move to login area 
            window.location.href = "/login"
        }

        //get teh user information
        axios.get("http://localhost:3001/orders/", {
            headers: {
                "Authorization": `Bearer ${token}` 

        }
        }).then(res =>{
            console.log(res.data)
            setOrders(res.data.reverse())

            //add total to the orders 
            
        }   
        ).catch(e=>{
            console.log(e)
            cook.remove("token")
            localStorage.removeItem("token")
            window.location.href = "/login"
        }
        )

        //reverse the orders 
        


    }





    return {
        getMe, me, 
        getOrders, orders
    }
}


export default useDash