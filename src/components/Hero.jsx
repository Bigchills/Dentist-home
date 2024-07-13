import React from 'react'
import Heroslider from './Heroslider'
import { sliderData } from './Data'
const Hero = () => {
  return (
    <div className=''>
            <div className=" relative ">
                <Heroslider images={sliderData}/>
                <div className='w-2/6 max-lg:w-1/2 absolute top-28 left-56 max-md:left-40 flex flex-col max-mobile:w-5/6 max-mobile:left-10 
                                '>
                    <div className="bg-orange-600 text-white text-[10px] w-fit
                                        flex justify-center items-center rounded-sm p-[2px]
                                        mb-2 tracking-widest px-1 leading-[10px]">
                        <p>DENTAL PRACTICE</p>
                    </div>
                    <div className='bg-sky-50 text-3xl font-semibold text-blue-900 mb-1 max-w-[400px]
                                     rounded flex justify-start items-center p-1 tracking-wide  '>
                        <p className='font-heading'>
                            We provide the best
                        </p>
                    </div>
                    <div className='bg-sky-50 text-3xl font-semibold text-blue-900 max-w-[350px]  mb-5
                                    rounded flex justify-start items-center p-1 tracking-wide px-2'>
                        <p className='font-heading' >
                            services out there                            
                        </p>
                    </div>
                    <div className='flex gap-4 max-mobile:mx-auto'>
                        <button className='bg-blue-900 text-[10px] text-white
                                            rounded py-3 px-6 tracking-widest hover:bg-blue-950'>
                            <a href="">VIEW MORE</a>
                        </button>

                        <button className='bg-white text-[10px] text-blue-900
                                            py-3 px-6 rounded tracking-widest hover:bg-slate-200'>
                            <a href="">PURCHASE</a>
                        </button>

                    </div>
                </div>
                 
            </div>
         
    </div>

    
  )
}
export default Hero
