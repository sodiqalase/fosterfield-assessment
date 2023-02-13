import React, { useState } from "react";
import CreatePin from "./CreatePin";
import Register from "./Register";

const Signup = () => {
	const step = useState(1);

	const setStep = (val: number) => {
		step[1](val);
	};
	return (
		<section>
			{step[0] === 1 && <Register setStep={setStep} />}
			{step[0] === 2 && <CreatePin />}
		</section>
	);
};

export default Signup;
