import React from "react";
import Button from "../../../components/buttons/Button";
import Checkbox from "../../../components/form-inputs/Checkbox";
import { Link } from "react-router-dom";
import TextInput from "../../../components/form-inputs/TextInput";

const Login = () => {
	return (
		<section className="flex flex-col items-center">
			<h5 className="text-[22px] text-fs-deep-black font-medium">
				Welcome Back!
			</h5>
			<p className="mt-[18px] text-[13px] text-fs-light-gray">
				Securely login into your Persent account
			</p>
			<div className="mt-[75px] mb-10 w-full">
				<TextInput
					name="email"
					label="Phone / Email address"
					placeholder="Enter phone or email"
				/>
				<div className="mt-8">
					<TextInput
						type="password"
						value="sodiq"
						name="password"
						label="Password"
						placeholder="Enter password"
					/>
				</div>
				<div className="mt-8 flex justify-between">
					<Checkbox
						name="remember"
						onChange={() => {}}
						label="Remember me"
						checked={true}
					/>
					<p className="text-[14px] font-medium text-fs-primary-blue">
						Forgot Password?
					</p>
				</div>
			</div>
			<Button label="Login" width="w-[380px]" />
			<p className="mt-5 text-[16px] font-medium text-fs-primary-blue">
				Don’t have an account?{" "}
				<Link to="/signup" className="text-fs-light-gray">
					Sign Up
				</Link>
			</p>
		</section>
	);
};

export default Login;
