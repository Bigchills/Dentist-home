import React from 'react'

const Card = ({children}) => {
  return (
    <div className=' rounded w-80 min-h-[400px] flex flex-col
                    justify-start space-y-4 max-md:w-72 max-[620px]:w-5/6 max-[620px]:mx-auto '>
        {children}
    </div>
  )
}
export default Card
