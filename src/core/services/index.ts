import * as images from "./images";
import * as seller from "./seller";
import * as invoice from "./invoice";
import * as product from "./product";
import * as customer from "./customer";

const services = {
  images,
  seller,
  invoice,
  product,
  customer,
};

export type Services = Required<typeof services>;
export default services;
