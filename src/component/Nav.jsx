import React from 'react'
import About from './About'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCourse } from '../Slice'
import Registeruser from './Register'
import { Link } from 'react-router-dom'

const Nav = () => {
  const[Register, setRegister] = useState(false)
  const dispatch = useDispatch()



  return (
    <div className='fixed bg-white z-10  border-b border-gray-300 top-0 w-full'>
      <nav className='p-2 lg:p-4 flex justify-between lg:gap-6 lg:justify-center '>
        <Link to={"/"} className="flex h-fit items-center border-r border-cyan-100  lg:mr-6 pr-2 lg:pr-4  text-lg gap-2 lg:gap-3 font-bold lg:text-3xl">
            <p className=''>Stud</p>
            <i className="fa-solid fa-user-graduate text-[#74C0FC]" ></i>
        </Link>
        <Link to={'/register'} className='flex h-fit items-center font-medium p-1 gap-1 lg:gap-3 lg:text-xl lg:px-3 lg:py-2 cursor-pointer rounded-lg bg-[#ffe6a7]'>
          <p>Register</p>
          <i className="fa-solid fa-user-plus "></i>  
        </Link>

 <div>       
<p>change course</p>
        <select onChange={(e)=>dispatch(setCourse(e.target.value))} className='border-2 border-gray-300 rounded-lg lg:p-2 lg:text-lg  cursor-pointer'>
          <option value="All">All</option>
          <option value="BCA">BCA</option>
          <option value="B.CS">B.CS</option>
          <option value="MCA">MCA</option>
          <option value="M.TECH">M.TECH</option>
          <option value="MBA">MBA</option>
          <option value="BBA">BBA</option>
          <option value="B.COM">B.COM</option>
          <option value="LLB">LLB</option>
          <option value="BSC AG">BSC AG</option>
          <option value="OTHER">OTHER</option>
        </select>
</div>
        <Link to={'/about'} className='lg:px-3 h-fit lg:py-2 p-1 bg-[#ced4da] font-medium rounded-lg lg:text-lg cursor-pointer'>About me</Link>
      </nav>
    </div>
  )
}

export default Nav
