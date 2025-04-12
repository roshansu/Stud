import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import imageCompression from 'browser-image-compression';

const Registeruser = () => {

    const[Name, setName] = useState('')
    const[Image, setImage] = useState('')
    const[Course, setCourse] = useState('')
    const[Year, setYear] = useState(0)

    const handleFileChange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;
  
      const options = {
        maxSizeMB: 1, // Max size in MB
        maxWidthOrHeight: 1024, // Resize if bigger
        useWebWorker: true,
      };
  
      try {
        const compressedFile = await imageCompression(file, options);
        console.log('Original:', file.size / 1024, 'KB');
        console.log('Compressed:', compressedFile.size / 1024, 'KB');
  
        setImage(compressedFile); // now compressed image is stored in state
      } catch (error) {
        console.error('Image compression error:', error);
      }
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!Name || !Image || !Course || !Year) {
      alert("Please fill all the fields.");
      return;
    }
  
    const formData = new FormData();
    formData.append("name", Name);
    formData.append("course", Course);
    formData.append("year", Year);
    formData.append("photo", Image); // File from input
    formData.append('like', 0);
    formData.append('dislike', 0);
    formData.append('comment', [])
  
    try {
      const res = await fetch("https://stud-backend-production.up.railway.app/register", {
        method: "POST",
        headers:{
          contentType:'application/json'
        },
        body: formData,
      });

      console.log(res);
  
      // const data = await res.json();
      // alert(data.message);
      alert("User registered successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to register.");
    }
  };
  

  return (
   <div className={'fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex justify-center items-center'}>
          <div className='bg-white rounded-lg shadow-lg w-[90%] lg:w-1/3 p-4'>
            <div className='flex justify-end'>
              <Link to={'/'}  className='text-2xl font-bold cursor-pointer'>X</Link>
            </div>
            <h1 className='text-center text-2xl font-bold mb-4'>Register</h1>
            <form method='POST' className='flex flex-col gap-4'>
              <input value={Name} required={true} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Full Name' className='border rounded-lg p-2 outline-none' />
              <p>Select your photo</p>
              <input  onChange={handleFileChange} required={true} type="file" accept="image/*" placeholder='image' className='border rounded-lg p-2 outline-none' />
              <p>Select your course</p>
              <select value={Course} onChange={(e)=>setCourse(e.target.value)} required={true} className='border-2 border-gray-300 rounded-lg lg:p-2 lg:text-lg  cursor-pointer'>     
                  <option >Select</option>
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
              <p>Select your year</p>
              <select value={Year} onChange={(e)=>setYear(e.target.value)} required={true} className='border-2 border-gray-300 rounded-lg lg:p-2 lg:text-lg  cursor-pointer'>
                  <option >Select</option>
                  <option value="1">1st year</option>
                  <option value="2">2nd year</option>
                  <option value="3">3rd year</option>
                  <option value="1">4th year</option>
              </select>
              <button type='submit'  onClick={(e)=>handleSubmit(e)} className='bg-blue-500 cursor-pointer text-white p-2 rounded-lg'>Submit</button>
            </form>
          </div>

        </div>
  )
}

export default Registeruser
