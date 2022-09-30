import React, { useState, useEffect, useMemo } from 'react';
import NoMatch from './NoMatch'
import Loading from './Loading'
import Input from './Input';


// import React from 'react'
import { getProductList } from './api'
import Product from './Product';
// import data from '../data';

function ProductList() {
  console.log('ProductList running...')

  const [load, setLoad] = useState(true)

  // console.log(getProductList())

  const [productList, setProductList] = useState([])


  useEffect(function() {
    // console.log('use effect wala code')
    const prom = getProductList()
    prom.then(function(products) {
      setProductList(products)
      // console.log(response.data.products)
      setLoad(false)
    })
  }, [])

  // console.log('bahar wala code')

  const [search, setSearch] = useState('')
  // console.log('data before ', getProductList())
  const [select, setSelect] = useState('default')
  // console.log('value of select at first ', select)

  const filtData = productList.filter(function(item) {
        return item.title.toLowerCase().indexOf(search.toLowerCase()) != -1
      })


  function handleSearch(event) {
    setSearch(event.target.value)
  }
  // console.log('data after ', filtData)


  /*const [search, setSearch] = useState('')
  console.log('search before ', search)
  const [filtData, setFiltData] = useState(data)
  console.log('data before ', filtData)
  const [select, setSelect] = useState('default')
  console.log('value of select ', select)

  function handleSearch(event) {
    const newData = data.filter(function(item) {
      const newSearch = event.target.value.toLowerCase()
      return item.title.toLowerCase().indexOf(newSearch) != -1
    })
    setSearch(event.target.value)
    console.log('search after ', search)
    setFiltData(newData)
    console.log('data after ', filtData)
  }*/

  function handleChange(event) {
    setSelect(event.target.value)
  }
  // console.log('value of select at last ', select)

  if (load) {
    return (
      <Loading />
    )
  }

 if (select == 'name') {
    filtData.sort(function(x, y) {
      // console.log(`enetered: select:${select}, title of x:${x.title} and title of y:${y.title}`)
      return x.title < y.title ? -1 : 1;
    })
  } else if (select == 'L2H') {
    filtData.sort(function(x, y) {
      // console.log(`enetered: select:${select}, price of x:${x.price} and price of y:${y.price}`)
      return x.price - y.price;
    })
  } else if (select == 'H2L') {
    filtData.sort(function(x, y) {
      // console.log(`enetered: select:${select}, price of x:${x.price} and price of y:${y.price}`)
      return y.price - x.price;
    })
  }

  const Data = filtData.map(item => {
    return (
      <Product
        key={item.id}
        {...item}
      />
    )
  })

  return (
    // border flex flex-col gap-2 items-center sm:grid sm:grid-cols-2 sm:gap-2.5 lg:grid-cols-3
    <div>
      <div className="grow-1 bg-white w-4/5 mx-auto my-10 py-5">
        <div className="flex flex-col gap-1 items-center max-w-xs mx-auto sm:max-w-lg lg:max-w-3xl">
          <div className="flex flex-col w-48 items-center gap-1 self-center p-2 sm:w-80 sm:items-end sm:pr-3 sm:self-end">
            <input value={search} onChange={handleSearch} placeholder="Search by Title" className="border-2 rounded border-gray-300 w-44 indent-3 py-2 text-gray-400 text-sm font-semibold sm:w-60 lg:font-base" />
            {/* <Input
            id="search"
            type="text" 
            name="search"
            placeholder="Search"
            value={search}
            onChange={handleSearch}
            /> */}
            <select onChange={handleChange} value={select} className="border-2 rounded border-gray-300 w-44 indent-3 py-2 text-gray-400 text-sm font-semibold sm:w-60 lg:font-base">
              <option value="default">Default sorting</option>
              <option value="name">Sort by name</option>
              <option value="L2H">Price: Low to high</option>
              <option value="H2L">Price: High to low</option>
            </select>
          </div>
          <div className="mt-5 flex flex-col items-center gap-x-2.5 gap-y-10 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {Data.length ? Data : <NoMatch />}
          </div>
        </div>
      </div>

    </div >
  );
}

export default ProductList;