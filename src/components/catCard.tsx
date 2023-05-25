


const Card  =  ({...props}) =>{

    console.log(props.cat)
    return (
        <div className="w-2/6 mx-auto bg-white shadow-md  overflow-hidden">
        <img className="w-full h-60 object-cover" src={props.cat.logo} alt="User Avatar" />
        <div className="p-4 ">
            <h2 className="text-xl font-bold mb-2">{props.cat.title}</h2>
            <p className="text-gray-600 mb-4">{props.cat.description}</p>
            <p className="text-gray-600 mb-4">Created At : {props.cat.created_at}</p>
            <div className="flex items-center">
            <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs mr-2">Added By You</span>            
            </div>
        </div>
        </div>
    )

}

export default Card