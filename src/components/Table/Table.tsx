import React from "react";
interface ITable<Trow> {
	headerSlot?: string | React.ReactNode;
	label: string;
	data?: Trow[] | [];
	columns: {
		header: string | React.ReactNode;
		view: (row: Trow, index: number) => React.ReactNode | string;
		textAlign?: "text-left" | "text-right" | "text-center";
		rowWidth?: string;
	}[];
}

function Table<Trow extends {}>(props: ITable<Trow>) {
	const { data = [], headerSlot = "", columns } = props;
	return (
		<section className="w-full">
			<div className="flex pb-5 border-b border-[#F0F0F7] items-center justify-between">
				<h6 className="text-[17px] text-fs-deep-black font-bold">
					{props.label}
				</h6>
				<span>{props.headerSlot}</span>
			</div>
			<table className="table w-full table-auto">
				<thead>
					<tr className="border-b border-[#F0F0F7]">
						{props.columns.map((col, index) => {
							return (
								<th
									key={`${col.header}${index}`}
									className={`first:pl-2 pl-0 py-[14px] text-[13px] text-fs-light-gray font-medium ${
										col?.textAlign
											? col.textAlign
											: "text-left"
									}`}
								>
									{col.header}
								</th>
							);
						})}
					</tr>
				</thead>
				<tbody>
					{data.length > 0 &&
						data.map((row, rowIndex) => {
							return (
								<tr
									key={`row${rowIndex}`}
									className="border-b last:border-transparent border-[#EDF2F7]"
								>
									{columns.map((col, colIndex) => {
										return (
											<td
												key={`col${colIndex}`}
												className={`py-5 ${
													col?.rowWidth
														? col.rowWidth
														: ""
												} first:pl-2 pl-0 text-[#23262F] font-light text-[14px]`}
											>
												{col.view(row, rowIndex)}
											</td>
										);
									})}
								</tr>
							);
						})}
				</tbody>
			</table>
		</section>
	);
}

export default Table;
