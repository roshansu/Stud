import React from 'react'


const About = () => {
  return (
    <div className='border-t mx-6 lg:mx-32 mb-16  pt-16 border-gray-400'>
        <div className='flex items-center  gap-2 flex-col text-gray-600 lg:text-xl'>
            <p className='text-black text-xl mt-3 font-medium'>Developed by</p>
            <div className='flex flex-col items-center lg:w-1/2'>
                <p className='text-center'>I'm Roshan, a BCA student at Shobhit University, deeply passionate about software development. Coding isn’t just a skill for me—it’s an art of solving problems and creating something impactful.</p>
                <p className='text-xl mt-4 font-medium text-black'>Follow me</p>
                <div className='text-3xl mt-3 flex items-center gap-8 text-gray-700'>
                    <a  href="https://www.linkedin.com/in/roshan-kumar-960184291/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/roshansu" target='_blank'><i className="fa-brands fa-github"></i></a>
                </div>
            </div>
            <div className='text-center'>
                <p className='text-xl mt-4 font-medium text-black'>Contact us</p>
                <p >roshanjaiswal.bca@gmail.com</p>
            </div>
            <div className='flex flex-col mt-4 items-center'>
                <div className='flex  text-center mb-2 gap-4 items-center'>
                    <i className="fa-solid fa-location-dot"></i>
                    <p>Meerut, uttar pradesh, india</p>
                </div>
                <p>© 2025 Stud. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default About
