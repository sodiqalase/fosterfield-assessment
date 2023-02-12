import React, { useState } from "react";
import Button from "../../../components/buttons/Button";
import OtpInput from "react-otp-input";
import Checkbox from "../../../components/form-inputs/Checkbox";
import { Link } from "react-router-dom";
import TextInput from "../../../components/form-inputs/TextInput";

const CreatePin = () => {
	const otp = useState("");
	return (
		<section className="flex flex-col items-center">
			<h5 className="text-[22px]  text-fs-deep-black font-medium">
				Create PIN
			</h5>
			<p className="max-w-[389px] mt-5 text-[13px] text-fs-light-gray">
				Transaction PIN is a 4-digit, which will be used to authorize
				your transactions
			</p>
			<div className="mt-12 border border-[#F5F5F5] w-full p-[45px] rounded-[12px]">
				<div className="w-[90%] mx-auto">
					<OtpInput
						value={otp[0]}
						onChange={otp[1]}
						isInputSecure
						numInputs={4}
						isInputNum
						inputStyle="h-[70px] flex-1 block rounded-md border border-gray-300 text-center"
						focusStyle="border border-blue-400 outline-none"
						containerStyle="!grid grid-cols-4 gap-4 "
					/>
				</div>
				<p className="mt-[35px] mb-[26px] text-fs-light-gray text-[11px] font-semibold">
					Provide your secret transaction pin
				</p>
				<div className="flex justify-center">
					<Button label="Done" width="w-full" />
				</div>
			</div>
		</section>
	);
};

export default CreatePin;
