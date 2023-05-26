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
        if (!reqBody.logo) {
            console.log("error ")
            return 
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


    const [cats, setMeow] :any= React.useState([])
    const getCategory = async () =>{
        await axios.get("http://localhost:3001/category").then(res=>{
            if (res.status == 200) {
                setMeow(res.data)
                console.log(cats)
            }
        }).catch(e=>{
            console.log(e)
        })
    }







    const [prods, setProds] :any = React.useState([])
    const getProds = async () =>{
        await axios.get("http://localhost:3001/product").then(async (res)=>{
            if (res.status == 200) {
                setProds(res.data)


            



            }
        }).catch(e=>{
            console.log(e)
        })
    }

    return {
        title, setTitle, description, setDescription,
        saveCat,


        getCategory,
        cats, setMeow , 

        getProds,
        prods, 

    }








    
}

export default useInv