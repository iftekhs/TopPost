import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../pages/Admin/shared/Sidebar/Sidebar';

const DashboardLayout = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <main className="p-4 sm:ml-64 mh-100">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
