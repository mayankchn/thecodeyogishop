import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProduct } from './api'
import CartRow from './CartRow'
import Loading from './Loading'

export default function CartList({cartItems}) {

    const [productList, setProductList] = useState([])
    console.log('productList is ',productList)

    const [load, setLoad] = useState(true)


    useEffect(function(){
        const promises = Object.keys(cartItems).map(function(productId){
            return getProduct(productId)
        })        
        Promise.all(promises).then(function(response){
            setProductList(response)
            setLoad(false)
        })
    },[])

    const cartList= productList.map(function(product){
        return (
            <CartRow
                key={product.id}
                quantity={cartItems[product.id]}
                product={product}
            />
        )
    })

    if(load){
        return <Loading />
    }

    if(productList.length<1){
            return (
                <div className="mt-10 w-4/5 mx-auto bg-white h-screen">
                    <div className="mx-auto flex flex-col justify-center items-center px-2 py-10 gap-5 sm:max-w-lg lg:max-w-xl">
                    <h1 className="font-semibold text-center text-lg text-gray-500 sm:text-xl lg:font-bold  lg:text-2xl">You haven't added any item to the cart. Have you?</h1>
                        <Link to='/' className='w-full uppercase text-center bg-gray-400 text-white px-3 py-2 font-semibold sm:w-56 lg:font-bold'>Reutrn to shopping</Link>
                    </div>
                </div>
            )
    }

    return (
        <div className='mt-10 mx-2 bg-white sm:w-4/5 sm:mx-auto'>
            <div className='py-10 border flex flex-col gap-1'>
                <div className="hidden bg-gray-100 lg:block lg:border lg:flex lg:justify-between lg:px-2 lg:py-3 lg:font-bold lg:text-gray-500">
                    <span className='w-20'></span>
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                </div>
                {cartList}
                <div className='border flex flex-col mx-2 py-2 gap-1 sm:flex-row sm:justify-between'>
                    <div className='flex px-2 justify-between gap-1'>
                        <input type="text" placeholder='Coupon Code' className='border p-1 w-1/2 sm:px-3 sm:py-2 sm:font-semibold' />
                        <button className='px-2 py-1 text-gray-100 bg-gray-400 font-semibold sm:w-40 sm:px-3 sm:py-2 sm:font-bold'>Apply Coupon</button>
                    </div>
                    <button className='p-2 mx-2 text-gray-100 bg-gray-400 font-semibold sm:w-40 sm:px-3 sm:py-2 sm:font-bold'>Update Cart</button>
                </div>
            </div>
        </div>
    )
}