
import * as React from 'react'
import Modal from './orderModal'
import useDash from "../hooks/manageDash"

const Orders = ({...props})=>{
    const {getOrders, orders, me} = useDash()

    React.useEffect(()=>{
        getOrders()
    },[])
    if (props.Role !=="ord"&& props.Role !== "adm") {
        return (
            <div className='w-full h-screen flex items-center justify-center'>
                You don't have access to this Controller
            </div>
        )
    }
    return (
        <div className="w-full h-auto">


            



            <nav className="w-full h-auto bg-blue-700 p-4 border-l">
                <p className="text-white text-xl">Manage Orders</p>

                <nav>
                    
                </nav>
            </nav>
            <div className='w-full h-auto '>
                <table className=" w-11/12 m-auto mt-10 rounded-xl shadow-md">
                    <tr>
                        <th>ID</th>
                        <th>Products</th>
                        <th>Full Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Ordered At</th>
                        <th>Actions</th>
                    </tr>
                    
                    {
                    
                    orders.map((order:any,
                        index:number
                        )=>{
                        return (
                            <>
                            <tr
                                key={index}
                            >
                                <td>{orders[index].id}</td>
                                <td >{orders[index].list}</td>
                                <td >{orders[index].fullname}</td>
                                <td>{orders[index].address}</td>
                                <td >{orders[index].phone}</td>
                                <td >{orders[index].email}</td>
                                <td >{ orders[index].total ? orders[index].total :"Not Calculated"}</td>
                                <td >{orders[index].created_at}</td>
                                <td >{orders[index].reviewd ? "Done" : "Not Yet"}</td>

                        </tr> 

                        <tr >
                           <th colSpan={9}>
                           {
                                orders[index].products.map((prod: any, key:any)=>{
                                        return (
                                            <Modal
                                                Prod={prod}
                                            
                                            />
                                        )
                                })
                            }
                           </th>
                        </tr>
                            </>
                        


                        )
                        
                    })

                    

                                    
                    }
                

                    
                </table>
            </div>
        </div>
    )
}


export default Orders