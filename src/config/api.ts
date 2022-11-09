import axios from "axios";
import { encode } from "js-base64";
import {
  alegraApiUrl,
  ALEGRA_EMAIL,
  ALEGRA_TOKEN,
  googleImageApiUrl,
} from "./constants";

const Authorization = encode(`${ALEGRA_EMAIL}:${ALEGRA_TOKEN}`, true);

export const alegraApi = axios.create({
  baseURL: alegraApiUrl,
  headers: {
    Authorization: `Basic ${Authorization}`,
  },
});

export const googleImagesApi = axios.create({
  baseURL: googleImageApiUrl,
});
