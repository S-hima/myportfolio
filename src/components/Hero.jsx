import React from 'react'
import image from "../assets/IMG_2124.JPG"
const Hero = () => {
  return (
    <div className= "flex justify-center items-center gap-5">
      <div>
        <h1>Hi Welcome To My Website</h1>
        <p></p>
        
        <button>learn more</button>
      </div>


      <div className='w-[50%] flex gap-50'>
        <img src={image}  />
      </div>





    </div>
  )
}

export default Hero