



const Modal = ({...props}) =>{
    return (

            <div className="w-1/4  h-auto bg-white shadow-md  overflow-hidden ">
        <img className="w-full h-40 object-cover" alt="Product Image" src={props.Prod.image ? props.Prod.picture :"https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg" }/>
        <div className="p-4 ">
            <h2 className="text-xl font-bold mb-2">{props.Prod.title }</h2>
            <p className="text-gray-600 mb-4">{props.Prod.description }</p>
            <p className="text-gray-600 mb-4 text-sm">Price : {props.Prod.price}</p>
            <p className="text-gray-600 mb-4 text-sm">Created At : {props.Prod.created_at}</p>
            <div className="flex items-center">
            <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs mr-2">{props.Prod  ? "Inventory Manager" : props.Me.role=="adm" ? "Admin" : "Animal" }</span>
            </div>
        </div>
        </div>





        

        
    )
}

export default Modal