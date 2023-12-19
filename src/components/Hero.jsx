import React from 'react'
import Seema from "../assets/Seema.JPG"
const Hero = () => {
  return (
    <div className= "flex justify-center mx-10 items-center gap-20 mt-10">
      <div className='flex flex-col gap-4 justify-center items-center w-[70%]'>
        <h1 className='text-2xl font-bold text-black-600'>Hi, <span className='text-black'><p>It's me Seema Bhattarai </p></span>  </h1>

        <p>
        Hi my name is Seema Bhattarai I'm a student of information technology and
         I am a passionate front-end developer. I possess a decent level of skill 
         in  HTML, CSS and React js as well. Are you willing for a 
         new website? Don 't forget to contact me if you want a website either for a 
         personal blog, any kind of online store, some sort of web application, 
         to register your domain or something entirely new.  </p>
        <p></p>
        {/* <button className='bg-black flex justify-center items-center text-white px-4 py-2 rounded-full hover:bg-white hover:text-black text-center'>learn more</button> */}
      </div>


      <div className='w-[30%] flex gap-50  '>
        <img  className="h-[400px] w-full object-cover rounded-2xl" src={Seema}  />
      </div>





    </div>
  )
}

export default Hero