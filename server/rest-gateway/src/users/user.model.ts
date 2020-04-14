export interface IUser {
  id: number;
  username: string;
  password: string;
  birthdate: Date;
}

export interface IUserDto {
  username: string;
  password: string;
  birthdate?: Date;
}
