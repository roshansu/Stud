import React from 'react'
import Card from './Card'
import { useDispatch } from 'react-redux'
import { setYear } from '../Slice'
import {setFilter} from '../Slice'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const courseFilter = useSelector((state)=>state.inputState.course)
    const yearFilter = useSelector((state)=>state.inputState.year)
    const filter = useSelector((state)=>state.inputState.filter)

    const dispatch = useDispatch()
    const[active, setActive] = useState(0)
    const[active2, setActive2] = useState(0)
    const[data, setData] = useState([])
    const[getData, setGetData] = useState([])
    const[loading, setLoading] = useState(false)

    function fetchData(){
        setLoading(true)
        // localhost:3000/
        
        fetch("https://zooming-integrity-production.up.railway.app/r",{
            method:"GET",
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then((res)=>res.json())
        .then((data)=>{
            setData(data)
            setLoading(false)
        })
    }
    useEffect(()=>{{
        fetchData()
    }},[])

    console.log('data',data)

    const handleClick = (e) => {
        setActive(e)
        dispatch(setYear(e))
    }
    const handleClick2 = (e) => {
        setActive2(e)
        dispatch(setFilter(e))
    }

  useEffect(()=>{
    let finalData = data
   
    if(courseFilter !== 'All'){
        const filteredData = [...finalData].filter((item) => item.course == courseFilter);
       finalData = [...filteredData]
    }

    if(yearFilter !== 0){
        const filteredData = [...finalData].filter((item) => item.year == yearFilter);
       finalData = [...filteredData]
    }

    if(filter === 2){
        const filteredData = [...finalData].sort((a, b) => Number(a.like) - Number(b.like));
        finalData = [...filteredData]
        console.log('hated', finalData)
    }
    else if(filter === 1){
        const filteredData = [...finalData].sort((a, b) => Number(b.like) - Number(a.like));
        finalData = [...filteredData]
        console.log('loved', finalData)
    }

    setGetData(finalData)
    

  },[courseFilter, yearFilter, filter, loading])

    if(loading) return <div className='flex px-2 justify-center flex-col items-center h-screen'>
        <i className="fa-solid  fa-spinner animate-spin text-4xl"></i>
        <p className='lg:text-2xl lg:w-[70%] text-xl mt-3 text-center'>this site is currently under maintenance and it will be live soon. stay tuned :)</p>
    </div>


  return (
    <div className='bg-[#eef4ed] pb-16 pt-14  lg:pt-24'>
       <div className='flex  justify-center'>
            <p className='lg:max-w-1/2 p-2 text-[#023047] text-lg font-bold  text-center lg:text-2xl'> you cannot comment only you can see comments on other's profile
        </p>
       </div>
       <div className='flex mt-6 lg:flex-nowrap flex-wrap px-2 justify-center items-center gap-3 lg:text-base text-sm lg:gap-6'>
            <button onClick={()=>handleClick(0)}  className={`${active===0?'bg-[#003049] text-white':'bg-white  text-black'} px-3 py-1 border cursor-pointer border-gray-300  font-medium rounded-md lg:text-lg`}>All</button>
            <button onClick={()=>handleClick(1)}  className={`${active===1?'bg-[#003049] text-white':'bg-white  text-black'}  px-3 py-1 border cursor-pointer border-gray-300   font-medium rounded-md lg:text-lg`}>1st year</button>
            <button onClick={()=>handleClick(2)} className={`${active===2?'bg-[#003049] text-white':'bg-white  text-black'} px-3 py-1 border cursor-pointer border-gray-300   font-medium rounded-md lg:text-lg`}>2nd year</button>
            <button onClick={()=>handleClick(3)} className={`${active===3?'bg-[#003049] text-white':'bg-white  text-black'} px-3 py-1 border cursor-pointer border-gray-300  font-medium rounded-md lg:text-lg`}>3rd year</button>
            <button onClick={()=>handleClick(4)} className={`${active===4?'bg-[#003049] text-white':'bg-white  text-black'} px-3 py-1 border cursor-pointer border-gray-300  font-medium rounded-md lg:text-lg`}>4th year</button>
            <button onClick={()=>handleClick2(0)} className={`${active2===0?'bg-[#05668d] text-white':'bg-white  text-black'} px-3 py-1 border cursor-pointer border-gray-300   font-medium rounded-md lg:text-lg`}>Default</button>
            <button onClick={()=>handleClick2(1)} className={`${active2===1?'bg-[#d90429] text-white':'bg-white  text-black'} px-3 py-1 border cursor-pointer border-gray-300  font-medium rounded-md lg:text-lg`}>Most loved</button>
            <button onClick={()=>handleClick2(2)} className={`${active2===2?'bg-[#353535] text-white':'bg-white  text-black'} px-3 py-1 border cursor-pointer border-gray-300  font-medium rounded-md lg:text-lg`}>Most hated</button>

        </div>
        <div className='justify-center gap-10 lg:px-32 mt-6 flex  flex-wrap'>
           {
            getData.map((item)=>{
                return <Card key={item._id} id={item._id} names={item.name} courses={item.course} years={item.year} comments={item.comment} photo={item.photo} like={item.like} dislike={item.dislike}/>
            })
           }

        </div>

        <div className='flex justify-center gap-3 items-center text-gray-700 font-medium mt-6 text-2xl'>
            <p>This is the end</p>
            <i className="fa-solid fa-hourglass-end"></i>
        </div>
    </div>
  )
}

export default Home
