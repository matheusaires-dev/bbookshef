interface IUserServices extends IServices<IUser> {
    auth(login: IUserLogin): Promise<IResponseDefault>;
}