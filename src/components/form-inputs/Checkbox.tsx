interface ICheckBox {
	checked: boolean;
	label?: string;
	error?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: any;
	name: string;
}

const Checkbox = ({
	checked,
	onChange,
	label = "",
	error = "",
	name,
	onBlur = () => {},
}: ICheckBox) => {
	return (
		<div className="">
			<div className="flex cursor-pointer items-center">
				<div className="h-[20px] cursor-pointer w-[20px] flex justify-center items-center border border-[#EAEAEB] border-solid relative rounded-[5px] bg-[#FAFBFD] border-klooft-black">
					<input
						id={name}
						type="checkbox"
						onChange={onChange}
						className="w-full cursor-pointer opacity-0 h-full absolute z-[3]"
						onBlur={onBlur}
						name={name}
					/>
					<img
						src="/icons/checkmark.svg"
						className={`w-3 ${checked ? "" : "opacity-0"}`}
						alt=""
					/>
				</div>
				{label?.trim() && (
					<label
						htmlFor={name}
						className="ml-[14px] text-[13px] font-medium text-fs-light-gray cursor-pointer"
					>
						{label}
					</label>
				)}
			</div>
			{error && (
				<div className="text-klooft-red mt-1 text-[12px]">{error}</div>
			)}
		</div>
	);
};

export default Checkbox;
