import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asynccurrentUser } from '../../store/Actions/userActions';
import Userdropdown from './dropdown/Userdropdown';

export default function Nav() {
    const dispatch = useDispatch();
  const {user} = useSelector((state) => state.user); 

  useEffect(() => {
    dispatch(asynccurrentUser());
  }, [dispatch])

  if (!user) {
    return <div>
        <div className=" fixed top-0 z-[999] w-full h-[100vh] bg-[#b1b1b1d6] flex flex-col items-center justify-center ">
            <img className='w-[5%]' src="/Images/loading.webp" alt="" />
            <p className='text-2xl mt-5 font-semibold'>Loading...</p>
        </div>
        </div>; 
  }
  
  return (
    <div>
        <div className="w-full h-20 border-b-2 flex items-center justify-between p-3 px-5 ">
            <img className='w-[10%]' src="/Images/CTS   Logo.png" alt="" />
            <div className="flex gap-2 items-center">

            <div className="w-12 h-12 rounded-full overflow-hidden">
                <img className='w-full h-full object-cover' src={user.avatar.url} alt="" />
            </div>
                <div className="flex flex-col gap-2">
                    <div className='w-10 h-1 bg-black'></div>
                    <div className='w-10 h-1 bg-black'></div>
                    <div className='w-10 h-1 bg-black'></div>
                </div>
            </div>
        </div>
        {/* <Userdropdown /> */}
    </div>
  )
}
