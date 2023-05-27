import * as React from 'react'
import axios from 'axios'



const useSearch = () =>{
    const [searchTxt, setS] = React.useState("")
    const [searchResults, setSR] = React.useState([])
    const search = async () =>{
        await axios.get(`http://localhost:3001/product/?filter=${searchTxt}`).then((res)=>{
            setSR(res.data)
        }).catch(e=>{
            console.log(e)
        })
        
    }

    return {
        searchTxt,
        setS,
        searchResults,
        search
    }
}

export default useSearch