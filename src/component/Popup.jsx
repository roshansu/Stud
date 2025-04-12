import React, { useState } from 'react'
import { useEffect } from 'react'

const Popup = ( {msg}) => {
    if(msg === null)
        return;
    const[active, setActive] = useState(true)
    useEffect(() => {
        setTimeout(() => {
           setActive(false)
        }, 2000);
    }, [msg])

  return (
    <div id='popup' className={`${active?'flex':'hidden'}  px-3 py-2 items-center gap-2 font-bold rounded-2xl fixed top-[20%] left-[40%] bg-gray-200 border border-gray-40`}>
      <i className="fa-solid fa-circle-exclamation"></i>
      <p>{msg}</p>
    </div>
  )
}

export default Popup
