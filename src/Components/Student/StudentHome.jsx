import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import LeftSlide from './LeftSlide';
import Roadmap from './Roadmap/Roadmap';
import { useDispatch, useSelector } from 'react-redux';
import { asynccurrentUser } from '../../store/Actions/userActions';
import Community from './Community/Community';
import Contactus from './ContactUs/Contactus';
import Events from './Events/Events';
import Resources from './Resources/Resources';
import Settings from './Settings/Settings';
import Dashboard from './Dashboard/Dashboard';
import Loader from '../Loader/Loader';
import { RiArrowRightLine, RiCloseLine } from '@remixicon/react';

export default function StudentHome() {
  const dispatch = useDispatch(); 
  const { user } = useSelector((state) => state.user); 
  const [selectedComponent, setSelectedComponent] = useState('Dashboard');
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [zIndex, setZIndex] = useState('99');

  useEffect(() => {
    dispatch(asynccurrentUser()); 
  }, [dispatch]);

  if (!user) {
    return <Loader />;
  }



  const toggleSidebar = () => {
    const newVisibility = !isSidebarVisible;
    setIsSidebarVisible(newVisibility);
    setZIndex(newVisibility ? '20' : '99');
  };


const closeSidebar = () => {
  setIsSidebarVisible(false);
};
  return (
    <>
    <div className='h-[100vh] w-full overflow-hidden max-[600px]:hidden'>
      <Nav />
      <div  className="flex w-full h-[88vh] items-center justify-between">
        <div className="w-[18%] h-full border-r-2">
          <LeftSlide selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent} />
        </div>
        <div className="w-[82%] h-[89vh]">
          {selectedComponent === 'Dashboard' && <Dashboard />}
          {selectedComponent === 'Roadmap' && <Roadmap />}
          {selectedComponent === 'Community' && <Community />}
          {selectedComponent === 'Contactus' && <Contactus />}
          {selectedComponent === 'Events' && <Events />}
          {selectedComponent === 'Resources' && <Resources />}
          {selectedComponent === 'Settings' && <Settings />}
        </div>
      </div>
    </div>



    <div className='h-[100vh] z-[99999] w-full overflow-hidden relative min-[600px]:hidden'>
      <div className="w-full top-0 fixed " style={{ zIndex }}>
      <Nav /> 
      </div>
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-[40] transition-opacity duration-300 backdrop-blur-lg ${isSidebarVisible ? 'opacity-50' : 'opacity-0 pointer-events-none'}`} onClick={closeSidebar}></div>
      <div className="flex pt-20 w-full h-[100vh] items-center justify-between relative z-[50]">
        <div className={`w-[18%] max-[600px]:w-[70%] bg-white max-[600px]:absolute relative max-[600px]:top-0 max-[600px]:left-0 max-[600px]:z-[99] h-full border-r-2 transition-transform duration-300 ${isSidebarVisible ? 'max-[600px]:translate-x-0' : 'max-[600px]:-translate-x-full'}`}>
          <RiCloseLine size={40} onClick={toggleSidebar} className='mr-5 mt-5 hidden max-[600px]:block absolute right-0 cursor-pointer'/>
          <LeftSlide selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent} closeSidebar={closeSidebar} />
        </div>
        <div className="w-[82%] max-[600px]:w-full h-[89vh]">
          <div className="center font-semibold gap-2 w-fit ml-5" onClick={toggleSidebar} >
<p>menu</p>
          <RiArrowRightLine className=' hidden max-[600px]:block cursor-pointer'/>
          </div>
          {selectedComponent === 'Dashboard' && <Dashboard />}
          {selectedComponent === 'Roadmap' && <Roadmap />}
          {selectedComponent === 'Community' && <Community />}
          {selectedComponent === 'Contactus' && <Contactus />}
          {selectedComponent === 'Events' && <Events />}
          {selectedComponent === 'Resources' && <Resources />}
          {selectedComponent === 'Settings' && <Settings />}
        </div>
      </div>
    </div>
    
    </>
  );
}