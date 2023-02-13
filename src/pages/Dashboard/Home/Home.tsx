import React from 'react'
import Balance from "./Balance";
import Statistics from "./Statistics";
import Transactions from "./Transactions";

const Home = () => {
  return (
		<section>
			<Balance />
			<Statistics />
			<Transactions />
		</section>
  );
}

export default Home