const API_URL = "http://localhost:3333";

export interface ApiQueryParams {
	[key: string]: string | number | boolean;
}

export interface RequestOptions {
	page?: number;
	_limit?: number;
	rating_like?: string;
}

export const defaultRequestOptions = {
	page: 1,
	_limit: 10,
};

export async function apiRequest(endPoint: string, query: ApiQueryParams = {}, options: RequestOptions = {}) {
	try {
		const response = await fetch(`${API_URL}/${endPoint}`);
		// const data = await (await response).json();
		const data = response.json;
		return data;
	} catch (error) {
		console.log(error);
	}
}
