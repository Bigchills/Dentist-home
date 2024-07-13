import React, { useState } from 'react'
import { newscard } from './Data'
import { FaChevronCircleRight } from 'react-icons/fa'

const Newssection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const openModal = (news) => {
    setModalContent(news);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='flex flex-col gap-14 py-20'>
      <div className='text-center space-y-4 max-mobile:px-6'>
        <p className='text-orange-600 max-mobile:text-[12px]'>DENTAL PRACTICE</p>
        <h2 className='text-3xl font-medium max-mobile:text-xl text-blue-900 font-heading'>Read Latest News</h2>
        <p className='text-gray-500'>
          In sea viderer delicatissimi, urbanitas sententiae quo blandit maiorum euripidis.
        </p>
      </div>

      <div className='grid grid-cols-3 gap-8 max-md:grid-cols-2 max-mobile:grid-cols-1 max-md:px-12 py-6 px-28 justify-items-center'>
        {newscard.map((news, index) => (
          <div key={index} className='max-w-[350px] space-y-6'>
            <img className='w-full rounded' src={news.image} alt="" />
            <div>
              <p className='text-orange-600 text-[12px]'>{news.date}</p>
              <h2 className='text-lg text-blue-900 font-medium font-heading'>{news.title}</h2>
              <p className='text-gray-500 text-[12px]'>{news.desc}</p>
            </div>
            <button
              className='flex text-blue-900 gap-1'
              onClick={() => openModal(news)}
            >
              <p className='text-[12px]'>READ MORE</p>
              <FaChevronCircleRight />
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white p-6 rounded-lg max-w-md mx-auto max-mobile:w-5/6'>
            <h2 className='text-2xl max-mobile:text-xl text-blue-900 font-bold mb-4'>{modalContent.title}</h2>
            <p className='text-orange-600 text-[12px]'>{modalContent.date}</p>
            <p className='mb-4'>{modalContent.desc}</p>
            <button
              className='text-red-500 hover:underline'
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Newssection;
