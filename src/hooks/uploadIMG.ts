import * as React from 'react'

import storage from '../utils/connect.firebase'
import {v4} from 'uuid'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'

//for uploading images
const useUpload = (prod : boolean, psh:any) =>{

    const [image, setImage] :any = React.useState()
    const upload = async () =>{

        if (!upload) return 
        const id = v4()
        const storageRef = ref(storage, `${prod?"prodImages/" : "catImages"}/${image.name+id}`)
        await uploadBytes(storageRef, image).then(()=>{
            getDownloadURL(storageRef).then(url=>{
                console.log(url)
            })
            
            //psh()
        }).catch(e=>{
            console.log(e)
        })

        




    }

    return {image, setImage, upload}
}


export default useUpload