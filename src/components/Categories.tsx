

import React, { useState } from 'react';
import useUpload from '../hooks/uploadIMG';
import { ref, uploadBytes } from 'firebase/storage';
import useInv from '../hooks/useInv';
import Card from './catCard';
const Catego = ({ ...props }) => {
  const { image, setImage, upload, url, setUrl } = useUpload(false);
  const {saveCat, title, description, setTitle, setDescription, cats, setMeow, getCategory} = useInv()
  const handleFileChange = (event :any) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }

    console.log(image)
  };


  React.useEffect(()=>{

        getCategory()

  },[])


  return (
    <div>
      <form className="w-11/12 m-auto pt-10">
      <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              Title
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Car"

              value={title}

              onChange={(e)=>setTitle(e.target.value)}
            />
            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Description
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="A Vehicle"

              value={description}
              onChange={(e)=>setDescription(e.target.value)}

            />
          </div>
        </div>

        <div className="flex items-center justify-center bg-grey-lighter">
          <label className="w-64 flex flex-col items-center px-4 py-6 bg-blue-500 text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
            <svg className="w-8 h-8" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span className="mt-2 text-base text-white leading-normal">Select Image</span>
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='button' onClick={()=>{
            upload(()=>saveCat(url))
            setUrl('')
        }}>
                    Add
          </button>
      </form>


      <div className='w-full h-auto flex items-center justify-center flex-wrap gap-5 pt-10'> 
      
          {
              cats.map((cat :any, index:any)=>{
                  return (
                      <Card cat={cat} key={index} />
                  )
              })
          }
        </div>



        
    </div>
  );
};

export default Catego;
