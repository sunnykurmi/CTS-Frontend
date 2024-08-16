import { RiBookLine, RiHome2Fill, RiHome2Line, RiPhoneLine, RiRoadMapLine, RiSettings5Line, RiTeamLine, RiWindow2Line } from '@remixicon/react'
import React from 'react'

export default function LeftSlide() {
  return (
    <div>
      <div className="w-full h-full flex gap-3 flex-col justify-center px-5 py-[8vh]">
        <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 w-full justify-center px-6 ">
          <div className="w-[60%]  h-[2px] bg-[#393e4675]"></div>
          <p className=' text-[#393e4675] font-semibold text-xs'>HOME</p>
          <div className="w-[60%]  h-[2px] bg-[#393e4675]"></div>
        </div>
        <div className="w-full h-[8vh]  flex items-center justify-center">
          <button className=' flex gap-4 items-center justify-start pl-6 font-semibold h-[90%] w-[80%] border-2 border-[#2a2a2ab6] rounded-lg'>
            <RiHome2Line/>
            <p>Dashboard</p>
          </button>
        </div>
        <div className="w-full h-[8vh]  flex items-center justify-center">
          <button className=' flex gap-4 items-center justify-start pl-6 font-semibold h-[90%] w-[80%] border-2 border-[#2a2a2ab6] rounded-lg'>
            <RiRoadMapLine/>
            <p>Roadmap</p>
          </button>
        </div>
        </div>
        <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 w-full justify-center px-6">
          <div className="w-[50%]  h-[2px] bg-[#393e4675]"></div>
          <p className=' text-[#393e4675] font-semibold text-xs'>ENGAGE</p>
          <div className="w-[50%]  h-[2px] bg-[#393e4675]"></div>
        </div>
        <div className="w-full h-[8vh]  flex items-center justify-center">
          <button className=' flex gap-4 items-center justify-start pl-6 font-semibold h-[90%] w-[80%] border-2 border-[#2a2a2ab6] rounded-lg'>
            <RiBookLine/>
            <p>Resource</p>
          </button>
        </div>
        <div className="w-full h-[8vh]  flex items-center justify-center">
          <button className=' flex gap-4 items-center justify-start pl-6 font-semibold h-[90%] w-[80%] border-2 border-[#2a2a2ab6] rounded-lg'>
            <RiWindow2Line/>
            <p>Events</p>
          </button>
        </div>
        <div className="w-full h-[8vh]  flex items-center justify-center">
          <button className=' flex gap-4 items-center justify-start pl-6 font-semibold h-[90%] w-[80%] border-2 border-[#2a2a2ab6] rounded-lg'>
            <RiTeamLine/>
            <p>Community</p>
          </button>
        </div>
        </div>
        <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 w-full justify-center px-6">
          <div className="w-[50%]  h-[2px] bg-[#393e4675]"></div>
          <p className=' text-[#393e4675] font-semibold text-xs'>OTHERS</p>
          <div className="w-[50%]  h-[2px] bg-[#393e4675]"></div>
        </div>
        <div className="w-full h-[8vh]  flex items-center justify-center">
          <button className=' flex gap-4 items-center justify-start pl-6 font-semibold h-[90%] w-[80%] border-2 border-[#2a2a2ab6] rounded-lg'>
            <RiSettings5Line/>
            <p>Settings</p>
          </button>
        </div>
        <div className="w-full h-[8vh]  flex items-center justify-center">
          <button className=' flex gap-4 items-center justify-start pl-6 font-semibold h-[90%] w-[80%] border-2 border-[#2a2a2ab6] rounded-lg'>
            <RiPhoneLine/>
            <p>Contact Us</p>
          </button>
        </div>
       
        </div>
      </div>
    </div>
  )
}
