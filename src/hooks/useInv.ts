import * as React from 'react'
import axios from 'axios'
import * as Toaster from 'react-hot-toast'
import useUpload from './uploadIMG'




const useInv =() =>{
    const [shit, setShit] = React.useState("")

    const [title, setTitle] = React.useState("")
    const [description, setDescription] = React.useState("")
    const saveCat = async (image:any)=>{
        const reqBody = {
            title: title , 
            description: description,
            logo: image
        }
        if (!reqBody.logo) {
            return 
        } 
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
    const [prodTitle, setProdTitle] :any = React.useState()
    const [prodDescription, setProdDescription]:any = React.useState()
    const [prodPrice, setProdPrice] :any= React.useState()
    const [prodCat, setProdCat]:any = React.useState()
    const {url} = useUpload(true)
    const saveProd = async (img:any) =>{
            let image : any = img ? img : url
            console.log("The image is : " , image) 
        const reqBody = {
            title: prodTitle,
            description: prodDescription,

            price: Number(prodPrice),
            image: localStorage.getItem("img"),
        }
        const token = localStorage.getItem("token")
        if (token) {
            await axios.post("http://localhost:3001/product", reqBody, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                    }
                    })
                    .then(res=>{
                        if (res.status == 201) {
                            Toaster.toast.success("Product is added")
                        }
                    }
                    ).catch(e=>{
                        Toaster.toast.error("Error adding product")
                    }
                    )
                    } 
    }

    
    return {
        title, setTitle, description, setDescription,
        saveCat,
        getCategory,
        cats, setMeow , 
        getProds,
        prods, 
        prodTitle, setProdTitle, prodDescription, setProdDescription,  
        prodPrice, setProdPrice, 
        prodCat, setProdCat,
        saveProd

    } 
}
export default useInv