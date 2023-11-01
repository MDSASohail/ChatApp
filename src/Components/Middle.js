import React from 'react'
import img from './Image/sohail.png'
function Middle({me}) {
  return (
    <>
        <div className={me?'flex  justify-end   p-2 ':'flex  p-2 '}>
            <div >
            <div className='flex '>
                <img src={img} className='w-10 h-10 mr-2 rounded-full object-cover' alt="" />
                <p className={me?' p-2 rounded-lg bg1 w-96':' p-2 rounded-lg bg2 w-96'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis corrupti nobis hic aperiam natus optio et a amet similique veniam consequatur mollitia, exercitationem ratione repellendus cumque blanditiis ipsa sequi aliquam!</p>
            </div>
            <p className={me?"text-end":""}>2 hour ago</p>
            </div>
        </div>
    </>
  )
}

export default Middle
