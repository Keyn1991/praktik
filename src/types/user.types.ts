export enum EGenders {
  male = "male",
  famale = "famale",
  mixed = "mixed",
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  gender: string;
}
