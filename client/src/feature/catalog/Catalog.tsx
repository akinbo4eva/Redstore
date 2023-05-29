import React, { useEffect, useState } from 'react';
import {Product} from '../../app/layout/models/product';
import ProductList from './ProductList';



export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:5258/api/Products')
    .then(response => response.json())
    .then(data => setProducts(data))
  },[])

  // function addProduct() {
  //   setProducts(prevState => [...prevState, 
  //     {
  //       id: prevState.length + 101,
  //       name: "product" + (prevState.length + 1), 
  //       price: (prevState.length * 100) + 100,
  //       brand: "some brand",
  //       description: "some description",
  //       pictureUrl: "http://picsum.photos/110"
  //     }])
  // }


  return (
    <>
      <ProductList products={products}/>
    </>
  )
}
