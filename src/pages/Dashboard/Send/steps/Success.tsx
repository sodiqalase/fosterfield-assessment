import Button from "../../../../components/buttons/Button";
import { useFormikContext, FormikProps } from "formik";
import { ISend } from "../../../../interfaces/send";
import { addCommas } from "../../../../utils/helpers";

const Success = () => {
	const { values, resetForm }: FormikProps<ISend> = useFormikContext();
	return (
		<div className="w-[461px] flex flex-col items-center">
			<h5 className="text-fs-deep-black text-[24px] font-semibold">
				Transfer Successful
			</h5>
			<div className="w-full mt-[64px] flex flex-col items-center rounded-[13px] bg-fs-deep-black px-[50px] py-8">
				<div className="w-[58px] relative h-[58px]">
					<img
						src="/icons/star.svg"
						className="block h-full w-full"
						alt=""
					/>
					<div className="w-[58px] h-[58px] flex items-center justify-center absolute top-0 left-0 bottom-0 right-0 z-[2]">
						<img
							src="/icons/check.svg"
							className="block w-[22px]"
							alt=""
						/>
					</div>
				</div>
				<h6 className="text-white mt-6 text-[18px]">
					Congratulations your transfer is succesful
				</h6>
				<p className="mt-[10px] font-semibold text-[12px] text-opacity-70 text-white">
					Below is transfer summary
				</p>

				<div className="mt-5 border p-[18px] border-dashed w-full border-white rounded-[13px]">
					<div className="flex justify-between mb-5 items-center ">
						<div>
							<p className="text-white text-[10px] font-semibold mb-1">
								Withdrawal Amount
							</p>
							<p className="text-white text-[13px]">
								N{addCommas(values.amount)}
							</p>
						</div>
						<div className="w-[100px]">
							<p className="text-white text-[10px] font-semibold mb-1">
								Name
							</p>
							<p className="text-white text-[13px]">
								{values.account_name}
							</p>
						</div>
					</div>
					<div className="flex justify-between items-center ">
						<div>
							<p className="text-white text-[10px] font-semibold mb-1">
								Account Number
							</p>
							<p className="text-white text-[13px]">
								{values.account_number}
							</p>
						</div>
						<div className="w-[100px]">
							<p className="text-white text-[10px] font-semibold mb-1">
								Destination Bank
							</p>
							<p className="text-white text-[13px]">
								{values.destination_bank}
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-12">
				<Button
					onClick={() => {
						resetForm();
					}}
					label="Done"
					width="w-[151px]"
				/>
			</div>
		</div>
	);
};

export default Success;
