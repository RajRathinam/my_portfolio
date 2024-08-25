import React from 'react'
const projectImg = require('./project.jpeg');


const Projects = () => {

const config ={
project: [
    {
        image: projectImg,
        description : 'Real time chat apllication - Chatsapp.',
        link: 'https://github.com/RajRathinam/Book-Worm-Haven'
    },
    {
        image: projectImg,
        description : 'Permission getting platform - Permiso.',
        link: 'https://github.com/RajRathinam/Book-Worm-Haven'
    },
    {
        image: projectImg,
        description : 'Ordering for medical things - Ecomerse.',
        link: 'https://github.com/RajRathinam/Book-Worm-Haven'
    }
]
}

    return (
        <section className='flex flex-col py-20 px-5  justify-center bg-secondary text-white' id='projects'>
            <div className='w-full'>

                <div className='flex flex-col justify-start px-5'>
                    <h1 className='text-4xl  border-b-4 border-[#3b045f] pb-2 mb-5 w-[140px] font-bold'>Projects</h1>
<p className='pb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae aspernatur nostrum iste expedita consequuntur suscipit.</p>
                </div>

            </div>
            <div className='w-full'>
                <div className='w-full flex flex-col md:flex-row justify-center px-5 gap-5'>
                    
                 {
                    config.project.map((project,index) => (
                       
                        <div key={index} className='flex-1 relative'>
                        <img className='h-[300px] w-[500px]' src={project.image} alt='projects_image'/>
                        <div className='project-desc flex flex-col items-center'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <a target='_blank' href={project.link} className='btn w-[102px]'>Show it</a>

                        </div>
                        
                    </div>
                   
                    ))
                 }


                </div>

            </div>
        </section>
    )
}

export default Projects
