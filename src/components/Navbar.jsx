import React from 'react'
import { FaPhone, FaEnvelope, FaLocationArrow } from 'react-icons/fa'
import Sidemenu from './Sidemenu';
import { useState } from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Navbar = () => {

    const  [menuOpen, setMenuOpen]=useState(false)
    const toggleMenu=()=>{
        setMenuOpen(!menuOpen)
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 10000, // Adjust this for a smooth, continuous motion
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear', // Ensures continuous motion
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    

  return (
    <div className='sticky top-0 z-10'>
        <nav className='
        '>

            <div id='top-nav' className="
                     font-sans bg-blue-900 text-[12px]
                     text-white items-center flex justify-between
                        px-5 py-2 ">

                    <div>
                        <p>Mon-Sat 8:00 - 17:30, Sunday - CLOSED</p> 
                    </div>
                    <div className="
                                    flex space-x-10
                                ">
                        <div className="flex items-center justify-center space-x-3">
                            <FaPhone/>
                            <p>+657849301</p>
                        </div>
                        <div className="flex items-center justify-center max-lg:hidden space-x-3">
                            <FaEnvelope/>
                            <p>allsmiles@smiles.com</p>
                        </div>
                        <div className="flex items-center justify-center space-x-3 max-[620px]:hidden">
                            <FaLocationArrow/>
                            <p>63 Wall St, New York, NY 10005</p>
                        </div>                            
                    </div>

            </div>


            <div className='bg-white flex justify-between items-center px-5 max-lg:px-10 py-4'>
                <div>
                    <img className='w-24' src="/images/logo-allsmiles.svg" alt="" srcset="" />
                </div>
                <div className='flex text-blue-900 text-sm max-lg:hidden space-x-8'>
                    <a href="" className='hover:font-bold'>Home</a>
                    <a href="" className='hover:font-bold' >Staff</a>
                    <a href="" className='hover:font-bold' >Blog</a>
                    <a href="" className='hover:font-bold' >Landing</a>
                    <a href=""className='hover:font-bold' >Shop</a>
                </div>
                <div className='flex space-x-5 justify-center
                                items-center text-sm text-blue-900'>

                    <a href="">Search</a>
                    <div  onClick={toggleMenu} className='space-y-1 cursor-pointer'>
                       <span className='w-4 h-[2px]  rounded-md block mx-auto  bg-blue-900'></span>
                       <span className='w-4 h-[2px] rounded-md block mx-auto  bg-blue-900'></span>
                       <span className='w-4 h-[2px]  rounded-md block mx-auto  bg-blue-900'></span>
                    </div>
                </div>
                
            </div>
        </nav>
        <Sidemenu toggleMenu={toggleMenu} menuOpen={menuOpen}/>
    </div>
  )
}

export default Navbar
