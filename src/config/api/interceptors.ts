import Logger, { LOGGER_ERROR } from "@/core/lib/logger";

export function interceptErrorResponse<T>(error: T) {
  Logger.error(LOGGER_ERROR.NETWORK_ERROR, error);
  return Promise.reject(error);
}
