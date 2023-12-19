import React from 'react'
import image from "../assets/IMG-20221126-WA0008.jpg"

const About = () => {
  return (
    <div className= "flex justify-center mx-10 items-center gap-20 mt-10">
      <div className='flex flex-col gap-4 justify-center items-center w-[70%]'>
        <h1 className='text-2xl font-bold text-black-600'>Hi, <span className='text-black'>It's Me Seema Bhattarai</span>  </h1>

        <p>Prepare for a career in tech by joining GitHub Global Campus.
           Global Campus will help you get the practical industry knowledge you need by giving you access 
          to industry tools, events, learning resources and a growing student community. </p>
        <p></p>
        <div className='flex justify-center gap-5'>
        {/* <div className='bg-black flex justify-center items-center text-white px-4 py-2 rounded-full  text-center'>10+ project</div>
        <div className='bg-black flex justify-center items-center text-white px-4 py-2  rounded-full text-center'>20+ client</div>
        <div className='bg-black flex justify-center items-center text-white px-4 py-2 rounded-full text-center'>100+ review</div> */}
        </div>
        </div>

      
      <div className='w-[30%] flex gap-50  '>
        <img  className="h-[400px] w-full object-cover rounded-2xl" src={image}  />
      </div>
      
      


      





    </div>
  )
}

export default About