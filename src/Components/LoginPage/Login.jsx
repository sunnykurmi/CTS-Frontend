import { RiKeyLine, RiMailLine } from '@remixicon/react'
import React from 'react'

export default function Login() {
  return (
    <>
      <div className="w-full h-[100vh] p-10 flex max-[600px]:flex-col">
        <div className="w-[70%] h-full flex flex-col items-center border-r-2 border-r-[#00000033] ">
          <div className="w-full h-[20%]  ">
            <img className='w-[30%]' src="/Images/CTS   Logo.png" alt="" />
          </div>
          <div className="w-full flex items-center justify-center h-[80%] ">
            <img src="https://img.freepik.com/premium-vector/learning-small-people-characters-doing-various-tasks-books-trophy_113065-52.jpg" alt="" />
          </div>
        </div>
        <div className="w-[30%] h-full">
          <div className="w-full flex items-center justify-center h-[20vh]">
            <img className='w-[20%]' src="/Images/logo gray.PNG" alt="" />
            <h1 className='text-4xl font-semibold  ' >Login To Cross The <br /> Skylimits</h1>
          </div>
          <div className="w-full pt-20 flex flex-col gap-5 items-center justify-center ">
            <div className="w-[90%] h-14 flex items-center justify-center overflow-hidden p-2  rounded-full border-2 ">
              <input className='h-full text-xl w-[85%] pr-6 outline-none flex items-center justify-center ' type="text" placeholder='Enter Email Address' name="" id="" />
              <RiMailLine className='text-[#0000006f]'/>
            </div>
            <div className="w-[90%] h-14 flex items-center justify-center overflow-hidden p-2  rounded-full border-2 ">
              <input className='h-full text-xl w-[85%] pr-6 outline-none flex items-center justify-center ' type="text" placeholder='Enter Password' name="" id="" />
              <RiKeyLine className='text-[#0000006f]'/>
            </div>
            <div className="w-[90%] h-14 flex items-center justify-center overflow-hidden p-2  rounded-full border-2   bg-[#ffae00]">
              <p className='font-semibold text-lg'>Login with Email</p>
            </div>
            <div className="w-full flex items-center justify-center">
            <div className="w-[90%] flex items-center justify-between">
              <div className="w-[42%] h-[2px] bg-[#0000008b]"></div>
              <p className='font-semibold'>OR</p>
              <div className="w-[42%] h-[2px] bg-[#0000008b]"></div>
            </div>

            </div>
            <div className="w-[90%] h-14 flex items-center justify-center overflow-hidden p-2  rounded-full border-2   bg-[white]">
              <img className='w-[12%]' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
              <p className='font-semibold text-lg'>Continue with Gmail</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
