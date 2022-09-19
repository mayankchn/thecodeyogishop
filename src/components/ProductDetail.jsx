import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
// import data from '../data';
import { getProduct } from './api'
import Loading from './Loading'
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import Error from './Error'


function ProductDetail(props) {
  // console.log(props)
  const id = +useParams().id
  // console.log('id ', id)

  const [product, setProduct] = useState()

  const [load, setLoad] = useState(true)

  const [quantity, setQuantity] = useState(1)
  // console.log('quantity: ', quantity)
  function handleQuantity(event) {
    setQuantity(function() {
      return +event.target.value
    })
  }
  
  function handleCart() {
    console.log('handleCart clicked...')
    props.onCartChange(id, quantity)
  }

  function handleNext() {
    setQuantity(function() {
      return 1
    })
  }

  function handlePrev() {
    setQuantity(function() {
      return 1
    })
  }

  useEffect(function() {
    const prom = getProduct(id)
    prom.then(function(product) {
      setProduct(product)
      setLoad(false)
    }).catch(function() {
      setLoad(false)
    })
  }, [id])

  if (load) {
    return (
      <Loading />
    )
  }

  if (!product) {
    return (
      <Error />
    )
  }

  return (
    <div className="mt-10 w-4/5 mx-auto bg-white h-screen">
      <Link to="/" className="flex flex-col max-w-xs mx-auto py-2 items-center gap-10 sm:flex-row sm:justify-between sm:max-w-lg lg:max-w-3xl">
        <FiArrowLeftCircle className="bg-gray-400 text-white rounded-full text-4xl"></FiArrowLeftCircle>
      </Link>
      <div className="border flex flex-col items-center gap-2 pt-10 max-w-xs mx-auto sm:flex-row sm:items-start sm:gap-4 sm:max-w-lg lg:max-w-3xl">
        <div className="sm:w-1/2">
          <img src={product.thumbnail} className="w-80 h-60 object-cover lg:w-96 lg:h-80" />
        </div>
        <div className="border flex flex-col gap-2 sm:w-1/2 sm:gap-1">
          <p className="text-lgxt-xl">{product.category}</p>
          <h1 className="text-2xl tracking-wide font-semibold text-gray-500 lg:text-3xl lg:tracking-wider lg:font-bold">{product.title}</h1>
          <p className="text-lg font-black text-gray-500 lg:text-xl">Rs.{product.price}</p>
          <p className="text-gray-500 lg:text-lg">{product.description}</p>
          <div className="flex border my-2 gap-4 justify-between text-lg font-black text-gray-500 lg:text-xl">
            <input type="number" value={quantity} className="border py-2 w-1/5 text-center" onChange={handleQuantity} />
            <button className="border py-2 w-4/5" onClick={handleCart}>Add to cart</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-xs mt-10 mx-auto py-2 items-center gap-10 sm:flex-row sm:justify-between sm:max-w-lg lg:max-w-3xl">
        {
          id > 1 ? <Link to={'/productdetail/' + (id - 1)}>
            <FiArrowLeftCircle className="text-gray-400 text-4xl" onClick={handlePrev}></FiArrowLeftCircle>
          </Link> : <div></div>
        }
        <Link to={'/productdetail/' + (id + 1)}>
          <FiArrowRightCircle className="text-gray-400 text-4xl" onClick={handleNext}></FiArrowRightCircle>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetail;