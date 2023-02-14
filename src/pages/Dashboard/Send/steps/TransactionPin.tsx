import Button from "../../../../components/buttons/Button";
import OtpInput from "react-otp-input";
import { useState } from "react";
import { useFormikContext, FormikProps } from "formik";
import { ISend } from "../../../../interfaces/send";

const TransactionPin = () => {
	const otp = useState("");
	const { values, setFieldValue }: FormikProps<ISend> = useFormikContext();
	const allowSubmit = otp[0].trim().length === 4;
	return (
		<div className="w-[481px] rounded-[10px] px-8 py-12 bg-white border border-[#E7E7E7]">
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

			<div className="mt-6">
				<Button
					disabled={!allowSubmit}
					onClick={() => {
						setFieldValue("step", 4);
					}}
					label="Confirm"
					width="w-full"
				/>
			</div>
		</div>
	);
};

export default TransactionPin;
