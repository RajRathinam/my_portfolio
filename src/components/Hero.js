import React from 'react'
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";import { FaInstagram } from "react-icons/fa6";
const Hero = () => {

const config = {
  subtitle:"Im a Full-stack web developer",
  social:{
linkedIn:'https://github.com/RajRathinam',
gitHub:'https://github.com/RajRathinam',
instagram:'https://github.com/RajRathinam'
  }
}


  return (
  <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
<div className='md:w-1/2 flex flex-col'>
<h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-black'>Raj</span> Rathinam 
<p className='text-2xl'>{config.subtitle}</p></h1>

<div className='flex py-10'>
  <a target='_blank' href={config.social.linkedIn} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
  <a target='_blank' href={config.social.gitHub} className='pr-5 hover:text-white'><FaGithub size={40}/></a>
  <a target='_blank' href={config.social.instagram} className='hover:text-white'><FaInstagram size={40}/></a>
</div>
</div>

  
<img src="./png2.png" className='md:w-1/3'/>
  </section>
  )
}

export default Hero
