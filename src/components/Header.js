import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
const Header = () => {

const [toggleMenu,setToggleMenu] = useState(false);


  return (
   <header className='flex justify-between py-2 px-5 bg-primary text-xl fixed top-0 left-0 right-0 z-10'>
    <a className='font-bold text-black font-hero-font' href="#">Raj Rathinam</a>
<nav className='hidden md:block'>
<ul className='flex text-white'>
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contacts">Contacts</a></li>
    </ul>
</nav>

{toggleMenu && <nav className='block md:hidden' onClick={()=>setToggleMenu(!toggleMenu)}>
<ul className='flex flex-col text-white mobile-nav '>
<li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contacts">Contacts</a></li>
    </ul>
</nav>}

<button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'><MdMenu className='text-white'/></button>

   </header>
  )
}

export default Header
