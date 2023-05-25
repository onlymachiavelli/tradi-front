



const Modal = ({...props}) =>{
    return (

            <div className="w-1/4  h-auto bg-white shadow-md  overflow-hidden ">
        <img className="w-full h-40 object-cover" alt="Product Image" src={props.logo} />
        <div className="p-4 ">
            <h2 className="text-xl font-bold mb-2">{props.title }</h2>
            <p className="text-gray-600 mb-4">{props.description }</p>
            <p className="text-gray-600 mb-4 text-sm">Created At : {props.created_at}</p>
            <div className="flex items-center">
            <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs mr-2">Added by you</span>
            </div>
        </div>
        </div>





        

        
    )
}

export default Modal