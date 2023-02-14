import React from "react";

const Stepper = (props: { step: 1 | 2 | 3 | 4 }) => {
	const steps = React.useState([1, 2, 3]);
	const labels = React.useState(["Recipient", "Summary", "Transaction Pin"]);

	return (
		<div className="w-[600px] flex items-center">
			{steps[0].map((val) => {
				return (
					<>
						{val > 1 && (
							<span
								className={`h-[2px] ${
									props.step >= val
										? "bg-fs-primary-blue"
										: "bg-[#B1B4C3]"
								} flex-1`}
							></span>
						)}

						<span
							className={`w-7 h-7 ${
								props.step >= val
									? "border-fs-primary-blue"
									: "border-transparent"
							} rounded-full relative border flex justify-center items-center`}
						>
							<span
								className={`w-5 h-5 ${
									props.step >= val
										? "bg-fs-primary-blue"
										: "bg-[#B1B4C3]"
								} text-white rounded-full text-[12px] flex justify-center items-center`}
							>
								{val}
							</span>
							<p
								className={`absolute text-[12px] ${
									props.step >= val
										? "text-fs-primary-blue"
										: "text-[#B1B4C3]"
								} top-[30px] whitespace-nowrap left-[50%] transform translate-x-[-50%]`}
							>
								{labels[0][val - 1]}
							</p>
						</span>
					</>
				);
			})}
		</div>
	);
};

export default Stepper;
