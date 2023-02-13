import React from "react";
import Button from "../../components/buttons/Button";

const Navbar = () => {
	return (
		<nav className="h-[70px] shadow bg-white px-[30px] flex items-center justify-between">
			<Button label="+ Add Money" font="font-light" width="w-[147px]" />
			<div className="flex items-center gap-6">
				<img src="/icons/bell.svg" className="w-[18px]" alt="" />
				<img src="/icons/profile.svg" className="w-[30px]" alt="" />
			</div>
		</nav>
	);
};

export default Navbar;
