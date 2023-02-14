import React, { useState } from "react";

interface ITextInputProps
	extends React.InputHTMLAttributes<HTMLTextAreaElement> {
	min?: string | number | undefined;
	required?: boolean;
	value?: string;
	name: string;
	placeholder?: string;
	onClick?: (event: any) => void;
	onBlur?: (event: any) => void;
	onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	error?: string;
	label?: string;
	type?: "text" | "number" | "password" | "email" | "tel" | "date";
	inputBg?: string;
	rows?: number;
}

const TextArea = ({
	required = true,
	value = "",
	name,
	min = "",
	onChange = () => {},
	onClick = () => {},
	onBlur = () => {},
	error = "",
	label,
	type = "text",
	inputBg = "bg-transparent",

	placeholder = "",
	rows = 3,
	...props
}: ITextInputProps) => {
	const showPassword = useState(false);

	const togglePassword = () => {
		showPassword[1]((prev) => !prev);
	};

	return (
		<div className="w-full">
			{label?.trim() && (
				<label className="block text-[14px] text-fs-light-black mb-4">
					{label}{" "}
					{required && (
						<span className="text-fs-primary-blue text-[14px] ml-1">
							*
						</span>
					)}
				</label>
			)}
			<div
				className={`w-full relative items-center ${inputBg} border-[#E7E7E7] border-solid duration-700 flex transition rounded-[5px] border focus-within:border-blue-300`}
			>
				{type === "password" && (
					<img
						onClick={togglePassword}
						src="/icons/toggle-password.svg"
						className="w-[11px] top-[50%] transform translate-y-[-50%] cursor-pointer absolute right-4 z-[2]"
						alt=""
					/>
				)}
				<textarea
					className={`w-full h-full block transition p-[15px] bg-transparent border-none outline-none shadow-none text-[14px] font-normal text-fs-light-black placeholder:text-fs-light-gray placeholder-fs-light-gray`}
					rows={rows}
					onChange={onChange}
					required={required}
					onClick={onClick}
					id={name}
					onBlur={onBlur}
					name={name}
					value={value}
					placeholder={placeholder}
					{...props}
				></textarea>
			</div>

			{error && (
				<div className="text-red-400 font-MT-semibold mt-1 text-[12px]">
					{error}
				</div>
			)}
		</div>
	);
};

export default TextArea;
