import * as React from 'react';
import useSignUp from '../hooks/useSignup';
import * as Toaster from 'react-hot-toast'
import useUpload from '../hooks/profilePic';
const Register = () => {
  const {username, password, setUser, setPassword, email, setEmail, admin, setAdmin, phone, setPhone,fullname, setFullname, Create} = useSignUp()
  const {setImage,image, upload} = useUpload()
  const handleFileChange = (event: any) => {
    if (event.target.files) {
      setImage(event.target.files[0])
    }
  }

  return (
    <div className="w-full h-screen bg-[#e6e6e6] overflow-hidden">
      <form className="w-3/4 shadow-md border p-5 mx-auto mt-20 bg-white rounded" 
      onSubmit={(e)=>{
        e.preventDefault()
        upload(()=>{
          Create()
          Toaster.toast.success('Account created successfully')
        })
        
      }}
      >
      <p className='flex justify-center py-4 font-bold text-3xl text-gray-700 pb-10'>Register Admin</p>

        <div className="flex justify-between">
          <aside className="w-1/2">
            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Full name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="John Wick"
                value={fullname} 
                onChange={(e)=>{
                  setFullname(e.target.value)
                }}
              />
              <p className="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Username
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="johnwick"
                value={username}
                onChange={(e)=>{
                  setUser(e.target.value)
                }}
              />
            </div>
            <div className="w-full px-3 pt-5">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="johnwick@gmail.com"
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
              />
            </div>
          </aside>

          <aside className="w-1/2">
            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                placeholder="******************"
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }
                }
              />
              <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
            </div>
            <div className="w-full">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Phone
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="+1911"
                value={phone}
                onChange={(e)=>{
                  setPhone(e.target.value)
                }}
              />
            </div>
            <div className="w-full pt-5">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Admin Role
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  value={admin}
                  onChange={(e)=>{
                    setAdmin(e.target.value)
                  }}
                >
                  <option value="null">Choose A Role</option>
                  <option 
                  value={"adm"}>Admin (Access To Everything)</option>
                  <option value={"inv"}>Inventory Manager</option>
                  <option value={"ord"}>Orders Manager</option>
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
          </aside>
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

        <div className="flex justify-center">
          <button className="shadow bg-blue-700 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-5">
            Sign Up
          </button>
        </div>
      </form>
      <Toaster.Toaster
        position="top-right"
        reverseOrder={false}
      />
    </div>
  );
};

export default Register;
