import axios, { AxiosResponse } from 'axios';

const API_URL = 'http://localhost:3000';

const path = '/users';

const UserServices:IUserServices = {
    getAll: function (): Promise<IUser[]> {
        throw new Error('Function not implemented.');
    },
    getOne: function (id: string): Promise<IUser | null> {
        throw new Error('Function not implemented.');
    },
    create: async function (data: IUser): Promise<IResponseDefault> {
        const response: AxiosResponse<IResponseDefault> = await axios.post(API_URL+path, data);
        return response.data;
    },
    update: async function (id: string, data: IUser): Promise<IResponseDefault> {
        const response: AxiosResponse<IResponseDefault> = await axios.put(API_URL+path+`/${id}`, data);
        return response.data;
    },
    partialUpdate: function (id: string, partialData: Partial<IUser>): Promise<void> {
        throw new Error('Function not implemented.');
    },
    delete: function (id: string): Promise<void> {
        throw new Error('Function not implemented.');
    },
    auth: async function (login: IUserLogin): Promise<IResponseDefault> {
        const response: AxiosResponse<IResponseDefault> = await axios.post(API_URL+'/login', login);
        return response.data;
    }
};

export default UserServices;
