import CustomApiError from "./custom-api.js";
import { StatusCodes } from "http-status-codes";

class NotFoundError extends CustomApiError {
  constructor(message) {
    super(message);
    this.StatusCodes = StatusCodes.NOT_FOUND;
  }
}
export default NotFoundError;
