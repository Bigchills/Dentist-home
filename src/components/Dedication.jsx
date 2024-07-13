import React from 'react';

const Dedication = () => {


  return (
    <div className='flex  max-md:flex-col py-28 h-[650px] max-md:h-fit'>
      <div className='flex-1 flex flex-col justify-center gap-5 bg-blue-50 p-28 max-mobile:p-7'>
        <h4 className='text-red-500 text-[12px] tracking-wider '>
          DENTAL PRACTICE
        </h4>
        <h2 className='text-4xl max-mobile:text-xl font-semibold text-blue-900'>
          Fully dedicated to your dental health
        </h2>
        <p className='text-[12px] text-gray-500'>
          Te veritus tractatos delicatissimi qui, justo diceret mentitum ut sit.
          Qui sed reque dicam, qui veri nullam vituperatoribus in. Tibique maiestatis
          sum quod sum ut alienum nec et, summo possim persequeris vix mea. Adhuc quodsi qui, sit no tale
          essent electram. Mei sum prodesset in pro, quo scripta feugait vidisse.
        </p>
        <div className='flex items-center gap-2'>
          <img src="/images/signature.svg" alt="Signature" className='h-16' />
        </div>
      </div>

      <div className='flex-1 max-md:px-20 max-md:max-h-[450px]'>
        <video controls  autoPlay muted loop className='w-full h-full max-md:h-[450px] max-mobile:h-80 object-cover '>
          <source src="/images/Video1.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Dedication;
