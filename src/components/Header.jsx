import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  return (
    <header className='flex justify-between items-center py-2 '>
        <h1 className='text-3xl font-bold'>Estore</h1>

        {/* search bar */}
        <div className='hidden relative  w-[60%] md:flex'>
            <input 
             className='px-10 py-2 outline-none w-full rounded-xl border border-gray-300 '
             type="text" 
             placeholder='search products...' />
            <IoIosSearch className='absolute text-[20px] top-3 left-3' />
        </div>
        
        {/* right side of the header */}
        <div className='hidden lg:flex items-center gap-2'>
            <div className='flex gap-2 items-center px-2 py-1 cursor-pointer'>
                <IoMdHeartEmpty />
                <span>Favourite</span>
            </div>
            <div className='flex gap-2 items-center px-2 py-1 cursor-pointer'>
                <LuShoppingCart />
                <span>Cart</span>
            </div>
            <button className='flex gap-2 items-center px-2 py-1 cursor-pointer'>
                <FaRegUser />
                <span>Sign in</span>
            </button>
        </div>

        <button className='flex lg:hidden bg-gray-300 p-3 rounded-xl hover:bg-gray-200 cursor-pointer'>
            <RxHamburgerMenu />
        </button>
    </header>
  )
}

export default Header