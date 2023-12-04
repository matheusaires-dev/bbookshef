interface IUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
  favorites?: Array<string>;
  reading?: { bookId: string, pag: number }[];
}
