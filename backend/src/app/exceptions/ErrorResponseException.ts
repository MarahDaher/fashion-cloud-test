import HttpException from "./HttpException";

class ErrorResponseException extends HttpException {
  constructor(error: string) {
    super(404, error);
  }
}

export default ErrorResponseException;
