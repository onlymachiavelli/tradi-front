import * as React from 'react'

import { Link} from 'react-router-dom'
import Catego from './Categories'
import * as Toaster from 'react-hot-toast'
import Products from './Products'
const Inventory =  ({...props}) =>{
    const [block , setBlock] :any = React.useState(<Catego/>)



    if (props.Role !=="inv" && props.Role !== "adm") {
        return (
            <div className='w-full h-screen flex items-center justify-center'>
                You don't have access to this Controller
            </div>
        )
    }
    return (
        <div>
             <nav className="w-full h-auto bg-blue-700 p-4 border-l flex " >
                <p className="text-white text-xl">Manage Inventory</p>

                <nav className='p-0.5 ml-10 gap-4 flex'>
                    <Link to={""} className='text-white'
                        onClick={()=>{
                            setBlock(<Catego/>)
                        
                        }}
                    
                    >Manage Category</Link>
                    <Link to={""} className='text-white'
                    
                    onClick={()=>{
                        setBlock(<Products/>)
                    }}
                    >Manage Products</Link>
                </nav>
            </nav>



            <div className='w-full h-auto'>

                {block}
            </div>

            



            <Toaster.Toaster
                position="top-right"
                reverseOrder={false}
            />


        </div>
    )


}

export default Inventory