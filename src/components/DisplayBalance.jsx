import React from 'react'

const DisplayBalance = ({balance}) => {
  return (
        <div className='text-center'>
            <p className='text-xs text-white'>Account Balance</p>
            <p className='text-2xl font-bold text-white'>{(balance?.AccountBalance)?.toLocaleString('en-PH', { style :'currency', currency: "PHP"})}</p>
        </div>
  )
}

export default DisplayBalance