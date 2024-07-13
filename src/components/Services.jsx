import React from 'react';
import { services } from './Data';

const Services = () => {
  return (
    <div className='flex justify-center px-28 py-8 max-lg:px-16 max-md:px-10 max-md:'>
      <div className='grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-[620px]:grid-cols-1'>
        {services.map((service, index) => (
          <div key={index} className='flex space-x-4 p-4  '>
            <div className='flex-shrink-0'>
              <img className='w-12 h-12' src={service.image} alt="" />
            </div>
            <div className='space-y-2'>
              <h3 className='text-lg max-mobile:text-[16px] font-semibold text-blue-900'>
                {service.title}
              </h3>
              <p className='text-[12px] text-gray-500'>
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
