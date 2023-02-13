import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
	return (
		<section className="w-screen h-screen flex">
			<Sidebar />
			<section className="h-full flex-1">
				<Navbar />
				<main className="h-[calc(100vh-70px)] bg-[#FAFAFA] overflow-y-hidden py-[11px]">
					<div className="h-full overflow-y-auto px-[35px]">
						<Outlet />
					</div>
				</main>
			</section>
		</section>
	);
};

export default DashboardLayout