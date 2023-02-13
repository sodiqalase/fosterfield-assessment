import React, { useState } from "react";
import Action from "../../../components/Action";
import Button from "../../../components/buttons/Button";
import TextInput from "../../../components/form-inputs/TextInput";

const QuickTransaction = () => {
	const tab = useState(1);
	return (
		<div className="w-[383px] rounded-[6px] bg-white shadow p-5">
			<h6 className="text-[17px] text-fs-deep-black font-bold">
				Quick Transaction
			</h6>
			<div className="mt-[28px] grid grid-cols-2">
				<button
					onClick={() => {
						tab[1](1);
					}}
					className={`outline-none ${
						tab[0] === 1
							? "text-fs-deep-black bg-[#F7F9FA]"
							: "text-fs-light-gray bg-transparent"
					} text-[11px] font-medium flex items-center justify-center py-3 rounded-[6px] w-full`}
				>
					Add Money
				</button>
				<button
					onClick={() => {
						tab[1](2);
					}}
					className={`outline-none ${
						tab[0] === 2
							? "text-fs-deep-black bg-[#F7F9FA]"
							: "text-fs-light-gray bg-transparent"
					} text-[11px] font-medium flex items-center justify-center py-3 rounded-[6px] w-full`}
				>
					Withdraw
				</button>
			</div>
			<div className="mt-[25px]">
				<label className="block h-[21px] text-[14px] text-fs-light-black mb-4">
					Account
				</label>
				<div>
					<Action
						options={[
							{
								name: "Primary",
								action: () => {},
							},
						]}
						Component={
							<button className="flex w-[131px] cursor-pointer outline-none items-center justify-between h-[45px] px-2 rounded-[6px] bg-[#F7F9FA]">
								<div className="flex items-center">
									<img
										src="/icons/flag.svg"
										className="w-8"
										alt=""
									/>
									<p className="ml-[6px] text-fs-light-gray text-[11px]">
										Main
									</p>
								</div>
								<img
									src="/icons/chevron-down.svg"
									className="w-[10px]"
									alt=""
								/>
							</button>
						}
					/>
				</div>
			</div>
			<div className="mt-[25px]">
				<TextInput
					label="Amount"
					name="amount"
					inputBg="bg-[#F7F9FA] !border-none"
					placeholder="Enter amount"
				/>
			</div>
			<div className="mt-[60px]">
				<Button label="Add" width="w-full" />
			</div>
		</div>
	);
};

export default QuickTransaction;
