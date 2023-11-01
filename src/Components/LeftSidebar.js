import React from 'react'
import img from './Image/sohail.png'
function LeftSidebar() {
  return (
    <>
      <div  >
        <div className='border-b-2 mb-2'>
            <input className='text-xl outline-none bg-transparent  p-1' type="text" placeholder='Search' />
        </div>
        <div className='flex hoverEffect rounded-md cursor-pointer p-2 mt-2 items-center justify-around'>
            <img className='w-14 h-14 object-cover rounded-full' src={img} alt="" />
            <p><strong>Md. Sohail Ansari</strong></p>
        </div>
        <div className='flex hoverEffect rounded-md cursor-pointer p-2 mt-2 items-center justify-around'>
            <img className='w-14 h-14 object-cover rounded-full' src={img} alt="" />
            <p><strong>Md. Sohail Ansari</strong></p>
        </div>
        <div className='flex hoverEffect rounded-md cursor-pointer p-2 mt-2 items-center justify-around'>
            <img className='w-14 h-14 object-cover rounded-full' src={img} alt="" />
            <p><strong>Md. Sohail Ansari</strong></p>
        </div>
      </div>
    </>
  )
}

export default LeftSidebar
