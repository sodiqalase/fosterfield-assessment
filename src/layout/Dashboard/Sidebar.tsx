import React from "react";
import { Link, useLocation } from "react-router-dom";

const sideBarList = [
	{
		path: "/dashboard",
		label: "Dashboard",
		icon: "home",
	},
	{
		path: "/dashboard/send",
		label: "Send",
		icon: "send",
	},
	{
		path: "/dashboard/wallet",
		label: "Wallet",
		icon: "wallet",
	},
	{
		path: "/dashboard/beneficiary",
		label: "Beneficiary",
		icon: "beneficiary",
	},
	{
		path: "/dashboard/transaction",
		label: "Transaction",
		icon: "transaction",
	},
	{
		path: "/dashboard/help",
		label: "Get Help",
		icon: "help",
	},
	{
		path: "/dashboard/settings",
		label: "Settings",
		icon: "settings",
	},
];

const Sidebar = () => {
	const { pathname } = useLocation();
	console.log(pathname.split("/")[2], "split");

	return (
		<aside className="w-[187px] shadow px-2 bg-white py-[100px] h-full flex flex-col">
			<ul className="flex-1">
				{sideBarList.slice(0, 5).map((item, index) => {
					const path = pathname.split("/")[2];
					const isActive =
						index === 0
							? path === undefined
							: !!path?.startsWith(item.icon);
					return (
						<li
							key={`sideBarItem${index}`}
							className="cursor-pointer mb-[15px] last:mb-0"
						>
							<Link
								to={item.path}
								className={`flex items-center ${
									isActive ? "bg-[#F5F7F9]" : "bg-transparent"
								} rounded-[6px] py-[14px] pl-5`}
							>
								<img
									src={`/icons/sidebar/${item.icon}${
										isActive ? "" : "-inactive"
									}.svg`}
									className="w-4"
									alt=""
								/>
								<span
									className={`text-[14px] ${
										isActive
											? "text-fs-deep-black"
											: "text-fs-light-gray"
									} ml-5 font-semibold`}
								>
									{item.label}
								</span>
							</Link>
						</li>
					);
				})}
			</ul>
			<ul className="h-[100px]">
				{sideBarList.slice(5).map((item, index) => {
					const path = pathname.split("/")[2];
					const isActive = !!path?.startsWith(item.icon);
					return (
						<li
							key={`sideBarItem${index}`}
							className="cursor-pointer mb-[15px] last:mb-0"
						>
							<Link
								to={item.path}
								className={`flex items-center ${
									isActive ? "bg-[#F5F7F9]" : "bg-transparent"
								} rounded-[6px] py-[14px] pl-5`}
							>
								<img
									src={`/icons/sidebar/${item.icon}${
										isActive ? "" : "-inactive"
									}.svg`}
									className="w-4"
									alt=""
								/>
								<span
									className={`text-[14px] ${
										isActive
											? "text-fs-deep-black"
											: "text-fs-light-gray"
									} ml-5 font-semibold`}
								>
									{item.label}
								</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</aside>
	);
};

export default Sidebar;
