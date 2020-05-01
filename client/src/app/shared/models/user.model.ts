export interface ILoginUser {
  alias: string;
  password: string;
}

export interface IUser {
  alias: string;
  password: string;
  birthdate: Date;
  name: string;
  surname: string;
  gender: string;
  email: string;
}
