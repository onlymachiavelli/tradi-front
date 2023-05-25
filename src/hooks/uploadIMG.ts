import * as React from 'react'


//for uploading images
const useUpload = () =>{

    const [image, setImage] :any = React.useState()


    return {image, setImage}
}


export default useUpload