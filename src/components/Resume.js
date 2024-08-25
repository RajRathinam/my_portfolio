import React from 'react'

const Resume = () => {

const config ={
  link:'https://getsamplefiles.com/download/pdf/sample-1.pdf'
}


  return (
<section className='flex flex-col md:flex-row bg-primary p-5' id='resume'>
    <div className='md:w-1/2 flex flex-col justify-center pl-5 text-white'>
      <div className='flex flex-col justify-center'>  <h1 className='text-4xl  border-b-4 border-[#9006ec] pb-2 mb-5 w-[170px] font-bold'>Resume</h1>
      <p className='pb-5'>You can view & <a className='bg-secondary px-2 py-1 font-bold hover:border-2 border-white  mx-2 rounded md:btn' href={config.link}>Download it</a></p>

      </div>
        
        
    
    </div>
    <div className='flex justify-center md:w-1/2 py-5'>
        <img className=' w-[300px] h-[500px]' src="./resume.jpg" alt='resume_image'/>
    </div>
   </section>
  )
}

export default Resume
