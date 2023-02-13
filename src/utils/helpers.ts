import { tokenName } from "./constants";

export const currencyFormat = (
	amount: string | number,
	currency: string = "NGN"
) =>
	Number(amount).toLocaleString("en-NG", {
		style: "currency",
		currency,
		minimumFractionDigits: 0,
	});

type Ifilters = Record<string, string | number | Array<string | number>>;

export const evaluateFormikError = (
	errors: any,
	touched: any,
	name: string
) => {
	if (touched?.[name] && errors?.[name]) {
		return errors[name];
	} else {
		return "";
	}
};

export const removeNonNumeric = (value: any) => {
	return value.toString().replace(/[^0-9]/g, "");
};

export const hasToken = () => {
	return localStorage.getItem(tokenName) ? true : false;
};

export const getToken = () => {
	return localStorage.getItem(tokenName);
};
export const setToken = (val: string) => {
	localStorage.setItem(tokenName, val);
};

export const clearToken = () => {
	localStorage.removeItem(tokenName);
};

export const clearStorage = () => {
	localStorage.clear();
};

export const classes = (classes: Array<string | undefined | null | boolean>) =>
	classes.filter((s) => typeof s === "string").join(" ");

export const evaluateStatusColors = (val: string) => {
	const verb = val.toLowerCase();

	switch (verb) {
		case "failed": {
			return "text-red-500 bg-red-100";
		}

		case "pending": {
			return "text-yellow-500 bg-yellow-100";
		}

		case "success": {
			return "text-green-500 bg-green-100";
		}

		default: {
			return "bg-tranparent";
		}
	}
};