import { ErrorAlert } from '../alerts/error.alert';

export class CustomException extends Error {
  constructor({ message }: { message: string }) {
    super(message);
    new ErrorAlert(message);
  }
}
