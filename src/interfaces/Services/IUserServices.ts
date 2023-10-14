interface IUserServices extends IServices<IUser> {
    getByEmail(email: string): Promise<IUser | null>;
    auth(login: IUserLogin): Promise<IUser | null>;
}