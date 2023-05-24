import axios from 'axios'

import * as React from 'react'

const useDash = async () =>{

    //get me    
    const [me ,setMe] = React.useState({})

    const getMe = async () =>{
        await axios.get("http://localhost:3001/me").then(res=>{
            console.log(res)
            setMe(res.data)
        }).catch(e=>{
            console.log(e)
        })

    }

}
