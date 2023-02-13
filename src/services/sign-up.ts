import { createApiClient } from "./api-client";
import { IRegistrationPayload } from "../interfaces/sign-in";

export const register = async (body: IRegistrationPayload) => {
	const response = await createApiClient().post("register", body);
	return response.data;
};
export const setPin = async (body: { pin: string }) => {
	const response = await createApiClient().patch("users/set-pin", body);
	return response.data;
};
