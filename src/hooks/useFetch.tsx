/* eslint-disable indent */
import { useQuery } from "react-query";
import { createApiClient } from "../services/api-client";

interface IUseFetch {
	key: string;
	url: string;

	params: Record<string, string | number | null | undefined> | null;
	windowFocus?: boolean;
	onSuccess?: (data: any) => void;
}
const axios = createApiClient();

function useFetch(input: IUseFetch) {
	const callApi = async ({ queryKey }: { queryKey: any }) => {
		const [_key, params] = queryKey;

		if (params) {
			const { id, ...rest } = params;

			const urlToUse = id ? `${input.url}/${id}` : `${input.url}`;

			const response = await axios.get(urlToUse, {
				params: Object.keys(rest).length > 0 ? { ...rest } : {},
			});
			return response;
		} else {
			const response = await axios.get(input.url);
			return response;
		}
	};

	const data = useQuery(
		input.params ? [input.key, input.params] : [input.key],
		callApi,
		{
			refetchOnWindowFocus: input?.windowFocus ?? false,
			onSuccess: input?.onSuccess
				? input.onSuccess
				: () => {
						return false;
				  },
		}
	);

	return data;
}

export default useFetch;
