import React from 'react'
import Image from '../assets/IMG-20221126-WA0008.jpg'

const Service = () => {
  const serviceData =[
    {
      image: Image,
      name: "Web development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi incidunt impedit ea pariatur odit necessitatibus amet, maxime quisquam, vero animi, ab nulla. Porro doloremque dolores nulla tenetur, voluptatibus aperiam natus?",
    },
    {
      image: Image,
      name: "App development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi incidunt impedit ea pariatur odit necessitatibus amet, maxime quisquam, vero animi, ab nulla. Porro doloremque dolores nulla tenetur, voluptatibus aperiam natus?",

    },
    {
      image: Image,
      name: "Digital marketing",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi incidunt impedit ea pariatur odit necessitatibus amet, maxime quisquam, vero animi, ab nulla. Porro doloremque dolores nulla tenetur, voluptatibus aperiam natus?",

    },
  

  ]
  return (
    <div>
      <h1 className='text-xl font-bold text-center my-8 '>Our Service</h1>

      <div className='flex flex-row justify-center gap-4 mx-8 '>
        {serviceData.map((service,Index) =>(
          <div className='flex flex-col justify-center items-center rounded-lg shadow-lg p-4 w-[300px]' key={Index}>
          <img className='rounded-full object-cover h-40 w-40 ' src={Image} alt=""/>
          <h1 className='font-semibold text-lg my-2'>{service.name}</h1>
          <p className='text-justify'>{service.description}</p>
          <button className='bg-black flex justify-center items-center text-white px-4 py-2 rounded-full hover:bg-white hover:text-black text-center mt-4'>Read More</button>
        </div>

        ))}
        




      </div>

    </div>
  )
}

export default Service