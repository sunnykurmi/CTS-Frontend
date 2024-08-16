import React from 'react'

export default function Nav() {
  return (
    <div>
        <div className="w-full h-20 border-b-2 flex items-center justify-between p-3 px-5 ">
            <img className='w-[10%]' src="/Images/CTS   Logo.png" alt="" />
            <div className="flex gap-2 items-center">

            <div className="w-10 h-10 rounded-full overflow-hidden">
                <img className='w-full h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TgOv9CMmsUzYKCcLGWPvqcpUk6HXp2mnww&s" alt="" />
            </div>
                <div className="flex flex-col gap-2">
                    <div className='w-10 h-1 bg-black'></div>
                    <div className='w-10 h-1 bg-black'></div>
                    <div className='w-10 h-1 bg-black'></div>
                </div>
            </div>
        </div>
    </div>
  )
}
