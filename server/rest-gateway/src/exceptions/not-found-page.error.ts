import { IAxiosError } from './axios.error';

export class NotFoundError implements IAxiosError {
  public status: number;
  public data: { message: string };
  constructor() {
    this.status = 404;
    this.data = { message: 'Url no encontrada' };
  }
}
