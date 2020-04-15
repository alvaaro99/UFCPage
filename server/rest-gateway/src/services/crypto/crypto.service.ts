import { Injectable } from '@nestjs/common';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class CryptoService {
  encrypt = (password: string) =>
    CryptoJS.AES.encrypt(password, 'secret-ufc').toString();

  decrypt = (passwordEncrypted: string) =>
    CryptoJS.AES.decrypt(passwordEncrypted, 'secret-ufc').toString(
      CryptoJS.enc.Utf8,
    );
}
