import React from "react";
import ReactSelect, { InputActionMeta, MultiValue } from "react-select";

interface SelectProps {
	label?: string;
	options?: Array<{ label: string; value: string | number } | string>;
	required?: boolean;
	value?: string | number | Array<string | number>;
	onChange?: (value: string | number | string[]) => void;
	placeholder?: string;
	className?: string;
	readonly?: boolean;
	isLoading?: boolean;
	showLabel?: boolean;

	name?: string;

	onInputChange?: (newValue: string, actionMeta: InputActionMeta) => void;
	onFocus?: () => void;
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
	DropDownIndicator?: React.FC;
	isMulti?: boolean;
	error?: string;
}

export const SelectInput = ({
	label = "",
	options = [],
	showLabel = true,
	value,
	onChange,
	className,
	readonly = false,
	error = "",
	isMulti = false,
	...props
}: SelectProps) => {
	const selectOptions = options.map((opt) => ({
		label: typeof opt === "string" ? opt : opt.label,
		value: typeof opt === "string" ? opt : opt.value,
	}));

	return (
		<div className="relative w-full">
			{showLabel && (
				<label className="block text-[14px] text-fs-light-black mb-4">
					{label}
				</label>
			)}

			<div>
				<ReactSelect
					onInputChange={props.onInputChange}
					onFocus={(e) => {
						props.onFocus?.();
					}}
					onBlur={(e) => {
						props.onBlur?.(e);
					}}
					isLoading={props.isLoading}
					isDisabled={readonly}
					isMulti={isMulti}
					options={selectOptions}
					placeholder={props.placeholder ?? ""}
					value={
						!value
							? null
							: isMulti && Array.isArray(value)
							? selectOptions.filter((v) =>
									value?.includes(v.value)
							  )
							: selectOptions.find((v) => v.value === value)
					}
					onChange={(values) => {
						if (values && !isMulti) {
							onChange?.(
								(values as { label: string; value: string })
									.value
							);
						} else if (
							values &&
							isMulti &&
							typeof value === "object"
						) {
							const result = (
								values as { label: string; value: string }[]
							)?.map((val) => val.value);
							onChange?.(result);
						}
					}}
					components={{
						IndicatorSeparator: () => null,
						...(props.DropDownIndicator
							? {
									DropdownIndicator:
										props.DropDownIndicator ?? undefined,
							  }
							: {}),
					}}
					styles={{
						option: (provided, state) => ({
							...provided,
							paddingTop: "10px",
							paddingBottom: "10px",
							backgroundColor: state.isSelected
								? "#93c5fd90"
								: "transparent",
							color: state.isSelected ? "white" : "#1B1B1B",
							":hover": {
								backgroundColor: "#93c5fd18",
								color: "black",
								cursor: "pointer",
							},
						}),
						menu: (provided, state) => ({
							...provided,
							top: "3.1rem",
							zIndex: "20",
						}),
						valueContainer: (provided, state) => ({
							...provided,
							height: "48px",
							width: "100%",
							borderRadius: "5px",
							minWidth: "300",
							paddingLeft: "14px",
						}),
						control: (provided, state) => ({
							...provided,
							height: "100%",
							borderRadius: "5px",
							boxShadow: "none",
							border: "1px solid #E7E7E7",
							backgroundColor: "transparent",

							"&:hover": {
								border: "1px solid  #93c5fd",
							},
						}),
						container: (provided, state) => ({
							...provided,
							height: "100%",
						}),

						dropdownIndicator: (provided, state) => ({
							...provided,
							rotate: "0deg",
						}),
					}}
				/>
			</div>
			{error && (
				<div className="text-red-400 font-MT-semibold mt-1 text-[12px]">
					{error}
				</div>
			)}
		</div>
	);
};
