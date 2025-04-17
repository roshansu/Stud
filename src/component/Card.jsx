import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Comments from './Comments';
import Popup from './Popup';

const Card = ({names, courses, years, photo, like, dislike, comments, id}) => {
    const [isOpen, setIsOpen] = useState(true);
    const[comm, setComm] = useState('')
    const[see, setSee] = useState(false)
    const[likes, setLikes] = useState(false)
    let [likeCount, setLikeCount] = useState(like)
    const[write, setWrite] = useState(false)
    
    const prevComm = useRef(); // <-- This will hold the previous value

    useEffect(() => {
      prevComm.current = comm;
    }, [comm])

    // console.log(id)
    // console.log(course, year, filter)
    console.log(like, dislike)
    async function  handleWrite(){
      if(comm === ''){
        alert('opinion cannot be null')
        return;
      }
      setWrite(write?false:true)
    
        await fetch("https://zooming-integrity-production.up.railway.app/", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
            comm,
            id,
        }),
      }).then(()=>setComm(''))

      
    }

    async function handleLike() {
      if(!likes){
        setLikes(true)
        setLikeCount(likeCount+1)
        
      await fetch("https://zooming-integrity-production.up.railway.app/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes,
        id,
    }),})
  }
    }



  return (
    <div className='bg-white shadow-sm relative rounded-md border h-fit w-[350px] border-gray-300 '>
      <img className='object-cover max-h-48 w-full' src={photo} alt="" />
      <div className='p-3'>
        <div className='flex justify-between'>
         <p className='text-lg font-bold lg:text-xl'>{names}</p>
         <div className={`${dislike?'flex':'hidden'} px-2 gap-2 items-center rounded-lg font-medium py-1 bg-gray-200`}>
           <i className="fa-solid fa-ghost"></i>
           <p>The Creator of Stud</p>
         </div>
        </div>
        <div className='flex mt-4 items-center gap-3'>
            <p className='px-2 py-1 rounded-lg text-blue-800 bg-blue-200'>{courses}</p>
            <p className='px-2 py-1 rounded-lg text-blue-800 bg-blue-200'>year - {years}</p>
        </div>

        <div className='flex items-center gap-6 '>
            <div onClick={()=>handleLike()} className={`${likes?'bg-green-300':'bg-green-100'} flex px-2 py-1 w-fit cursor-pointer rounded-lg  mt-4 transition duration-300  items-center gap-3 text-xl font-semibold`}>
                <i className="fa-solid text-green-700 fa-thumbs-up"></i>
                <p className='text-green-700'>{likeCount}</p>
            </div>
        </div>

{/*         <div className='mt-4 pb-3 border-b border-gray-300 w-full'>
            <p>Write your opinion anonymously</p>
            <textarea value={comm} onChange={(e)=>setComm(e.target.value)}  className='px-3 mt-1 outline-none hover:bg-gray-300 transition-all duration-300 w-full py-1 rounded-lg border border-gray-300 bg-gray-100' name="" id=""></textarea>
            <button onClick={handleWrite} className='px-3 mt-2 rounded-lg py-1 cursor-pointer hover:bg-blue-700 transition duration-300 bg-blue-500 text-white font-medium'>Write</button>
        </div> */}

        <div className='pb-3 mt-4 '>
          <div className='mt-3 border-b-2 pb-3 border-amber-700 '>
            <div className='flex  text-gray-700 text-lg font-medium items-center gap-2'>
                      <i className="fa-solid fa-circle-user"></i>
                      <p>&bull; You</p>
              </div>
              <p className='text-gray-600 mt-1 text-lg'>{prevComm.current}</p>
          </div>
            {
              write? <Popup msg={"opinion added"}/>:''
            }
          <div className='mt-3 border-b-2 pb-3 border-amber-700 '>
            <div className='flex  text-gray-700 text-lg font-medium items-center gap-2'>
                      <i className="fa-solid fa-circle-user"></i>
                      <p>&bull; unknown user</p>
              </div>
              <p className='text-gray-600 mt-1 text-lg'>{comments[1]?comments[1]:'No opinion'}</p>
          </div>
          <p onClick={()=>setSee(see?false:true)} className='mt-2 text-lg cursor-pointer text-blue-600'>{see?'Hide':'See'} all opinion</p>
          <div className='max-h-96 overflow-y-scroll'>
            {
              see?comments.map((item, index)=>(
                  item?<Comments key={index} cData={item}/>:''
              )):''
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
