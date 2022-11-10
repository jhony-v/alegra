import axios from "axios";
import { googleImageApiUrl } from "../envs";
import { interceptErrorResponse } from "./interceptors";

export const googleImagesApi = axios.create({
  baseURL: googleImageApiUrl,
});

googleImagesApi.interceptors.response.use(
  (response) => response,
  interceptErrorResponse
);
