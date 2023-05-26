import * as React from 'react'
import {Link} from 'react-router-dom'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Card from '../components/prods.cards';
import Pop from '../components/orderNow';
import useProds from '../hooks/useProds';
import axios from 'axios'
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '600px',
    
  }
  const slideImages = [
    {
      url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 1'
    },
    {
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      caption: 'Slide 2'
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 3'
    },
  ]



if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", "[]")
}
  
const Home = () =>{
    const {prods, getAll} = useProds()
    const [vis, setVis] = React.useState("hidden")
    const [v, setV] = React.useState("hidden")

    const getCart = ()=>{
        const cart = localStorage.getItem("cart")
        const cartArray = JSON.parse(cart || "[]")
        console.log(cartArray)
        return cartArray
    }
    React.useEffect(()=>{
        getAll()
    }, [])
    return (
        <main className='w-full h-auto'>
            
            <header className='w-full h-auto flex bg-[#111] p-5 justify-between'>
                <Link  to={""} className='text-white font-bold mt-2' >Tradio Store</Link>

                <nav className=' mt-2 gap-5 flex'>
                    <Link to={""} className='text-white '>Home</Link>
                    <Link to={""} className='text-white '>All The Products</Link>
                    <Link to={""} className='text-white '>Blogs</Link>
                    <Link to={""} className='text-white '>Contact Us</Link>
                    <Link to={""} className='text-white '>Best Offers</Link>
                    <Link to={""} className='text-white '>About</Link>
                </nav>
                {[...Array(12)].map((e, i) => <div key={i}></div>)}

                <div className='flex gap-5'>
                

            <div className="flex gap-5 items-center justify-center">
            <div className="relative">
                <div className="bg-gray-200">
                <div className="relative">
                    <div className="absolute top-1.5 left-2">
                    <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                    </div>
                    <input
                    type="text"
                    className="h-10 w-96 pl-10 pr-20 text-sm z-0 focus:shadow focus:outline-none"
                    placeholder="Search anything..."
                    />
                    <div className="absolute top-0 right-0">
                    <button className="h-10   text-sm w-20 text-white bg-red-500 hover:bg-red-600 pb-0.5">Search</button>
                    </div>
                </div>
                </div>
            </div>
            </div>




                    <button className='text-white '
                    onClick={()=>{
                        setVis("flex") 
                    }}
                    >
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </button>
                </div>
            </header>  


            <div className="slide-container h-auto">
                <Slide>
                {slideImages.map((slideImage, index)=> (
                    <div key={index}>
                    <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }} >
                    <div className='w-full h-full flex justify-center items-center text-center '>
                    <div className='bg-[#000000a9] w-full h-full flex items-center justify-center'>
                       <div>
                       <p className='text-white pb-2'>TunisianTraditional Store</p>
                        <p className='text-white text-4xl p-5 font-bold'>Creative & Innovative</p>
                        <p className='text-white text-5xl p-5 font-bold'>Digital Solution</p>
                        <br/>
                        <div className='flex gap-4 justify-center'><Link to={""} className="text-white px-10 py-4 bg-red-500">Free Quote</Link>
                        <Link to={""} className="text-white px-10 py-4 bg-none border border-white duration-500 hover:bg-[#ffffff57]">Contact US</Link></div>
                       </div>
                    </div>
                </div>
                    </div>
                    </div>
                ))} 
                </Slide>
            </div> 


            <div className='w-full h-1 bg-red-500'></div>










            <div className='grid w-4/5 h-auto grid-cols-3 gap-4 m-auto pb-10 pt-20'>

            <div className='bg-red-500 text-center p-10 shadow-2xl rounded'>
                <i className="fa fa-thumbs-up text-white text-6xl" aria-hidden="true"></i>
                <p className='text-white font-bold text-xl p-5'>Happy Clients</p>
                <p className='text-white font-bold'>250</p>
            </div>

            <div className='bg-red-100 text-center p-10 shadow-2xl rounded border border-gray-500'>
                <i className="fa fa-check-circle text-red-500 text-6xl" aria-hidden="true"></i>

                <p className='text-red-500 font-bold text-xl p-5'>Delivered Products</p>
                <p className='text-red-500 font-bold'>150369</p>
            </div>
            <div className='bg-red-500 text-center p-10 shadow-2xl rounded'>
                <i className="fa fa-trophy text-white text-6xl" aria-hidden="true"></i>
                <p className='text-white font-bold text-xl p-5'>Star Rates</p>
                <p className='text-white font-bold'>4.5/5 Stars</p>
            </div>
            </div>


            <p className='m-auto block w-10/12 pb-10 font-bold text-2xl text-gray-700'>Our Products </p>



            <div className="flex justify-center items-center min-h-screen  w-10/12 m-auto flex-wrap">
                    {
                        prods.map((prod:any, index:number)=>{
                            console.log( "hey", prod)
                            return (
                                <Card Prod={prod} key={index} />
                            )
                        })
                    }
            
          

            </div>

            <iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12785.711775826701!2d10.2699248!3d36.7603!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd49fa15643927%3A0xad64c8c462b52435!2sHigher%20Institute%20of%20Technological%20Studies%20of%20Rades!5e0!3m2!1sen!2stn!4v1685130423046!5m2!1sen!2stn" className='w-full h-auto pt-20' style={{ border: 0, height:"500px" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>










<div className="flex items-end w-full min-h-screen bg-white">

    <footer className="w-full text-gray-700 bg-gray-100 body-font">
        <div
            className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
            <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                    <svg className="w-auto h-5 text-gray-900 fill-current" viewBox="0 0 202 69"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M57.44.672s6.656 1.872 6.656 5.72c0 0-1.56 2.6-3.744 6.552 8.424 1.248 16.744 1.248 23.816-1.976-1.352 7.904-12.688 8.008-26.208 6.136-7.696 13.624-19.656 36.192-19.656 42.848 0 .416.208.624.52.624 4.576 0 17.888-14.352 21.112-18.824 1.144-1.456 4.264.728 3.12 2.392C56.608 53.088 42.152 69 36.432 69c-4.472 0-8.216-5.928-8.216-10.4 0-6.552 11.752-28.08 20.28-42.952-9.984-1.664-20.176-3.64-27.976-3.848-13.936 0-16.64 3.536-17.576 6.032-.104.312-.52.52-.832.312-3.744-7.072-1.456-14.56 14.144-14.56 9.36 0 22.048 4.576 34.944 7.592C54.736 5.04 57.44.672 57.44.672zm46.124 41.08c1.144-1.456 4.264.728 3.016 2.392C100.236 53.088 85.78 69 80.06 69c-4.576 0-8.32-5.928-8.32-10.4v-.208C67.58 64.32 63.524 69 61.34 69c-4.472 0-8.944-4.992-8.944-11.856 0-10.608 15.704-33.072 24.96-33.072 4.992 0 7.384 2.392 8.528 4.576l2.6-4.576s6.656 1.976 6.656 5.824c0 0-13.312 24.336-13.312 30.056 0 .208 0 .624.52.624 4.472 0 17.888-14.352 21.216-18.824zm-40.56 18.72c2.184 0 11.752-13.312 17.368-22.048l4.16-7.488c-8.008-7.904-27.248 29.536-21.528 29.536zm57.564-38.168c-2.184 0-4.992-2.808-4.992-4.784 0-2.912 5.824-14.872 7.28-14.872 2.6 0 6.136 2.808 6.136 6.344 0 2.08-7.176 12.064-8.424 13.312zm-17.68 46.592c-4.472 0-8.216-5.928-8.216-10.4 0-6.656 16.744-34.528 16.744-34.528s6.552 1.976 6.552 5.824c0 0-13.312 24.336-13.312 30.056 0 .208.104.624.624.624 4.472 0 17.888-14.352 21.112-18.824 1.144-1.456 4.264.728 3.12 2.392-6.448 8.944-20.904 24.856-26.624 24.856zM147.244.672s6.656 1.872 6.656 5.72c0 0-25.792 43.784-25.792 53.56 0 .416.208.624.52.624 4.576 0 17.888-14.352 21.112-18.824 1.144-1.456 4.264.728 3.12 2.392C146.412 53.088 131.956 69 126.236 69c-4.472 0-8.216-5.928-8.216-10.4 0-10.4 29.224-57.928 29.224-57.928zM169.7 60.16c3.848-2.392 7.904-6.864 10.816-10.92 6.656-9.464 11.544-20.696 10.504-27.352-.312-3.432-.104-4.056 3.12-2.704 5.2 2.392 11.336 8.632 2.184 22.88-5.2 8.008-12.48 15.288-19.344 19.76-2.704 1.768-6.344 3.328-9.984 4.16-.52.416-1.04.728-1.456.936-1.872 1.352-4.264 2.08-7.592 2.08-14.664 0-16.848-12.272-16.848-16.016 0-2.392 3.224-4.68 4.784-3.744.208.104.312.416.312.624 0 2.808 1.872 13.104 9.984 13.104 7.904 0 3.432-18.304 2.288-27.144-1.456 2.288-3.432 4.992-5.616 8.32-2.6 3.744-5.72 1.456-4.784 0 5.824-8.424 9.152-13.832 11.856-18.616 1.248-2.08 3.328-3.328 6.448-3.328 2.704 0 5.824 3.016 6.864 4.784.312.52 0 1.04-.52 1.144a5.44 5.44 0 00-4.368 5.408c0 6.968 2.6 17.16 1.664 24.856l-.312 1.768z"
                            fill-rule="nonzero" /></svg>
                </a>
                <p className="mt-2 text-sm text-gray-500">Design, Code and Ship!</p>
                <div className="mt-4">
                    <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                        <a className="text-gray-500 cursor-pointer hover:text-gray-700">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                </path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                                </path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
            <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">About</h2>
                    <nav className="mb-10 list-none">
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-gray-900">Company</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-gray-900">Careers</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-gray-900">Blog</a>
                        </li>
                    </nav>
                </div>
                
               
                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Contact</h2>
                    <nav className="mb-10 list-none">
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-gray-900">Send a Message</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-gray-900">Request a Quote</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-gray-900">+123-456-7890</a>
                        </li>
                    </nav>
                </div>
            </div>
        </div>
        <div className="bg-gray-300">
            <div className="container px-5 py-4 mx-auto">
                <p className="text-sm text-gray-700 capitalize xl:text-center">© 2023 All rights reserved </p>
            </div>
        </div>
    </footer>




</div>


    


        <div className={`fixed w-full z-0 h-screen top-0 bg-[#000000b6] ${vis} items-center justify-center`}>
                    
        <div
  className="relative w-screen max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
  aria-modal="true"
  role="dialog"
>
  <button className="absolute end-4 top-4 text-gray-600 transition hover:scale-110"
    onClick={()=>{
        setVis("hidden")
    }}
  >
    <span className="sr-only">Close cart</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>

  <div className="mt-4 space-y-6">
  <ul className="space-y-4">



{

    getCart().map((prod: any, index: number) => {
        
        return (
            <li className="flex items-center gap-4" key={index}>
              <img
                src={prod.image}
                alt=""
                className="h-16 w-16 rounded object-cover"
              />
      
              <div>
                <h3 className="text-sm text-gray-900">{prod.title}</h3>
      
                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">{prod.price} DT</dt>
                  </div>
                </dl>
              </div>
            </li>
          )


     })

}


</ul>


    <div className="space-y-4 text-center">
      <a
        href="#"
        className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
        onClick={()=>{
            localStorage.setItem("cart", "[]")
            setVis("hidden")
        }}
      >
        Clear my Cart
      </a>

      <a
        href="#"
        className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
      
        onClick={()=>{
        
            setV("fixed")
        }

        }
      >
        Order Now
      </a>

      <a
        href="#"
        className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
        onClick={()=>{
            setVis("hidden")
        }}
      >
        Continue shopping
      </a>
    </div>
  </div>
</div>
                </div>    


                <Pop Vis={v} setV={setV}/>   
        </main>
    )
}

export default Home