import React from "react";
import Button from "../../../components/buttons/Button";
import Checkbox from "../../../components/form-inputs/Checkbox";
import { Link } from "react-router-dom";
import TextInput from "../../../components/form-inputs/TextInput";
import { useFormik } from "formik";
import { Asserts, object, string, boolean } from "yup";
import { evaluateFormikError, removeNonNumeric } from "../../../utils/helpers";
import { register } from "../../../services/sign-up";
import toast from "react-hot-toast";

const formSchema = object({
	business_name: string().required().trim().label("Business Name"),
	first_name: string().required().trim().label("First Name"),
	password: string()
		.required()
		.trim()
		.matches(
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
			"Password must contain at least one uppercase letter, one number, and one special character (@$!%*#?&), and must be at least 8 characters long."
		)
		.label("Password"),
	last_name: string().required().trim().label("Last Name"),
	email: string().email().required().trim().label("Email"),
	consent: boolean()
		.required("Consent is required")
		.oneOf([true], "Please agree to continue."),
	phone_number: string()
		.matches(/[0-9]{11,}$/, {
			message: "Invalid Phone number'",
		})
		.trim()
		.required()
		.label("Phone number"),
}).required();

const Register = (props: { setStep: (value: number) => void }) => {
	const form = useFormik<Asserts<typeof formSchema>>({
		enableReinitialize: true,
		validateOnMount: true,
		initialValues: {
			business_name: "",
			first_name: "",
			last_name: "",
			email: "",
			phone_number: "",
			password: "",
			consent: false,
		},
		validationSchema: formSchema,
		onSubmit: async (values) => {
			try {
				await register({
					first_name: values.first_name,
					last_name: values.last_name,
					phone_number: values.phone_number,
					email: values.email,
					password: values.password,
					name: values.business_name,
				});

				props.setStep(2);
			} catch (error: any) {
				console.log(error, "error");
				toast.error(
					"Error completing your registration. Please try again or contact support."
				);
			}
		},
	});

	const {
		values,
		isSubmitting,
		getFieldProps,
		setFieldValue,
		handleSubmit,
		errors,
		touched,
		isValid,
	} = form;

	// console.log(errors, "errors");

	return (
		<form onSubmit={handleSubmit} className="flex flex-col items-center">
			<h5 className="text-[22px] w-full text-left text-fs-deep-black font-medium">
				Register your account
			</h5>

			<div className="mt-[37px] mb-10 w-full">
				<TextInput
					{...getFieldProps("business_name")}
					error={evaluateFormikError(
						errors,
						touched,
						"business_name"
					)}
					label="Business Name"
					placeholder="Enter business name"
				/>
				<div className="mt-8 grid grid-cols-2 gap-5">
					<TextInput
						{...getFieldProps("first_name")}
						error={evaluateFormikError(
							errors,
							touched,
							"first_name"
						)}
						label="First Name"
						placeholder="Enter first name"
					/>
					<TextInput
						{...getFieldProps("last_name")}
						error={evaluateFormikError(
							errors,
							touched,
							"last_name"
						)}
						label="Last Name"
						placeholder="Enter last name"
					/>
				</div>
				<div className="mt-8 ">
					<TextInput
						type="email"
						{...getFieldProps("email")}
						error={evaluateFormikError(errors, touched, "email")}
						label="Email"
						placeholder="Enter email"
					/>
				</div>
				<div className="mt-8 ">
					<TextInput
						{...getFieldProps("phone_number")}
						error={evaluateFormikError(
							errors,
							touched,
							"phone_number"
						)}
						type="tel"
						onChange={(e) => {
							setFieldValue(
								"phone_number",
								removeNonNumeric(e.target.value)
							);
						}}
						label="Phone Number"
						placeholder="Enter phone number"
					/>
				</div>
				<div className="mt-8 ">
					<TextInput
						type="password"
						{...getFieldProps("password")}
						error={evaluateFormikError(errors, touched, "password")}
						label="Create Password"
						placeholder="Enter password"
					/>
				</div>
				<div className="mt-8 flex items-center ">
					<Checkbox
						name="consent"
						onChange={() => {
							setFieldValue("consent", !values.consent);
						}}
						checked={values.consent}
					/>
					<p className="text-[10px] ml-[10px] text-fs-deep-black">
						I consent to the collection and processing of my
						personal data in line with the data regulations as
						described in Persent’s{" "}
						<span className="font-semibold">Privacy Policy</span>
					</p>
				</div>
			</div>
			<Button
				loading={isSubmitting}
				disabled={!isValid || isSubmitting}
				label="Sign Up"
				width="w-[307px]"
			/>
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
		</form>
	);
};

export default Register;
