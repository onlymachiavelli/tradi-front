import * as React from 'react'

import {Link} from 'react-router-dom'
import useDash from '../hooks/manageDash'
import MeCard from '../components/meCard'
import Inventory from '../components/Inventory'
import Orders from '../components/orders'
const Dashboard = () =>{
    const {getMe, me} = useDash()
    React.useEffect(()=>{
        getMe()
    },[]) 
    const [tab, setTab] :any = React.useState()
    return (
            <div className='w-ull h-screen bg-dark flex items-center justify-center'>
            <aside className='w-1/4 h-full bg-red-500 flex items-center justify-between flex-col'>
                <div className='w-full flex items-center '>
                    <p className='text-white flex  items-center justify-center w-full pt-10 text-xl'>
                        
                    <i className="fa fa-tachometer text-3xl p-3" aria-hidden="true"></i>
                        &nbsp;Welcome { me.fullname}
                    </p>
                </div>  
                <div className='w-full flex flex-col    '>
                <Link to={""}className='text-white w-full py-4 bg-darg hover:bg-red-800 pl-4 duration-500' 
                onClick={()=>{
                
                    setTab(<MeCard Me={me} />)
                    }
                }
                >Home</Link>
                <Link to={""}className='text-white w-full py-4 bg-darg pl-4 hover:bg-red-800 duration-500'
                onClick={()=>{

                    setTab(<Inventory Role={me.role} />)
                }
            }
                >Inventory</Link>
                <Link to={""}className='text-white w-full py-4 bg-darg pl-4 hover:bg-red-800 duration-500'
                
                onClick={()=>{
                    setTab(<Orders Role={me.role} />)
                }}

                >Orders</Link>

                    
                </div>
                <div></div>
                <div className='pb-10'>
                    <button className='text-red-500 bg-white rounded w-48 h-11 font-bold' onClick={()=>{
                        localStorage.removeItem("token")
                        window.location.href = "/login"
                    }}>
                        Logout
                    </button>
                </div>
            </aside>
            <aside className='w-3/4 h-full bg-[#cfcdcd] overflow-y-auto'>
                    {
                        !tab ? <MeCard Me={me} /> : tab
                    }
            </aside>
        </div>
)
}
export default Dashboard