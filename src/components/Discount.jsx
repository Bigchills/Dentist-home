import React from 'react'

const Discount = () => {
  return (
    <div className='bg-blue-900 py-10 px-28 max-md:px-16 max-mobile:px-8'>
        <div className='flex justify-between items-center max-md:flex-col max-md:gap-6 max-md:text-center'>
            <div className='flex flex-col '>
                <h2 className='text-2xl text-white font-heading  font-medium'>
                    Discount dental plans save <span className='text-orange-600' >you up to 60%</span>
                </h2>
                <p className='text-white'>
                    Sea te illum euismod, ex dicta noluisse qui, sea an hinc pericula imperdiet sum.
                </p>
            </div>
            <div>

                <button className='bg-white hover:bg-gray-100 flex rounded justify-center items-center '>
                    <a  className='tracking-widest text-blue-900  py-3 px-6 text-[12px]' href="">
                        LEARN MORE
                    </a>
                </button>

            </div>
        </div>
      
    </div>
  )
}

export default Discount
