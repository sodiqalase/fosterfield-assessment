import { createApiClient } from "./api-client";

export const login = async (body: { email: string; password: string }) => {
	const response = await createApiClient().post("login", body);
	return response.data;
};
