import useFetch from "../../../hooks/useFetch";

const Balance = () => {
	const { data } = useFetch({
		url: "user-wallet-transaction",
		key: "transactionSummary",
		params: null,
	});

	const availableBalance = data?.data?.data?.wallet?.[0]?.balance ?? "0.00";
	const ledgerBalance =
		data?.data?.data?.wallet?.[0]?.ledger_balance ?? "0.00";
	const currency = data?.data?.data?.wallet?.[0]?.currency ?? "NGN";

	return (
		<section className="flex rounded-[6px] shadow bg-white">
			<div className="p-5 rounded-[6px] w-[220px] bg-black">
				<div className="flex justify-between items-center">
					<div className="flex items-center">
						<img src="/icons/flag.svg" className="w-8" alt="" />
						<p className="text-[11px] ml-[6px] text-white">NGN</p>
					</div>
					<p className="text-[11px] text-white">Available Balance</p>
				</div>
				<p className="mt-5 text-white font-bold text-[20px]">
					{availableBalance} {currency}
				</p>
				<p className="mt-[6px] text-white text-[11px]">
					N{ledgerBalance}
				</p>
			</div>
			<div className="p-5 rounded-[6px] border border-slate-100 w-[220px] bg-white">
				<p className="text-[11px] ">Savings</p>

				<p className="mt-5  font-bold text-[20px]">0.00 NGN</p>
				<p className="mt-[6px]  text-[11px]">N80.00</p>
			</div>
		</section>
	);
};

export default Balance;
