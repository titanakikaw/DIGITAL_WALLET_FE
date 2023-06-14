import React from 'react'
import Dropdown from './Dropdown'

const Navbar = () => {
  return (
    <div className='flex justify-between py-2 px-3 items-center'>
        <div>
            <p className='text-xs font-bold'>DIGITAL WALLLET</p>
        </div>
        <div>
            <Dropdown/>
        </div>
    </div>
  )
}

export default Navbar