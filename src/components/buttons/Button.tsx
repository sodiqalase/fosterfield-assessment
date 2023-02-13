import React from "react";

const Button = ({
	disabled = false,
	label,
	font = "font-semibold",
	type = "submit",
	onClick = () => {},
	width = "w-auto",
	loading = false,
}: {
	disabled?: boolean;
	label: string;
	font?: string;
	type?: "submit" | "button" | "reset";
	width?: string;

	loading?: boolean;

	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
	return (
		<button
			disabled={disabled}
			type={type}
			onClick={onClick}
			className={`flex text-[14px] items-center justify-center disabled:bg-opacity-50 disabled:cursor-not-allowed text-white bg-fs-primary-blue ${width} text-center ${font} text-[18px] cursor-pointer py-3 rounded-[8px]`}
		>
			{loading && (
				<img src="/icons/spinner.svg" className="w-5 mr-2" alt="" />
			)}
			{label}
		</button>
	);
};

export default Button;
