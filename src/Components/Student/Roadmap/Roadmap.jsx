import { RiArrowRightSLine } from '@remixicon/react'
import React from 'react'
import "./Roadmap.css"
import { Link } from 'react-router-dom'

export default function Roadmap() {
  
  return (
    <div>
        <div className="w-full flex gap-5 items-center justify-center flex-col h-[89vh] p-20 ">
            <div className="w-[70%] h-[80vh]  flex  flex-col items-center justify-center">
                    <img className='w-full scale-125' src="/Images/IMG_7138.GIF" alt="" />
            </div>
            <div className="w-full flex items-center justify-center z-[99]">
            <Link
            className=" h-12 gap-5 rounded-full pl-5 bg-[#F58612] text-white flex items-center justify-between p-2 font-bold"
            to="/create-roadmap"
          >
            <button className=""> Get Your Roadmap </button>
            <div className="w-8 flex items-center justify-center h-8 rounded-full bg-white">
              {" "}
              <RiArrowRightSLine className=" text-[#0000009b]" />{" "}
            </div>
          </Link>
            </div>

        </div>
    </div>
  )
}
