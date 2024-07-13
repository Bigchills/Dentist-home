import React from 'react'
import Testimonial from './Testimonial'
import { clientData } from './Data'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
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
    };  return (
    <div className='space-y-10'>
        <div className='flex flex-col justify-center items-center gap-3 '>
            <h3 className='text-orange-600 text-sm max-mobile:text-[12px] font-semibold tracking-wider'>
                OUR DEAR CLIENTS
            </h3>
            <h2 className='font-semibold text-blue-900 text-3xl max-mobile:text-xl'>
                What People Say
            </h2>
            <p className='text-gray-500 text-sm max-mobile:text-center'>
                In sea viderer delicatissimi, urbanitas
                sententiae
                quo blandit maiorum euripidis.
            </p>
        </div>

        <div>
            
        </div>

        <Slider {...settings} className=' overflow-hidden gap-2'>

            {
                clientData.map((client, index)=>(
                    <div className='' key={index}>
                        <Testimonial>
                            <div className='relative'>
                                <div className='w-32'>
                                    <img className='w-full h-full' src={client.image} alt="" />
                                </div>
                                <div className='bg-blue-900 flex justify-center items-center text-[12px]
                                             absolute right-0 top-0 rounded text-white min-h-7 min-w-7'>
                                    99
                                </div>
                            </div>
                            <div className='text-blue-900 text-2xl font-heading font-medium'>
                                <h2>{client.title}</h2>
                            </div>
                            <div className='text-[12px] text-gray-500 text-center max-md:px-8'>
                                <p>{client.desc}</p>
                            </div>
                            <div >
                                <h3 className='text-sm text-orange-600'>{client.name}</h3>
                            </div>
                        </Testimonial>
                    </div>
                ))
            }
        </Slider>



    </div>
  )
}

export default Testimonials
