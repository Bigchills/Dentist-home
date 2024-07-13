import React from 'react'
import { FaX } from 'react-icons/fa6'

const Aboutmodal = ({closeModal}) => {
  return (
    <div className=' flex justify-center items-center w-full z-20 backdrop-blur-sm inset-0 bg-gray-800 bg-opacity-50 fixed top-0 h-full'>
        <div className='bg-white max-w-[800px] max-lg:max-w-[600px] max-mobile:w-[400px] overflow-y-scroll rounded p-5 space-y-10'>
            <div className='flex justify-between items-center'>
                <span></span>
                <img src="/images/logo-allsmiles.svg" alt=""/>
                <FaX onClick={closeModal}  className='text-blue-900 cursor-pointer hover:bg-slate-500'/>
            </div>
            <div>
                <h2 className='text-sm leading-4 tracking-widest'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quibusdam, tempora, 
                    provident officiis perspiciatis sed quo doloremque distinctio rem quidem facilis ex. 
                    Repellat perspiciatis aspernatur itaque laborum perferendis! Esse aspernatur sunt iusto debitis
                    quam obcaecati distinctio quibusdam 
                    amet earum veniam facere assumenda adipisci voluptas, iste eveniet, ab ratione repellendus ut.
                    Repellat perspiciatis aspernatur itaque laborum perferendis! Esse aspernatur sunt iusto debitis
                    quam obcaecati distinctio quibusdam 
                    amet earum veniam facere assumenda adipisci voluptas, iste eveniet, ab ratione repellendus ut.
                </h2>
            </div>
        </div>
    </div>
  )
}

export default Aboutmodal
