import React from "react";
import Button from "../../../../components/buttons/Button";
import { SelectInput } from "../../../../components/form-inputs/SelectInput";
import TextArea from "../../../../components/form-inputs/TextArea";
import TextInput from "../../../../components/form-inputs/TextInput";
import { useFormikContext, FormikProps } from "formik";
import { ISend } from "../../../../interfaces/send";
import {
	addCommas,
	evaluateFormikError,
	removeNonNumeric,
	removeNonNumeric2,
} from "../../../../utils/helpers";

const Details = () => {
	const {
		values,
		isValid,
		setFieldValue,
		getFieldProps,
		errors,
		touched,
		setFieldTouched,
	}: FormikProps<ISend> = useFormikContext();
	return (
		<div className="w-[468px] rounded-[10px] px-6 py-10 bg-white border border-[#E7E7E7]">
			<h5 className="text-fs-deep-black font-semibold">Details</h5>
			<div className="mt-5 space-y-4">
				<SelectInput
					placeholder="Select account to debit"
					options={["Primary", "Secondary"]}
					label="From"
					value={values.from}
					onChange={(val) => {
						setFieldValue("from", val);
					}}
					onBlur={() => {
						setFieldTouched("from", true);
					}}
					error={evaluateFormikError(errors, touched, "from")}
				/>
				<TextInput
					required={false}
					placeholder="Enter Amount"
					label="Amount"
					{...getFieldProps("amount")}
					error={evaluateFormikError(errors, touched, "amount")}
					onChange={(e) => {
						setFieldValue(
							"amount",
							removeNonNumeric2(e.target.value)
						);
					}}
					value={addCommas(values.amount)}
				/>
				<TextInput
					required={false}
					placeholder="Enter destination bank"
					label="Destination Bank"
					{...getFieldProps("destination_bank")}
					error={evaluateFormikError(
						errors,
						touched,
						"destination_bank"
					)}
				/>

				<TextInput
					required={false}
					placeholder="Enter account Number"
					label="Account Number"
					{...getFieldProps("account_number")}
					error={evaluateFormikError(
						errors,
						touched,
						"account_number"
					)}
					onChange={(e) => {
						setFieldValue(
							"account_number",
							removeNonNumeric(e.target.value)
						);
					}}
				/>
				<TextInput
					required={false}
					placeholder="Enter account Name"
					label="Account Name"
					{...getFieldProps("account_name")}
					error={evaluateFormikError(errors, touched, "account_name")}
				/>
				<TextArea
					required={false}
					placeholder="Enter Description"
					label="Description"
					{...getFieldProps("description")}
					error={evaluateFormikError(errors, touched, "description")}
				/>
			</div>
			<div className="mt-6">
				<Button
					onClick={() => {
						setFieldValue("step", 2);
					}}
					disabled={!isValid}
					label="Proceed"
					width="w-full"
				/>
			</div>
		</div>
	);
};

export default Details;
