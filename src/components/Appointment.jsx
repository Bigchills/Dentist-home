import React from 'react'

const Appointment = () => {
  return (
    <div className='flex  mt-14 bg-blue-50 max-md:flex-col-reverse'>
        <div className='flex-1 max-mobile:p-4'>
            <img className='max-mobile:rounded'  src="/images/appointpic.png" alt="" />
        </div>
        <div className='flex-1 p-14 max-mobile:p-7'>
            <form action="" className='space-y-3'>
                <div className=' space-y-4'>
                    <h2 className='font-heading text-blue-900 text-3xl max-mobile:text-xl font-medium'>
                        Request an Appointment
                    </h2>
                    <p className='text-gray-500'>Proin gravida nibh vel velit auctor aliquet justo.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-[12px]">
                    <input className="border border-gray-300 h-10 pl-3 rounded bg-blue-50" placeholder="First Name" type="text" />
                    <input className="border border-gray-300 h-10 pl-3 rounded bg-blue-50" placeholder="Last Name" type="text" />
                    <input className="border border-gray-300 h-10 pl-3 rounded bg-blue-50" placeholder="E-mail Address" type="email" />
                    <input className="border border-gray-300 h-10 pl-3 rounded bg-blue-50" placeholder="Phone Number" type="text" />
                    <textarea className="col-span-2 border border-gray-300 rounded h-20
                                     bg-blue-50 resize-none" placeholder="" />
                </div>
                <button type="submit" className='bg-blue-900 text-white flex justify-center
                                            items-center tracking-wider text-[12px]
                                            p-3 rounded hover:bg-blue-950'>
                    SEND REQUEST
                </button>
            </form>
        </div>
      
    </div>
  )
}

export default Appointment
