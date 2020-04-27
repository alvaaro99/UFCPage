import { IAxiosError } from './axios.error';
import { HttpStatus } from '@nestjs/common';

export class PasswordError implements IAxiosError {
  public status: number;
  public data: { message: string };
  constructor() {
    this.status = HttpStatus.UNAUTHORIZED;
    this.data = { message: 'Contraseña Incorrecta' };
  }
}
