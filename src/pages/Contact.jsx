import React from 'react'

const Contact = () => {
  return (
    <>
    <form className='border w-fit '>
    <h1 className=''>Contact </h1>
      <div>
        <div className='flex flex-col'>
          <label> firstname </label>
          <input type='text' name='firstname' placeholder='firstname' />
        </div>
        <div  className='flex flex-col'>
          <label> Lastname </label>
          <input type='text' name='lastname' placeholder='lastname' />
        </div>
        <div  className='flex flex-col'>
          <label> phone </label>
          <input type='number' name='phone' placeholder='phone' />
        </div>
        <div  className='flex flex-col'>
          <label> address </label>
          <input type='text' name='address' placeholder='address' />
        </div>
        <div  className='flex flex-col'>
          <label> email </label>
          <input  type='text' name='abc@gmail.com' placeholder='abc@gmail.com' />

        </div>
        <div  className='flex flex-col'>
          <label> message </label>
          <textarea name="" id="" cols="30" rows="5"></textarea>

          <button className=' flex justify-center items-center   text-center mt-4'>submit</button>

        </div>
      </div>
    </form>
    </>
  )

}

export default Contact