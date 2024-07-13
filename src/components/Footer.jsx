import React from 'react'
import { icons } from './Data'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Footer = () => {
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


        <div className='mb-20'>

            <div className='bg-pink-50 flex mt-24  justify-between
                            p-8 items-center'>  
                    
                        {
                            icons.map((icon,index)=>(
                                <div className=''>
                                    <img src={icon.icons} alt="" />
                                </div>
                            ))
                        }
        
            </div>
        </div>


  )
}

export default Footer
