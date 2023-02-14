import { ITransactions } from "../../../interfaces/transactions";
import dayjs from "dayjs";
import Table from "../../../components/Table/Table";
import { currencyFormat } from "../../../utils/helpers";
import { Status } from "../../../components/Status";

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

const TransactionsPage = () => {
	return (
		<section className="p-5 mt-5 rounded-[6px] border border-[#F0F0F7] bg-white">
			<Table
				data={transactionData}
				label="Transactions"
				columns={[
					{
						header: "Reference",
						view: (row) => row.reference,
					},
					{
						header: "Transaction information",
						view: (row) => (
							<span>
								N 5,000.00{" "}
								<span className="text-fs-light-gray">
									from ******5707
								</span>
							</span>
						),
					},
					{
						header: "Currency",
						view: (row) => `NGN`,
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
						rowWidth: "w-[200px]",
					},
				]}
			/>
		</section>
	);
};

export default TransactionsPage;
