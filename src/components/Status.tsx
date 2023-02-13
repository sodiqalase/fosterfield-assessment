import { useEffect } from "react";
import { evaluateStatusColors } from "../utils/helpers";

export const Status = ({ text }: { text: string }) => {
	return (
		<span
			className={`rounded-[7px] ${evaluateStatusColors(
				text
			)} px-4 py-1 text-[13px] inline-block whitespace-nowrap`}
		>
			{text}
		</span>
	);
};
