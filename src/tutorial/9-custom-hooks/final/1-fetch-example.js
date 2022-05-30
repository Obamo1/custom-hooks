import React, {useState, useEffect, useCallback} from "react";
import { useFetch } from "./2-useFetch";

const url = 'https://course-api.com/javascript-store-products'

function Example () {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await fetch(url)
    const products = await response.json()
    setProducts(products)
    setLoading(false)
  }

  useEffect(()=> {
    getProducts()
  }, [url])
  console.log(products)
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>

  )
}
export default Example;