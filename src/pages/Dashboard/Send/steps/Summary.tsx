import Button from "../../../../components/buttons/Button";
import { useFormikContext, FormikProps } from "formik";
import { ISend } from "../../../../interfaces/send";
import { addCommas } from "../../../../utils/helpers";

const Summary = () => {
	const { values, setFieldValue }: FormikProps<ISend> = useFormikContext();
	return (
		<div className="w-[501px] rounded-[10px] px-6 py-10 bg-white border border-[#E7E7E7]">
			<h5 className="text-fs-deep-black font-semibold">Summary</h5>
			<div className="mt-6 rounded-[6px] bg-[#FAFAFA] p-3">
				<div className="flex justify-between items-center">
					<p className="text-fs-deep-black font-semibold text-[12px]">
						Destination Details:
					</p>
					<div
						onClick={() => {
							setFieldValue("step", 1);
						}}
						className="flex cursor-pointer items-center"
					>
						<img src="/icons/pencil.svg" className="w-3" alt="" />
						<span className="ml-1 text-[12px] text-fs-primary-blue">
							Edit
						</span>
					</div>
				</div>
				<div className="mt-[10px]">
					<div className="flex items-center mb-2 last:mb-0">
						<p className="w-[150px] text-fs-light-gray text-[13px]">
							Amount:
						</p>
						<p className="flex-1 text-fs-deep-black text-[13px]">
							N{addCommas(values.amount)}
						</p>
					</div>
					<div className="flex items-center mb-2 last:mb-0">
						<p className="w-[150px] text-fs-light-gray text-[13px]">
							Bank:
						</p>
						<p className="flex-1 text-fs-deep-black text-[13px]">
							{values.destination_bank}
						</p>
					</div>
					<div className="flex items-center mb-2 last:mb-0">
						<p className="w-[150px] text-fs-light-gray text-[13px]">
							Account Number:
						</p>
						<p className="flex-1 text-fs-deep-black text-[13px]">
							{values.account_number}
						</p>
					</div>
					<div className="flex items-center mb-2 last:mb-0">
						<p className="w-[150px] text-fs-light-gray text-[13px]">
							Account Name:
						</p>
						<p className="flex-1 text-fs-deep-black text-[13px]">
							{values.account_name}
						</p>
					</div>
					<div className="flex items-center mb-2 last:mb-0">
						<p className="w-[150px] text-fs-light-gray text-[13px]">
							Description:
						</p>
						<p className="flex-1 text-fs-deep-black text-[13px]">
							{values.description}
						</p>
					</div>
				</div>
			</div>
			<div className="mt-4 rounded-[6px] bg-[#FAFAFA] p-3">
				<div className="">
					<p className="text-fs-deep-black font-semibold text-[12px]">
						Destination Details:
					</p>
				</div>
				<div className="mt-[10px]">
					<div className="flex items-center mb-2 last:mb-0">
						<p className="w-[150px] text-fs-light-gray text-[13px]">
							Transaction Fee:
						</p>
						<p className="flex-1 text-fs-deep-black text-[13px]">
							N100.00
						</p>
					</div>
					<div className="flex items-center mb-2 last:mb-0">
						<p className="w-[150px] text-fs-light-gray text-[13px]">
							Total:
						</p>
						<p className="flex-1 text-fs-deep-black text-[13px]">
							N{addCommas((+values.amount + 100).toFixed(2))}
						</p>
					</div>
				</div>
			</div>

			<div className="mt-6">
				<Button
					onClick={() => {
						setFieldValue("step", 3);
					}}
					label="Confirm and Send"
					width="w-full"
				/>
			</div>
		</div>
	);
};

export default Summary;
