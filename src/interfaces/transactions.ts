export interface ITransactions {
	id: number;
	wallet_id: number;
	amount: string;
	fee: string;
	type: string;
	status: string;
	reference: string;
	description: string;
	initiatedBy_id: number;
	initiatedTo_id: number;
	created_at: string;
	updated_at: string;
}
