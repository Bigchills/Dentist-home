// src/components/Cards.js
import React from 'react';
import Card from './Card';
import Aboutmodal from './Aboutmodal';
import { cardData, workingHours } from './Data';
import { FaPlus, FaChevronCircleRight, FaMinus } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Cards = ({handleOpenModal}) => {

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=' grid grid-cols-3 max-lg:grid-cols-2 gap-4 max-[620px]:grid-cols-1 max-[620px]:'>
      <Card>
        <div className='space-y-4'>
          <img src="/images/secimage.svg" alt="" className="" />
          <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-blue-900'>
                Pick the dentist that fits all your needs the best</h2>
            <p className='text-gray-500 font-normal text-[12px]
                            '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, sint nesciunt commodi
              distinctio iste et ipsa totam ipsam beatae voluptas consectetur porro voluptates atque
              neque nemo archite...
            </p>
          </div>
        </div>
        <div className='flex gap-2 '>
                <p className='text-[12px] text-blue-900 tracking-widest'>
                    READ MORE
                </p>
                <FaChevronCircleRight onClick={handleOpenModal} className='text-blue-900 text-xl cursor-pointer'/>
        </div>

      </Card>

      <Card>
      <div className="h-full space-y-4">
        <img src="/images/thirimage.png" alt="Card" />
        {cardData.map((data, index) => (
          <div key={index} className="">
            <div
              onClick={() => handleToggle(index)}
              className="flex justify-start items-center h-fit space-x-3  cursor-pointer"
            >
              <div className={`transition-transform duration-1000 ${openIndex === index ? 'rotate-[0]' : ''}`}>
                {openIndex === index ? (
                  <FaMinus className="text-orange-600 text-[12px]  font-normal" />
                ) : (
                  <FaPlus className="text-orange-600 text-[12px]  font-normal" />
                )}
              </div>
              <p className="text-gray-500 font-normal text-[12px]">{data.desc}</p>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out text-gray-400 text-[12px] ${
                openIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="overflow-hidden text-[11px] mt-2 px-3 ml-4">{data.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>

    <div className=' max-lg:col-span-2 max-lg:flex  justify-center max-[620px]:col-span-1
                     max-[620px]:justify-center max-[620px]:mx-auto max-[620px]:hidden'>

      <Card className=''>
          <div className="bg-pink-50 rounded  p-4">
              <h2 className="text-center text-xl font-semibold text-indigo-900 mb-4">Working Hours</h2>
              <div className="space-y-4 text-gray-500 text-[12px]">
              {workingHours.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                      <span>{item.day}</span>
                      <span className="dotted-line flex justify-center items-start
                                    text-orange-600 font-normal ">--------------------</span>
                      <span className={`text-right ${item.hours === 'CLOSED' ? 'text-red-500' : ''}`}>{item.hours}</span>
                  </div>
              ))}
              </div>
              <div className="bg-indigo-800 text-white text-center
                                py-4 rounded-lg hover:bg-blue-950 mt-24">
                  <a href="">Call Us: +354/759-1675</a>
              </div>
          </div>
      </Card>
    </div>
  
  </div>
  );
};

export default Cards;
