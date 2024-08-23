import React, { useEffect } from 'react'
import Nav from './Nav'
import LeftSlide from './LeftSlide'
import Roadmap from './Roadmap/Roadmap'
import { useDispatch, useSelector } from 'react-redux';
import { asynccurrentUser } from '../../store/Actions/userActions';

export default function StudentHome() {
  const dispatch = useDispatch(); 
  const {user} = useSelector((state) => state.user); 
 
  useEffect(() => {
    dispatch(asynccurrentUser()); 
  }, [dispatch]);

  console.log(user);

  if (!user) {
    return <h1>Loading...</h1>; 
  }
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
