import * as React from 'react'
import axios from 'axios'
import * as Toaster from 'react-hot-toast'

const useInv =() =>{







    //to save a category
    const [title, setTitle] = React.useState("")
    const [description, setDescription] = React.useState("")

    const saveCat = async (image:any)=>{
        const reqBody = {
            title: title , 
            description: description,
            logo: image
        }

        //get the token 
        const token = localStorage.getItem("token")
        if(token){
            //post the category
            await axios.post("http://localhost:3001/category", reqBody, {
                headers: {
                    "Authorization": "Bearer " + token
                }
            }).then( res=>{
                if (res.status == 201) {
                    Toaster.toast.success("Category is added ")
                    setDescription("")
                    setTitle("")
                }
            })      
            .catch(e=>{
                Toaster.toast.error("Error adding category")
            })  
        }
    }


    return {
        title, setTitle, description, setDescription,
        saveCat
    }
}

export default useInv