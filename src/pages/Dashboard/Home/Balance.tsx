import React from "react";
import useFetch from "../../../hooks/useFetch";

const Balance = () => {
	// const { data } = useFetch({
	// 	url: "users/wallets/transactions/summaries",
	// 	key: "transactionSummary",
	// 	params: null,
	// });

	return (
		<section className="flex rounded-[6px] shadow bg-white">
			<div className="p-5 rounded-[6px] w-[220px] bg-black">
				<div className="flex justify-between items-center">
					<div className="flex items-center">
						<img src="/icons/flag.svg" className="w-8" alt="" />
						<p className="text-[11px] ml-[6px] text-white">NGN</p>
					</div>
					<p className="text-[11px] text-white">Available Balance</p>
				</div>
				<p className="mt-5 text-white font-bold text-[20px]">
					12,345 NGN
				</p>
				<p className="mt-[6px] text-white text-[11px]">-N180.000</p>
			</div>
			<div className="p-5 rounded-[6px] border border-slate-100 w-[220px] bg-white">
				<p className="text-[11px] ">Savings</p>

				<p className="mt-5  font-bold text-[20px]">831,071 NGN</p>
				<p className="mt-[6px]  text-[11px]">-N180.000</p>
			</div>
		</section>
	);
};

export default Balance;
