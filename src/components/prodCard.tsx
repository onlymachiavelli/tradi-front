const Card =({...props})=>{
    return (
        <div className="w-9/12 h-40 bg-[#f7f1f1] shadow-xl rounded  overflow-hidden flex items-center pr-2  m-auto  mb-4">
                <img className="h-full" src={props.Prod.image} alt={`Product Number ${props.Prod.id}`} />
                <div className="pl-5">
                    <p className="text-black font-bold text-xl">{
                        props.Prod.title ? props.Prod.title : "Product Name"
                    }</p>
                    <p className="text-red-500 text-sm pt-1 font-bold">Price: {
                        props.Prod.price ? props.Prod.price : "Product Price"

                    } DT</p>
                    <p className="w-11/12 text-sm pt-1">{
                    
                        props.Prod.description ? props.Prod.description : "Product Description"
                    }</p>
                    <p className="text-gray-500 text-xs pt-1">Posted at: {
                        props.Prod.created_at ? props.Prod.created_at : "Product Date"

                    }</p>
                    <div className="flex justify-between">
                        <p className="text-gray-500 text-xs">Category : {
                            props.Prod.id ? props.Prod.id  : "Product Category"

                        }</p>
                        <p className="text-gray-500 text-xs">Product ID: {
                            props.Prod.id ? props.Prod.id : "Product ID"
                        }</p>
                    </div>
                </div>
            </div>

    )
}

export default Card