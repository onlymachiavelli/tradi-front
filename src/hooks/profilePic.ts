import * as React from 'react'

import storage from '../utils/connect.firebase'
import {v4} from 'uuid'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'

//for uploading images
const useUpload = () =>{

    const [image, setImage] :any = React.useState()
    const [url, setUrl] : any = React.useState("")
    const upload = async (nxt:any) =>{

        if (!upload) return 
        const id = v4()
        const storageRef = ref(storage, `profile/${image.name+id}`)
        await uploadBytes(storageRef, image).then(()=>{
            getDownloadURL(storageRef).then(async(url)=>{
                setUrl(url)
                console.log(url)
                localStorage.setItem("prof", String(url))
                
                await nxt()
            })
            
        }).catch(async(e)=>{
            alert("No photo uploaded")
            console.log(e)
            await nxt()
        })

    }

    return {image, setImage, upload, url, setUrl}
}


export default useUpload