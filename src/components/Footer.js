import React from 'react'

const Footer = () => {

const year = new Date().getFullYear();


  return (
    <div className='py-4 bg-primary text-center text-white'>
      &copy; Raj Rathinam {year}
    </div>
  )
}

export default Footer
