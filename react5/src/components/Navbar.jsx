import React, { useContext } from 'react'
import {MyShop} from "../context/MyWebsite"

const Navbar = () => {

   let {setIsCartOpen} = useContext(MyShop)
    return (
        <div className='flex justify-between items-center bg-black text-white rounded p-4 h-12'>
            <div className=''>
                logo
            </div>
            <div className='flex gap-10 text-xl '>
                <p className='cursor-pointer' onClick={() => setIsCartOpen(false)}>Home</p>
                <p className='cursor-pointer'
                    onClick={() => setIsCartOpen(true)}
                >Cart</p>
            </div>
            <div>
                <button>Login</button>
            </div>
        </div>
    )
}

export default Navbar