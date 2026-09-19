 import React from 'react'
 
 const Navbar = ({setToggle}) => {
   return (
     <div className='bg-black w-full flex justify-between items-center p-4 rounded text-white'>
      <div>
          <img
          className="rounded-full"
          width={35}
          src="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg"
          alt=""
        />
      </div>
      <div className='flex gap-6 font-semibold'>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button 
      onClick={() => setToggle((prev) => !prev)}
       className='bg-blue-600 p-2 rounded font-semibold cursor-pointer'>Create User</button>
     </div>
   )
 }
 
 export default Navbar