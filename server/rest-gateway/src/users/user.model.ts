export interface IUser {
  id?: number;
  alias: string;
  password: string;
  birthdate: Date;
  email: string;
  gender: string;
  name: string;
  surname: string;
}

export interface IUserLogin {
  alias: string;
  password: string;
}

export interface IModifyUser {
  user: IUser;
  passwordToCheck: string;
}
