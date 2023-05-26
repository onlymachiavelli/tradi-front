import * as React from 'react'
import Card from './prodCard'

import useInv from '../hooks/useInv'

// Get products
const Products = () => {
  const { getProds, prods, cats, getCategory } = useInv()

  React.useEffect(() => {
    const fetchData = async () => {
      await getProds()
    }

    fetchData()
  }, [])

  return (
    <div className="w-full h-auto pt-10">
      <div className="flex w-full items-center justify-center flex-wrapper">
        {prods.map((prod: any, index: any) => {
          
          return <Card Prod={prod}  key={index} />
        })}
      </div>
    </div>
  )
}

export default Products
