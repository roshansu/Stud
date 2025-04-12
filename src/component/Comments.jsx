import React from 'react'

const Comments = ({cData}) => {
  return (
    <div className='mt-3 border-b-2 pb-3 border-amber-700'>
       <div className='flex  text-gray-700 text-lg font-medium items-center gap-2'>
                <i className="fa-solid fa-circle-user"></i>
                <p>&bull; Anonymous</p>
        </div>
        <p className='text-gray-600 mt-1 text-lg'>{cData}</p>
    </div>
  )
}

export default Comments
