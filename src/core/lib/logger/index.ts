export enum LOGGER_ERROR {
  NETWORK_ERROR = "NETWORK_ERROR",
}

export default class Logger {
  static error<T>(error: LOGGER_ERROR, payload: T) {
    if (import.meta.env.DEV) {
      console.log(`%c${error}:`, "color:white;background:red;font-size:15px");
      let parsed;
      if (typeof payload === "object") {
        parsed = JSON.stringify(payload, null, 2);
      } else {
        parsed = payload;
      }
      console.log(`%c${parsed}`, "color:red");
    }
  }
}
