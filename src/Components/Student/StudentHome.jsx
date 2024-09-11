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

export default function StudentHome() {
  const dispatch = useDispatch(); 
  const { user } = useSelector((state) => state.user); 
  const [selectedComponent, setSelectedComponent] = useState('Dashboard');

  useEffect(() => {
    dispatch(asynccurrentUser()); 
  }, [dispatch]);

  if (!user) {
    return <Loader />;
  }

  return (
    <div className='h-[100vh] w-full overflow-hidden'>
      <Nav />
      <div className="flex w-full h-[88vh] items-center justify-between">
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
  );
}