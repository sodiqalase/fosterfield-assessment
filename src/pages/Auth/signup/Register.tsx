import React from "react";
import Button from "../../../components/buttons/Button";
import Checkbox from "../../../components/form-inputs/Checkbox";
import { Link } from "react-router-dom";
import TextInput from "../../../components/form-inputs/TextInput";

const Register = () => {
	return (
		<section className="flex flex-col items-center">
			<h5 className="text-[22px] w-full text-left text-fs-deep-black font-medium">
				Register your account
			</h5>

			<div className="mt-[37px] mb-10 w-full">
				<TextInput
					name="business_name"
					label="Business Name"
					placeholder="Enter business name"
				/>
				<div className="mt-8 grid grid-cols-2 gap-5">
					<TextInput
						name="firstName"
						label="First Name"
						placeholder="Enter first name"
					/>
					<TextInput
						name="lastName"
						label="Last Name"
						placeholder="Enter last name"
					/>
				</div>
				<div className="mt-8 ">
					<TextInput
						name="email"
						label="Email"
						placeholder="Enter email"
					/>
				</div>
				<div className="mt-8 ">
					<TextInput
						name="phone"
						label="Phone Number"
						placeholder="Enter phone number"
					/>
				</div>
				<div className="mt-8 ">
					<TextInput
						name="password"
						label="Create Password"
						placeholder="Enter password"
					/>
				</div>
				<div className="mt-8 flex items-center ">
					<Checkbox
						name="remember"
						onChange={() => {}}
						checked={true}
					/>
					<p className="text-[10px] ml-[10px] text-fs-deep-black">
						I consent to the collection and processing of my
						personal data in line with the data regulations as
						described in Persent’s{" "}
						<span className="font-semibold">Privacy Policy</span>
					</p>
				</div>
			</div>
			<Button label="Sign Up" width="w-[307px]" />
			<p className="text-[10px] mt-5 text-fs-deep-black">
				By clicking the “Sign up” button, you agree to Persent’s
				<span className="font-semibold">Terms.</span>
			</p>
			<p className="mt-5 text-[16px] text-fs-light-gray">
				Already a user?{"  "}
				<Link to="/" className="text-fs-light-black underline">
					Login
				</Link>
			</p>
		</section>
	);
};

export default Register;
