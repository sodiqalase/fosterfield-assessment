import axios, { AxiosRequestConfig } from "axios";
import { getToken, hasToken } from "../utils/helpers";

export const createApiClient = (contentType: string = "application/json") => {
	const config: AxiosRequestConfig = {
		baseURL: "http://ec2-34-238-76-176.compute-1.amazonaws.com/api/",
		headers: {
			"Content-Type": contentType,
			Accept: contentType,
		},
	};
	if (hasToken()) {
		config.headers!["Authorization"] = `Bearer ${getToken()}`;
	}

	const client = axios.create(config);

	client.interceptors.response.use(
		(res) => {
			return Promise.resolve(res);
		},
		(err) => {
			return Promise.reject(err);
		}
	);
	return client;
};
