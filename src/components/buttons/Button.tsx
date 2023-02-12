import React from "react";

const Button = ({
	disabled = false,
	label,
	type = "submit",
	onClick = () => {},
	width = "w-auto",
	loading = false,
}: {
	disabled?: boolean;
	label: string;
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
			className={`flex items-center justify-center disabled:bg-opacity-50 disabled:cursor-not-allowed text-white bg-fs-primary-blue ${width} text-center font-semibold text-[18px] cursor-pointer  py-3 px-8 rounded-[8px]`}
		>
			{loading && (
				<img src="/icons/spinner.svg" className="w-5 mr-2" alt="" />
			)}
			{label}
		</button>
	);
};

export default Button;
