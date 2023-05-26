import * as React from 'react'
import Card from './prodCard'

import useInv from '../hooks/useInv'
import useUpload from '../hooks/uploadIMG'
import * as Toaster from 'react-hot-toast'
const Products = () => {
    const {image, setImage, upload, url, setUrl} = useUpload(true)
  const { getProds, prods, cats, getCategory , setMeow,
    prodTitle, setProdTitle, prodDescription, setProdDescription,
        
        prodPrice, setProdPrice, 
        prodCat, setProdCat,
        saveProd
} = useInv()
    const [vis, setVis] = React.useState("hidden")
    const handleFileChange = (event :any) => {
        if (event.target.files) {
          setImage(event.target.files[0]);
        }
      }
  React.useEffect(() => {
      getProds()
      getCategory()
  }, [])
  return (
    <div className="w-full h-auto pt-10">
      <div className="h-auto w-full ">
        {prods.map((prod: any, index: any) => {
          
          return <Card Prod={prod}  key={index} />
        })}
      </div>
      <button className='fixed bottom-5 right-5 bg-blue-700 text-white font-bold w-10 h-10 rounded-full shadow'
        onClick={()=>{
            setVis("fixed")
        }}
      >+</button>
      {
        
        <main className={`w-full h-screen ${vis} top-0 bg-[#000000a1] flex items-center  align-center justify-center`}>
            <form className="w-1/2  pt-10 bg-white p-10 mr-80">
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
                value={prodTitle}
                onChange={(e:any)=>{
                    setProdTitle(e.target.value)
                }}
            />
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
                value={prodDescription}
                onChange={(e:any)=>{
                    setProdDescription(e.target.value)
                }}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 pt-5">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              Price
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              placeholder="69.420DT"

                value={prodPrice}
                onChange={(e:any)=>{
                    setProdPrice(e.target.value)
                }}
            />
          </div>       
        <div className="w-full">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Category Of The Product
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"

                    onChange={(e:any)=>{
                        setProdCat(e.target.value)
                    }}
                >
                    <option value="null">Select a Category</option>
                  {
                    cats.map((cat:any, index:any)=>{
                        return (
                            <option key={index} value={cat.id}>{cat.title}</option>
                        )
                        })
                  }
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
        </div>
        <div className="flex items-center justify-center bg-grey-lighter pt-5">
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
        <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='button' onClick={()=>{
            upload(()=>{
              saveProd(url)

            })
            Toaster.toast.success("Done Adding the product")
            //setUrl('')
            setProdTitle('')
            setProdDescription('')
            setProdPrice('')
            setProdCat('')
            setVis("hidden")         
        }}>
                    Add Category
          </button>
          <button className="mt-5 ml-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='button' onClick={()=>{
                setVis("hidden")
        }}>
                    Cancel
          </button>
      </form>

        </main>
      }
      <Toaster.Toaster
                position="top-right"
                reverseOrder={false}
            />
    </div>
  )
}

export default Products
