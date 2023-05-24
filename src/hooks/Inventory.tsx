import * as React from 'react'

import { Link} from 'react-router-dom'
import Catego from '../components/Categories'

const Inventory =  ({...props}) =>{
    const [block , setBlock] :any = React.useState(<Catego/>)



    if (props.Role !=="inv" && props.Role !== "adm") {
        return (
            <div>
                You don't have access to this Controller
            </div>
        )
    }
    return (
        <div>
             <nav className="w-full h-auto bg-blue-700 p-4 border-l flex " >
                <p className="text-white text-xl">Manage Inventory</p>

                <nav className='p-0.5 ml-10 gap-4 flex'>
                    <Link to={""} className='text-white'>Manage Category</Link>
                    <Link to={""} className='text-white'>Manage Products</Link>
                </nav>
            </nav>



            <div className='w-full h-auto'>

                {block}
            </div>
        </div>
    )


}

export default Inventory