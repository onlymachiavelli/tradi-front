




const MeCard = ({...props}) =>{
    console.log(props.Me)
    return (
        <div className="w-full mx-auto bg-white shadow-md  overflow-hidden">
                <img className="w-full h-80 object-cover" src={props.Me.picture ? props.Me.picture :"https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg" } alt="User Avatar" />
                <div className="p-4 ">
                    <h2 className="text-xl font-bold mb-2">{props.Me.fullname}</h2>
                    <p className="text-gray-600 mb-4">@{props.Me.username}</p>
                    <p className="text-gray-600 mb-4">{props.Me.email}</p>
                    <p className="text-gray-600 mb-4">Created At : {props.Me.created_at}</p>
                    <p className="text-gray-600 mb-4">Last Updated At : {props.Me.updated_at}</p>
                    <div className="flex items-center">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs mr-2">{props.Me.role  == "inv" ? "Inventory Manager" : props.Me.role=="adm" ? "Admin" : "Order Manager" }</span>
                    <span className="text-gray-500 text-xs">{props.Me.location}</span>
                    </div>
                </div>
                </div>
    )
}


export default MeCard