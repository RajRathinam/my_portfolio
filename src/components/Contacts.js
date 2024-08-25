import React from 'react'

const Contacts = () => {

const config ={
email:'rajrathinam2005@gmail.com',
phone:'1234567890'

}


  return (
    <section className='flex flex-col bg-secondary px-5 py-32' id='contacts'>
    
    <div className=' flex flex-col items-center text-white'>
       <h1 className='text-4xl  border-b-4 border-[#3b045f] pb-2 mb-5 w-[200px] font-bold'>Contact me</h1>
        <p className='pb-5 text-center'>If you want to discuss more in detail please contact me!</p>
    <p className='py-2'><span className='font-bold'>Email :</span>{config.email}</p>
    <p className='py-2'><span className='font-bold'>Phone :</span>{config.phone}</p>
    </div>
   </section>
  )
}

export default Contacts
