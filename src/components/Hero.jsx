import React from 'react'
import image from "../assets/IMG_2124.JPG"
const Hero = () => {
  return (
    <div className= "flex justify-center mx-10 items-center gap-20 mt-10">
      <div className='flex flex-col justify-center items-center w-[70%]'>
        <h1>Hi, <span>Welcome To My Website</span>  </h1>

        <p>Prepare for a career in tech by joining GitHub Global Campus.
           Global Campus will help you get the practical industry knowledge you need by giving you access 
          to industry tools, events, learning resources and a growing student community. </p>
        <p></p>
        <button>learn more</button>
      </div>


      <div className='w-[30%] flex gap-50  '>
        <img  className="h-[400px] w-full object-cover rounded-2xl" src={image}  />
      </div>





    </div>
  )
}

export default Hero