import axios from "axios";
import { encode } from "js-base64";
import { alegraApiUrl, ALEGRA_EMAIL, ALEGRA_TOKEN } from "../envs";
import { interceptErrorResponse } from "./interceptors";

const Authorization = encode(`${ALEGRA_EMAIL}:${ALEGRA_TOKEN}`, true);

export const alegraApi = axios.create({
  baseURL: alegraApiUrl,
  headers: {
    Authorization: `Basic ${Authorization}`,
  },
});

alegraApi.interceptors.response.use(
  (response) => response,
  interceptErrorResponse
);
