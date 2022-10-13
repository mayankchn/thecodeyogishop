import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProduct } from './api'
import CartRow from './CartRow'
import Checkout from './Checkout'
import Loading from './Loading'

export default function CartList({cartItems, setCart}) {

    const [localCartItems, setLocalCartItems] = useState(cartItems)
    // console.log('local cart ',localCartItems)

    
    const [productList, setProductList] = useState([])
    // console.log('productList is ',productList)

    const [load, setLoad] = useState(true)

    useEffect(function(){
        setLocalCartItems(cartItems)
    },[cartItems])

    useEffect(function(){
        const promises = Object.keys(cartItems).map(function(productId){
            return getProduct(productId)
        })        
        Promise.all(promises).then(function(response){
            setProductList(response)
            setLoad(false)
        })
    },[cartItems])

    function handleDelete(id){
        setLoad(true)
        // console.log('delete handle clicked having id ',id, typeof(id))
        if(localCartItems[id]===0){
            const newLocalCartItems = {...localCartItems}
            delete newLocalCartItems[id]
            setLocalCartItems(newLocalCartItems)
        }
        const newCartItems = {...cartItems}
        // console.log('before : ',newCartItems)
        delete newCartItems[id] 
        // console.log('after : ',newCartItems)
        setCart(newCartItems)
    }

    function handleChange(event,id){
        // console.log('values recieved on handle change ',event.target.value, event.target.getAttribute('id'))
        let newQuantity = +event.target.value
        if(newQuantity>0){
            newQuantity = +event.target.value
        }else{
            newQuantity = 0
        }
        const newLocalCartItems = {...localCartItems, [id]:newQuantity}
        setLocalCartItems(newLocalCartItems)
    }

    function updateCart(){
        setLoad(true)
        // console.log('update cart handle clicked')
        const idArray = Object.keys(localCartItems)
        // console.log(idArray)
        
        for (let i = 0; i < idArray.length; i++) {
            // console.log('inside loop')
            let id = idArray[i];
            // console.log('id ',id)
            if(localCartItems[id]=== 0){
                handleDelete(+id)
                return
            }
        }
        setCart(localCartItems)
    }

    const cartList= productList.map(function(product){
        return (
            <CartRow
                key={product.id}
                quantity={localCartItems[product.id]}
                product={product}
                handleDelete={handleDelete}
                handleChange={handleChange}
            />
        )
    })

    if(load){
        return <Loading />
    }

    if(productList.length<1){
            return (
                <div className="mt-10 w-4/5 mx-auto bg-white">
                    <div className="mx-auto h-screen flex flex-col justify-center items-center px-2 py-10 gap-5 sm:max-w-lg lg:max-w-xl">
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
                    <span className='w-1/2'></span>
                    <p className='lg:w-1/4'>Product</p>
                    <p className='lg:w-1/4'>Price</p>
                    <p className='lg:w-1/4'>Quantity</p>
                    <p className='lg:w-1/4'>Subtotal</p>
                </div>
                {cartList}
                <div className='border flex flex-col mx-2 py-2 gap-1 sm:flex-row sm:justify-between'>
                    <div className='flex px-2 justify-between gap-1'>
                        <input type="text" placeholder='Coupon Code' className='border p-1 w-1/2 sm:px-3 sm:py-2 sm:font-semibold' />
                        <button className='rounded px-2 py-1 text-white bg-gray-500 font-semibold sm:w-40 sm:px-3 sm:py-2 lg:font-bold'>Apply Coupon</button>
                    </div>
                    <button 
                    className='rounded p-2 mx-2 text-white bg-gray-500 font-semibold sm:w-40 sm:px-3 sm:py-2 lg:font-bold'
                    onClick={updateCart}
                    >
                        Update Cart
                    </button>
                </div>
            </div>
            <div className='py-10 flex flex-col lg:items-end'>
                <div className='border-2 mx-2 flex flex-col text-gray-500 lg:w-1/2'>
                    <h1 className='border-b font-bold text-xl px-2 bg-gray-100 py-3'>Cart totals</h1>
                    <Checkout 
                    productList={productList} 
                    cartItems={cartItems}
                    />
                    <button className='rounded text-white font-semibold px-2 uppercase bg-gray-500 py-3 mx-7 mb-5 lg:font-bold'>Proceed to checkout</button>
                </div>
            </div>
        </div>
    )
    }