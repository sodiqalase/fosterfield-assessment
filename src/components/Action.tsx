/* eslint-disable indent */
import React from "react";

import * as Popover from "@radix-ui/react-popover";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { classes } from "../utils/helpers";

export interface ActionOptionProps {
	name: React.ReactNode;
	action: () => void;
	disabled?: boolean;
	hide?: boolean;
}
interface Props {
	options?: ActionOptionProps[];
	button?: (
		arg: (event: React.BaseSyntheticEvent) => void
	) => React.ReactNode;
	position?: "right" | "left";
	offset?: number;
	className?: string;
	variant?: "vertical" | "horizontal";
	Component?: React.ReactNode;
	fillColor?: string;
}
export const Action = ({
	button,
	options,
	position = "right",
	offset = 10,
	variant = "vertical",
	Component,
	className,
	fillColor,
}: Props) => {
	const show = React.useState(false);

	const renderItem = () => {
		switch (true) {
			case variant === "vertical":
				return Component ? (
					Component
				) : (
					<svg width="25" height="24" viewBox="0 0 25 24" fill="none">
						<path
							d="M12.9541 8C14.0541 8 14.9541 7.1 14.9541 6C14.9541 4.9 14.0541 4 12.9541 4C11.8541 4 10.9541 4.9 10.9541 6C10.9541 7.1 11.8541 8 12.9541 8ZM12.9541 10C11.8541 10 10.9541 10.9 10.9541 12C10.9541 13.1 11.8541 14 12.9541 14C14.0541 14 14.9541 13.1 14.9541 12C14.9541 10.9 14.0541 10 12.9541 10ZM12.9541 16C11.8541 16 10.9541 16.9 10.9541 18C10.9541 19.1 11.8541 20 12.9541 20C14.0541 20 14.9541 19.1 14.9541 18C14.9541 16.9 14.0541 16 12.9541 16Z"
							fill={fillColor ? fillColor : "#C5C7CD"}
						/>
					</svg>
				);
			case variant === "horizontal":
				return (
					<svg
						width="16"
						height="4"
						viewBox="0 0 16 4"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1.74693 4C0.783567 4 0 3.10323 0 2C0 0.897358 0.783567 0 1.74693 0C2.71028 0 3.49385 0.89731 3.49385 2C3.49381 3.10323 2.71028 4 1.74693 4Z"
							fill="#9A9A9A"
						/>
						<path
							d="M7.90182 4C6.93846 4 6.15489 3.10323 6.15489 2C6.15489 0.897358 6.93846 0 7.90182 0C8.86501 0 9.64875 0.89731 9.64875 2C9.6487 3.10323 8.86501 4 7.90182 4Z"
							fill="#9A9A9A"
						/>
						<path
							d="M14.2531 4C13.2899 4 12.5061 3.10323 12.5061 2C12.5061 0.897358 13.2898 0 14.2531 0C15.2163 0 16 0.89731 16 2C16 3.10323 15.2163 4 14.2531 4Z"
							fill="#9A9A9A"
						/>
					</svg>
				);
			default:
				return null;
		}
	};

	return (
		<div className="flex-shrink-0">
			{options && (
				<Popover.Root open={show[0]} onOpenChange={show[1]}>
					<Popover.Trigger>{renderItem()}</Popover.Trigger>
					<Popover.Content
						sideOffset={offset}
						align={position === "right" ? "end" : "start"}
					>
						<div className="bg-white rounded-md shadow  py-1.5 flex flex-col min-w-[10rem]">
							{options
								.filter((option) => !option.hide)
								.map((option, index) => (
									<button
										key={"Action-" + index}
										disabled={option.disabled}
										className={classes([
											"text-left pl-4 pr-10 py-1.5 text-sm",
											"min-w-[8rem] inline-block font-MT-medium",
											"hover:bg-gray-50",
											option.disabled &&
												"opacity-50 cursor-not-allowed text-kGrey",
											typeof option.name === "string"
												? option.name
														.toLowerCase()
														.includes("delete")
													? "text-red-500"
													: option.name
															.toLowerCase()
															.includes("edit")
													? "text-yellow-500"
													: option.name
															.toLowerCase()
															.includes("view")
													? "text-N-purple"
													: ""
												: "",
										])}
										onClick={() => {
											if (
												option !== undefined &&
												option.action
											) {
												option.action();
											}
											show[1](false);
										}}
									>
										{option.name}
									</button>
								))}
						</div>
					</Popover.Content>
				</Popover.Root>
			)}
		</div>
	);
};

export default Action;

export const ActionButton = (props: Props) => {
	return (
		<Action
			{...{
				...props,
				offset: 0,
				Component: (
					<button className="font-light min-h-[37px] !px-5 text-k-red">
						<span className="text-sm">Actions</span>
						<ChevronDownIcon className="ml-3 h-5 w-5 text-k-red border border-k-red rounded-full p-0.5" />
					</button>
				),
			}}
		/>
	);
};
export const SecondaryActionButton = (props: Props) => {
	return (
		<Action
			{...{
				...props,
				offset: 0,
				Component: (
					<button className="font-light min-h-[37px] !px-5 bg-gray-100 text-gray-500">
						<span className="text-sm">Default</span>
						<ChevronDownIcon className="ml-3 h-5 w-5 text-gray-500 rounded-full p-0.5" />
					</button>
				),
			}}
		/>
	);
};
