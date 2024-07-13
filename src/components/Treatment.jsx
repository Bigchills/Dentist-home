import React from 'react'
import { useState } from 'react'
import sections from './Data'

const Treatment = () => {
    const [currentSection, setCurrentSection] = useState('Root Canal Specialist');
  return (
        <div className=" py-10 px-28 max-md:px-16 max-mobile:px-8 bg-pink-50  items-center">
            <nav className="flex justify-between max-md:grid max-md:grid-cols-2 max-md:gap-4 max-md:justify-items-center
            max-md:items-center">
                {Object.keys(sections).map(section => (
                <div className='border-b border-orange-200'>

                <button
                    key={section}
                    className={`text-blue-900  ${currentSection === section && 'border-b-2 border-red-500'}`}
                    onClick={() => setCurrentSection(section)}
                >
                    {section}
                </button>
                </div>

                ))}
            </nav>
            <div className="max-w-7xl mx-auto  flex space-x-20 max-md:flex-col max-md:justify-center   py-12">
                <div className="flex-1">
                    <h1 className="text-3xl max-mobile:text-2xl font-bold text-blue-900 mb-4">{sections[currentSection].title}</h1>
                    <p className="text-gray-500 mb-2 text-[12px]">{sections[currentSection].description}</p>
                </div>
                <div className="w-[500px] max-md:w-[400px] max-mobile:w-64  ">
                    <img src={sections[currentSection].image} alt={currentSection} className="rounded-lg max-lg:max-w-[400px] max-md:w-full max-mobile:w-64"/>
                </div>
            </div>
        </div>
            
  )
}

export default Treatment
