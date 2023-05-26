import * as React from 'react'
import axios from 'axios'

import {toast, Toaster} from 'react-hot-toast'

const Order = async (datas : any) =>{

    await axios.post('http://localhost:3001/orders/',datas).then((res)=>{
        console.log(res)
        toast.success('Order Placed Successfully')

    }
    )
    .catch((err)=>{
        console.log(err)
        toast.error('Order Failed')
    }
    )

}



const Pop = ({...props})=>{

    const [name , setname] = React.useState("")
    
    
    const [email , setemail] = React.useState("")
    const [phone , setphone] = React.useState("")

    const [address , setaddress] = React.useState("")
    return (
        <div className={`w-full h-full ${props.Vis} top-0 bg-[#000000a6] flex items-center justify-center`}>
            <form className="w-1/2 m-auto pt-10 bg-white p-10 mr-80">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  Full Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  value={name}
                  placeholder="John Dhoe"
                  onChange={(e: any) => {
                    setname(e.target.value)
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                  Phone Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="911"
                    value={phone}
                  onChange={(e: any) => {
                    setphone(e.target.value)
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 pt-5">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="m2@me.com"
                    value={email}

                  onChange={(e: any) => {
                    setemail(e.target.value)
                  }}
                />
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 pt-5">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                    value={address}
                  placeholder="Technopole Ecole D'ingenieure"
                  onChange={(e: any) => {
                    setaddress(e.target.value)
                  }}
                />
              </div>
              
            </div>
           
            <button
              className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {
               
                let list : any = []
                let l=""
                //get local storage  :
                let cart = localStorage.getItem("cart")
                if(cart){
                    list = JSON.parse(cart)
                }

                //add item to cart
                for (let i=0;i<list.length;i++) {
                    l+=String(list[i].id)
                }
                Order({
                    fullname : name, 
                    email : email,
                    phone : phone,
                    address : address,
                    list:l
                })
                
                //setVis("hidden")
              }}
            >
              Add Products
            </button>
            <button
              className="mt-5 ml-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {
                props.setV("hidden")

            }}
            >
              Cancel
            </button>
          </form>

          <Toaster
        position="top-right"
        reverseOrder={false}
      />
        </div>
    )

}


export default Pop