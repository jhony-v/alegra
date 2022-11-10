import Logger, { LOGGER_ERROR } from "@/core/lib/logger";
import axios from "axios";
import { encode } from "js-base64";
import {
  alegraApiUrl,
  ALEGRA_EMAIL,
  ALEGRA_TOKEN,
  googleImageApiUrl,
} from "./environments";

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

export const googleImagesApi = axios.create({
  baseURL: googleImageApiUrl,
});

googleImagesApi.interceptors.response.use(
  (response) => response,
  interceptErrorResponse
);

function interceptErrorResponse<T>(error: T) {
  Logger.error(LOGGER_ERROR.NETWORK_ERROR, error);
  return Promise.reject(error);
}
