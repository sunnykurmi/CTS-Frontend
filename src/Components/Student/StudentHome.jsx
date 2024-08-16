import React from 'react'
import Nav from './Nav'
import LeftSlide from './LeftSlide'
import Roadmap from './Roadmap/Roadmap'

export default function StudentHome() {
  return (
    <div className='h-[100vh] w-full overflow-hidden'>
        <Nav/>
        <div className="flex w-full h-[88vh]  items-center justify-between ">
          <div className="w-[18%] h-full border-r-2">
            <LeftSlide/>
          </div>
          <div className="w-[82%] h-full ">
            <Roadmap/>
          </div>
        </div>
    </div>
  )
}
