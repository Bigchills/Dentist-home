import React from 'react'
import { experts } from './Data'

const Team = () => {
  return (
    <div className=' py-16'>
        <div className=' flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center text-center space-y-3 items-center max-w-[700px]'>
                <p className='text-orange-600 text-[12px]'>
                    THE ALLSMILES TEAM
                </p>
                <h2 className=' font-heading text-3xl max-mobile:text-xl font-medium text-blue-900 '>
                    Meet Our Experts
                </h2>
                <p className=' text-gray-500 max-lg:px-10 max-mobile:text-[12px]'>
                    An delicata inimicus sea, vis equidem oporteat conclusion mundi et.
                    Nec malis dolor fabellas ex, eu nec falli iuvaret. Per elitr eloquentiam an esse.
                </p>
            </div>

            <div className='grid grid-cols-4 gap-6 px-28 max-md:px-16 py-10 max-[650px]:px-8 max-[620px]:grid-cols-2 '>
                {
                    experts.map((expert,index)=>(
                        <div key={index} className='max-w-fit  text-center space-y-4'>
                            <img src={expert.image} alt="" />
                            <div className='space-y-2'>
                                <p className='text-blue-900 font-medium text-sm'>{expert.name}</p>
                                <p className='text-orange-600 font-medium trackin text-[12px]'>{expert.title}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
      
    </div>
  )
}

export default Team
