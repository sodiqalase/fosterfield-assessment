import React from 'react'
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div>
        <nav className="h-[100px] bg-black">
            <p className="text-white">Navbar</p>
        </nav>
        <div className=" p-12 bg-gray-200">
            <p className="text-black">main</p>
            <Outlet/>
        </div>
    </div>
  )
}

export default DashboardLayout