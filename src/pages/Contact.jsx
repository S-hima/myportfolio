import React from 'react'
import Image from '../assets/IMG-20221126-WA0008.jpg'

const Contact = () => {
  return (
    <>
    <div className='flex gap-8 ml-8 mt-8 p-8'>
      <form className='border  p-8  w-[60%]'>
      
        <h1 className='text-center font-bold mb-4 text-[24px] text-blue-600'>Contact </h1>
        <div className='grid grid-cols-2 gap-2'>
          <div className='flex flex-col'>
            <label> firstname </label>
            <input className='px-3 py-2 border w-full focus:outline-none focus:ring focus:ring-blue-500 rounded-md' type='text' name='firstname' placeholder='firstname' />
          </div>
          <div className='flex flex-col'>
            <label> Lastname </label>
            <input className='px-3 py-2 border w-full focus:outline-none focus:ring focus:ring-blue-500 rounded-md' type='text' name='lastname' placeholder='lastname' />
          </div>
          <div className='flex flex-col'>
            <label> phone </label>
            <input className='px-3 py-2 border w-full focus:outline-none focus:ring focus:ring-blue-500 rounded-md' type='number' name='phone' placeholder='phone' />
          </div>
          <div className='flex flex-col'>
            <label> address </label>
            <input className='px-3 py-2 border w-full focus:outline-none focus:ring focus:ring-blue-500 rounded-md' type='text' name='address' placeholder='address' />
          </div>
          </div>
          <div className='flex flex-col'>
            <label> email </label>
            <input className='px-3 py-2 border w-full focus:outline-none focus:ring focus:ring-blue-500 rounded-md' type='text' name='abc@gmail.com' placeholder='abc@gmail.com' />

          </div>
          <div className='flex flex-col'>
            <label> message </label>
            <textarea className='px-3 py-2 border w-full focus:outline-none focus:ring focus:ring-blue-500 rounded-md'  name="" id="" cols="30" rows="5"></textarea>
            </div>
             <div className='flex  justify-center '>
            <button className=' flex justify-center items-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-white hover:text-black text-center mt-4 w-fit'>Submit</button>
             </div>

          
      </form>

      <img className="h-fit w-[40%] object-cover rounded-2xl"  src={Image} alt=""/>
      </div>
    </>
  )

}

export default Contact