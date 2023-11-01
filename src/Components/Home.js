import React, { useContext } from 'react'
import Navbar from './Navbar'
import LeftSidebar from './LeftSidebar'
import Middle from './Middle'
import RightSidebar from './RightSidebar'
import {AuthContext} from './Context/AuthContext'
function Home() {

  const {user}=useContext(AuthContext);
  console.log(user)
  return (
    <>
       <Navbar/>
       <div className='grid maingrid  relative'>
        
        <div  className=" leftSidebar  hide relative  mr-2">
          <div className='sticky top-20'>
          <LeftSidebar/>
          </div>
        </div>
        
         <div className=' middle max-h-96  '>

              <div className=' h-full hidescrollBar overflow-x-hidden overflow-scroll  '>
              <Middle/>
              <Middle  me={true}/>
              <Middle/>
              <Middle me={true}/>
              <Middle/>
              <Middle  me={true}/>
              <Middle/>
              <Middle me={true}/>
              <Middle/>
              <Middle  me={true}/>
              <Middle/>
              <Middle me={true}/>
              
              </div>
              <div id="" className='flex mt-2'>
                  <textarea name="" id="" className='border-2 justify-around mr-2 w-full p-2 outline-none'  placeholder='Type message'></textarea>
                  <button className='bg1 rounded-lg font-bold p-2'>Send </button>
              </div>
              
         </div>
        <div className=' hide rightSidebar ml-2'>
          <div className='sticky top-20'>
          <RightSidebar/>
          <RightSidebar/>
          <RightSidebar/>
          </div>
        </div>
        
       </div>
    </>
  )
}

export default Home
