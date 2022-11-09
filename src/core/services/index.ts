import * as images from "./images";
import * as seller from "./seller";
import * as invoice from "./invoice";
import * as product from "./product";

const services = {
  images,
  seller,
  invoice,
  product,
};

export type Services = Required<typeof services>;
export default services;
