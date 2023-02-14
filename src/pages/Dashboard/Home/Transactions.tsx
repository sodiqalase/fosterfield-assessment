import React from "react";
import Button from "../../../components/buttons/Button";
import { Status } from "../../../components/Status";
import Table from "../../../components/Table/Table";
import { Link } from "react-router-dom";
import QuickTransaction from "./QuickTransaction";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import useFetch from "../../../hooks/useFetch";
import { ITransactions } from "../../../interfaces/transactions";
import dayjs from "dayjs";
import { currencyFormat } from "../../../utils/helpers";

const Transactions = () => {
	useFetch({
		url: "user-wallet-transaction",
		key: "transactionSummary",
		params: null,
	});
	

	const transactionData: ITransactions[] = [
		{
			id: 1,
			wallet_id: 2,
			amount: "1000.00",
			fee: "20",
			type: "DEBIT",
			status: "SUCCESS",
			reference: "VEXZYE5B9QJBJHA",
			description: "for house",
			initiatedBy_id: 2,
			initiatedTo_id: 3,
			created_at: "2022-10-31T03:36:05.000000Z",
			updated_at: "2022-10-31T03:36:05.000000Z",
		},
		{
			id: 2,
			wallet_id: 2,
			amount: "1000.00",
			fee: "20",
			type: "DEBIT",
			status: "FAILED",
			reference: "VEXZYE5B9QJBJHA",
			description: "for house",
			initiatedBy_id: 2,
			initiatedTo_id: 3,
			created_at: "2022-10-31T03:36:05.000000Z",
			updated_at: "2022-10-31T03:36:05.000000Z",
		},
		{
			id: 3,
			wallet_id: 2,
			amount: "1000.00",
			fee: "20",
			type: "DEBIT",
			status: "PENDING",
			reference: "VEXZYE5B9QJBJHA",
			description: "for house",
			initiatedBy_id: 2,
			initiatedTo_id: 3,
			created_at: "2022-10-31T03:36:05.000000Z",
			updated_at: "2022-10-31T03:36:05.000000Z",
		},
		{
			id: 4,
			wallet_id: 2,
			amount: "1000.00",
			fee: "20",
			type: "DEBIT",
			status: "SUCCESS",
			reference: "VEXZYE5B9QJBJHA",
			description: "for house",
			initiatedBy_id: 2,
			initiatedTo_id: 3,
			created_at: "2022-10-31T03:36:05.000000Z",
			updated_at: "2022-10-31T03:36:05.000000Z",
		},
	];

	return (
		<section className="mt-[11px] mb-3 flex gap-5 ">
			<div className="flex-1 rounded-[6px] bg-white shadow p-5">
				<Table
					headerSlot={<ViewAll />}
					data={transactionData}
					label="Transactions"
					columns={[
						{
							header: "ID",
							view: (row) => row?.id,
						},
						{
							header: "Date",
							view: (row) =>
								dayjs(row.created_at).format(
									"MMM DD, YYYY hh:mm A"
								),
						},
						{
							header: "Amount",
							view: (row) => currencyFormat(row.amount),
						},
						{
							header: "Status",
							view: (row) => <Status text={row.status} />,
						},
					]}
				/>
			</div>
			<QuickTransaction />
		</section>
	);
};

export default Transactions;

function ViewAll() {
	return (
		<Link
			to="/dashboard/transactions"
			className="flex justify-center items-center bg-[#F5F5F5] text-fs-light-gray text-[11px] rounded-[6px] py-2 px-4"
		>
			View All
			<ChevronRightIcon className="ml-3 h-3 w-3 text-fs-light-gray" />
		</Link>
	);
}
