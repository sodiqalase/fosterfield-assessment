import Button from "../../../components/buttons/Button";
import Checkbox from "../../../components/form-inputs/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../../../components/form-inputs/TextInput";
import { useFormik } from "formik";
import { Asserts, object, string, boolean } from "yup";
import { login } from "../../../services/login";
import { toast } from "react-hot-toast";
import { evaluateFormikError, setToken } from "../../../utils/helpers";

const formSchema = object({
	password: string().required().trim().label("Password"),
	remember: boolean(),

	email: string().email().required().trim().label("Email"),
}).required();

const Login = () => {
	const navigate = useNavigate();
	const form = useFormik<Asserts<typeof formSchema>>({
		enableReinitialize: true,
		validateOnMount: true,
		initialValues: {
			email: "",

			remember: false,
			password: "",
		},
		validationSchema: formSchema,
		onSubmit: async (values) => {
			try {
				const response = await login({
					email: values.email,
					password: values.password,
				});
				setToken(response.data.token);
				navigate("/dashboard");
			} catch (error: any) {
				console.log(error, "error");
				toast.error(
					"Error login in. Please try again or contact support."
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

	return (
		<form onSubmit={handleSubmit} className="flex flex-col items-center">
			<h5 className="text-[22px] text-fs-deep-black font-medium">
				Welcome Back!
			</h5>
			<p className="mt-[18px] text-[13px] text-fs-light-gray">
				Securely login into your Persent account
			</p>
			<div className="mt-[75px] mb-10 w-full">
				<TextInput
					{...getFieldProps("email")}
					error={evaluateFormikError(errors, touched, "email")}
					label="Phone / Email address"
					placeholder="Enter phone or email"
				/>
				<div className="mt-8">
					<TextInput
						type="password"
						{...getFieldProps("password")}
						error={evaluateFormikError(errors, touched, "password")}
						label="Password"
						placeholder="Enter password"
					/>
				</div>
				<div className="mt-8 flex justify-between">
					<Checkbox
						name="remember"
						onChange={() => {
							setFieldValue("remember", !values.remember);
						}}
						checked={values.remember!}
						label="Remember me"
					/>
					<p className="text-[14px] font-medium text-fs-primary-blue">
						Forgot Password?
					</p>
				</div>
			</div>
			<Button
				loading={isSubmitting}
				disabled={!isValid || isSubmitting}
				label="Login"
				width="w-[380px]"
			/>
			<p className="mt-5 text-[16px] font-medium text-fs-primary-blue">
				Don’t have an account?{" "}
				<Link to="/signup" className="text-fs-light-gray">
					Sign Up
				</Link>
			</p>
		</form>
	);
};

export default Login;
