import * as React from 'react'
import {Link} from 'react-router-dom'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Card from '../components/prods.cards';

  
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
  
const Home = () =>{
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



                <div ></div>
                <div ></div>
                <div ></div>
                <div ></div>
                <div ></div>
                <div ></div>

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




                    <button className='text-white '>
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
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

            </div>

            <iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12785.711775826701!2d10.2699248!3d36.7603!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd49fa15643927%3A0xad64c8c462b52435!2sHigher%20Institute%20of%20Technological%20Studies%20of%20Rades!5e0!3m2!1sen!2stn!4v1685130423046!5m2!1sen!2stn" className='w-full h-auto pt-20' style={{ border: 0, height:"500px" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </main>
    )
}

export default Home