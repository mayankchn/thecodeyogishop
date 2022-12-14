import React, { useState, useEffect } from 'react';
import NoMatch from './NoMatch'
import Loading from './Loading'
import { getProductList } from './api'
import Product from './Product';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi'
import { Link, useSearchParams } from 'react-router-dom';
import { range, replace } from 'lodash';

function ProductList() {
  console.log('ProductList running...')

  const [load, setLoad] = useState(true)
  const [productsData, setProductsData] = useState()
  const [searchParams, setSearchParam] = useSearchParams()

  // console.log([...searchParams])
  const params = Object.fromEntries([...searchParams])
  let { query, sort, page } = params

  query = query || ""
  sort = sort || "default"
  page = +page || 1

  useEffect(function () {
    let sortBy;
    let sortType;

    if (sort == "title") {
      sortBy = "title"
    } else if (sort == "lowToHigh") {
      sortBy = "price"
    } else if (sort == "highToLow") {
      sortBy = "price"
      sortType = "desc"
    }

    getProductList(sortBy, query, page, sortType).then(function (body) {
      // console.log(body)
      setProductsData(body)
      setLoad(false)
    })
  }, [query, sort, page])

  function handleSearch(event) {
    // console.log(event.target.value)
    setSearchParam({ ...params, query: event.target.value, page:1 },
      { replace: false })
  }

  function handleSort(event) {
    setSearchParam({ ...params, sort: event.target.value },
      { replace: false })
  }

  if (load) {
    return (
      <Loading />
    )
  }

  const Data = productsData.data.map(item => {
    return (
      <Product
        key={item.id}
        {...item}
      />
    )
  })


  return (
    <div>
      <div className="grow-1 bg-white w-4/5 mx-auto my-10 py-5">
        <div className="flex flex-col gap-1 items-center max-w-xs mx-auto sm:max-w-lg lg:max-w-3xl">
          <div className="flex flex-col w-48 items-center gap-1 self-center p-2 sm:w-80 sm:items-end sm:pr-3 sm:self-end">
            <input value={query} onChange={handleSearch} placeholder="Search by Title" className="border-2 rounded border-gray-300 w-44 indent-3 py-2 text-gray-400 text-sm font-semibold sm:w-60 lg:font-base" />
            <select onChange={handleSort} value={sort} className="border-2 rounded border-gray-300 w-44 indent-3 py-2 text-gray-400 text-sm font-semibold sm:w-60 lg:font-base">
              <option value="default">Default sorting</option>
              <option value="title">Sort by Title</option>
              <option value="lowToHigh">Low to high</option>
              <option value="highToLow">High to low</option>
            </select>
          </div>
          <div className="mt-5 flex flex-col items-center gap-x-2.5 gap-y-10 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {Data.length ? Data : <NoMatch />}
          </div>
          <div className='flex gap-3 justify-self-start self-star border w-full px-3 flex-wrap my-5'>
            {productsData.meta.current_page > 1 && <Link
              to={"?" + new URLSearchParams({...params,page:page-1})}
              className='border px-3 py-2 text-white bg-gray-500'
            >
              <HiOutlineArrowLeft />
            </Link>}
            {range(1, productsData.meta.last_page + 1).map((pageNum) => {
              return <Link key={pageNum}
                to={"?" + new URLSearchParams({...params,page:pageNum})}
                className={"border px-4 py-1 text-white " + (pageNum === page ? "bg-gray-400" : "bg-gray-500")}>
                {pageNum}
              </Link>
            })}
            {productsData.meta.current_page < productsData.meta.last_page && <Link
              to={"?" + new URLSearchParams({...params,page:page+1})}
              className='border px-3 py-2 text-white bg-gray-500'
            >
              <HiOutlineArrowRight />
            </Link>}
          </div>
        </div>
      </div>
    </div >
  );
}

export default ProductList;