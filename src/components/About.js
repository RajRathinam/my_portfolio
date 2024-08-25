import React from 'react'

const About = () => {

const config ={
  line1:'Hi, My name is Raj Rathinam, I am a full-stack developer. I build beautiful websites with React and Tailwind css',
  line2:'Hi, My name is Raj Rathinam, I am a full-stack developer. I build beautiful websites with React and Tailwind css'
}


  return (
   <section className='flex flex-col md:flex-row bg-primary p-5' id='about'>
    <div className='md:w-1/2 py-5'>
        <img src="./raj-png.png" alt='my_image'/>
    </div>
    <div className='md:w-1/2 flex flex-col justify-center text-white'>
      <div className='flex flex-col justify-center'>  <h1 className='text-4xl  border-b-4 border-[#9006ec] pb-2 mb-5 w-[170px] font-bold'>About me</h1></div>
        <p className='pb-5'>{config.line1}</p>
        <p >{config.line2}</p>
    
    </div>
   </section>
  )
}

export default About
