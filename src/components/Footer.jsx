import React from 'react'
import About from '../pages/About'
import Contact from '../pages/Contact'

const Footer = () => {
  return (
    <div className='bg-blue-600 w-full h-[60px] flex justify-center items-center
    font-semibold text-sm  fixed bottom-0  '>
     <h1 className='text-red-700 hover:text-white 
    hover:border-b-2' >
        Designed By | Seema  
    </h1>
    </div>
  )
}

export default Footer