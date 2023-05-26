import * as React from 'react'
import axios from 'axios'




const useProds = ()=>{

    const [prods, setProds] :any= React.useState([])
    const getAll = async ()=>{
        await axios.get('http://localhost:3001/product' ).then(res=>{

            setProds(res.data)
            console.log(res.data)
        })
        .catch(e=>{
            console.log(e)
        })
    }


    return {
        prods, getAll
    }
}

export default useProds