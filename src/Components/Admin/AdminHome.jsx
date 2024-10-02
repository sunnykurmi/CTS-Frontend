import React, { useEffect, useState } from 'react';
import AdminLeftSlide from './AdminLeftSlide';
import { useDispatch, useSelector } from 'react-redux';
import { asynccurrentUser } from '../../store/Actions/userActions';
import AllStudents from './AllStudents';
import Nav from '../Student/Nav';
import Loader from '../Loader/Loader';
import AllRoadmaps from './AllRoadmaps';
import PendingRoadmaps from './PendingRoadmaps';
import AllInternships from './AllInternships';
import AllPortfolios from './AllPortfolios';

export default function AdminHome() {
  const dispatch = useDispatch(); 
  const { user } = useSelector((state) => state.user); 
  const [selectedComponent, setSelectedComponent] = useState('AllPortfolios');

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
          <AdminLeftSlide selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent} />
        </div>
        <div className="w-[82%] h-[89vh]">
          {selectedComponent === 'AllStudents' && <AllStudents />}
          {selectedComponent === 'AllRoadmaps' && <AllRoadmaps />}
          {selectedComponent === 'PendingRoadmaps' && <PendingRoadmaps />}
          {selectedComponent === 'AllInternships' && <AllInternships />}
          {selectedComponent === 'AllPortfolios' && <AllPortfolios />}
        </div>
      </div>
    </div>
  );
}