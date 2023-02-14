import React from "react";
import { ChevronRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Stepper from "../../../components/Stepper";
import { FormikProvider, useFormik } from "formik";

import { Asserts, object, string, boolean, number } from "yup";
import Details from "./steps/Details";
import Summary from "./steps/Summary";
import TransactionPin from "./steps/TransactionPin";
import Success from "./steps/Success";

type IStep = 1 | 2 | 3 | 4;

const formSchema = object({
	step: number(),
	from: string().required().trim().label("Wallet"),
	amount: string().required().trim().label("Amount"),
	destination_bank: string().required().trim().label("Bank"),
	account_name: string().required().trim().label("Account Name"),
	description: string().required().trim().label("Description"),
	account_number: string()
		.required()
		.trim()
		.matches(/[0-9]{10,}$/, {
			message: "Invalid Account Number'",
		})
		.label("Account Number"),
});

const Send = () => {
	const form = useFormik<Asserts<typeof formSchema>>({
		enableReinitialize: true,
		validateOnMount: true,
		initialValues: {
			step: 1,
			from: "",
			amount: "",
			destination_bank: "",
			account_number: "",
			account_name: "",
			description: "",
		},
		validationSchema: formSchema,
		onSubmit: async (values) => {},
	});

	const { values } = form;
	const reduceStep = () => {
		form.setFieldValue("step", values.step! - 1);
	};

	return (
		<section>
			<div className="flex items-center gap-1">
				<p className="text-[12px] font-semibold text-fs-deep-black">
					Send
				</p>
				<ChevronRightIcon className="h-3 w-3 font-semibold text-fs-light-gray" />
				<p className="text-[12px] font-semibold text-fs-light-gray">
					Local
				</p>
			</div>

			<div className="mt-[30px] h-6 pl-3">
				{values.step! > 1 && values.step! < 4 && (
					<ArrowLeftIcon
						onClick={reduceStep}
						className="h-5 w-5 font-semibold cursor-pointer text-fs-deep-black"
					/>
				)}
			</div>

			<div
				className={`${
					values.step === 4 ? "mt-[0px]" : "mt-[120px]"
				} flex flex-col items-center`}
			>
				{values.step! <= 3 && <Stepper step={values.step! as IStep} />}
				<div className={`${"mt-[50px]"}`}>
					<FormikProvider value={form}>
						{values.step === 1 && <Details />}
						{values.step === 2 && <Summary />}
						{values.step === 3 && <TransactionPin />}
						{values.step === 4 && <Success />}
					</FormikProvider>
				</div>
			</div>
		</section>
	);
};

export default Send;
