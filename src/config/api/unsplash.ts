import axios from "axios";
import { unspashApiUrl } from "../envs";
import { interceptErrorResponse } from "./interceptors";

export const unspashApi = axios.create({
  baseURL: unspashApiUrl,
});

unspashApi.interceptors.response.use(
  (response) => response,
  interceptErrorResponse
);
