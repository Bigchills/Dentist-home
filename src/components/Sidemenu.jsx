// Sidemenu.js
import React from 'react';
import { FaX } from 'react-icons/fa6';

const Sidemenu = ({ toggleMenu, menuOpen }) => {
  return (
    <div className={`fixed w-full h-full top-0 z-20 transition-all duration-1000 ease-in-out 
                    ${menuOpen ? 'backdrop-blur-sm bg-gray-800 bg-opacity-50 right-0' : 'right-[-100%]'}`}>
      <div className={`w-2/5 max-lg:w-1/2 max-mobile:w-2/3 max-mobile:h-full space-y-4 bg-white fixed p-8 h-screen top-0 right-0 overflow-y-scroll 
                      transition-transform duration-500 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex justify-between'>
          <span></span>
          <button onClick={toggleMenu}>
            <FaX className='text-2xl text-blue-900' />
          </button>
        </div>
        <div className='flex flex-col gap-8 justify-start text-blue-900'>
            <div className='hidden max-md:flex max-lg:flex-col gap-8 '>
                <a href="" className='border-b border-gray-300 hover:font-semibold hover:border-gray-500 hover:border-b-2'>Home</a>
                <a href="" className='border-b border-gray-300 hover:font-semibold hover:border-gray-500 hover:border-b-2' >Staff</a>
                <a href="" className='border-b border-gray-300 hover:font-semibold hover:border-gray-500 hover:border-b-2' >Blog</a>
                <a href="" className='border-b border-gray-300 hover:font-semibold hover:border-gray-500 hover:border-b-2' >Landing</a>
                <a href=""className='border-b border-gray-300 hover:font-semibold hover:border-gray-500 hover:border-b-2' >Shop</a>   
            </div>
            <a className='border-b border-gray-300 hover:font-semibold hover:border-gray-500 hover:border-b-2' href="">About Us</a>
            <a className='border-b border-gray-300 hover:font-semibold hover:border-gray-500 hover:border-b-2' href="">Contact Us</a>
            <a className='border-b border-gray-300 hover:font-semibold hover:border-gray-500 hover:border-b-2' href="">Specials</a>
            <a className='border-b border-gray-300 hover:font-semibold hover:border-gray-500 hover:border-b-2' href="">Our Values</a>
            <a className='border-b border-gray-300 hover:font-semibold hover:border-gray-500 hover:border-b-2' href="">Our Wards</a>
            <a className='border-b border-gray-300 hover:font-semibold hover:border-gray-500 hover:border-b-2' href="">Courses</a>
            <a className='border-b border-gray-300 hover:font-semibold hover:border-gray-500 hover:border-b-2' href="">Recent Development</a>
            <a className='border-b border-gray-300 hover:font-semibold hover:border-gray-500 hover:border-b-2' href="">Lifestyle</a>
        </div>
      </div>
    </div>
  );
};

export default Sidemenu;
