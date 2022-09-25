import React from 'react'
import { memo } from 'react'

function NoMatch() {
  console.log('NoMathc running...')
  return (
    <div className="h-screen">
        <p className="font-black text-gray-400 px-2 sm:text-xl lg:text-2xl">Sorry! No such product found:(</p>
    </div>
  )
}

export default memo(NoMatch)