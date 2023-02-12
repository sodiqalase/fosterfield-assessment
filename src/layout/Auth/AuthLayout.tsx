import React from "react";

import { Outlet } from "react-router-dom";

const AuthLayout = (props: {}) => {
	return (
		<main className="w-screen min-h-screen py-10 overflow-y-auto bg-black flex justify-center items-center">
			<section className="w-[557px] relative min-h-[614px] bg-white p-[60px] rounded-[10px]">
				<div className="absolute bottom-[30px] left-[-300px]">
					<div className="relative">
						<div className="h-[44px] z-[2] w-[44px] absolute left-[-15px] top-[-20px] rounded-t-[16px] bg-[#0177FD] flex justify-center items-center">
							<div className="flex items-center">
								<img
									src="/icons/quote.svg"
									className="w-2"
									alt=""
								/>
								<img
									src="/icons/quote.svg"
									className="w-2"
									alt=""
								/>
							</div>
						</div>

						<div className="w-[316px] px-5 bg-white shadow relative overflow-hidden py-10">
							<img
								src="/images/blue-bg.png"
								className="absolute left-0 top-[-15px] w-[195px]"
								alt=""
							/>

							<p className="text-[13px] italic text-[#A0AAC2]">
								Sending money is very straignt forward. I would
								highly recommended
							</p>
							<p className="text-[13px] mt-5 italic text-[#000000]">
								Oscar Pierre
							</p>
							<p className="text-[13px] mt-1 italic text-[#A0AAC2]">
								FOUNDER, Gloovo stores
							</p>
						</div>
					</div>

					<div className="mt-10 flex justify-center gap-5">
						<span className="h-[5px] w-[60px] bg-[#414244] rounded-[10px]"></span>
						<span className="h-[5px] w-[60px] bg-white rounded-[10px]"></span>
					</div>
				</div>

				<Outlet />
			</section>
		</main>
	);
};

export default AuthLayout;
