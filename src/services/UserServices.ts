import axios from 'axios';

const API_URL = 'http://localhost:3001';

const UserServices:IUserServices = {
    getByEmail: function (email: string): Promise<IUser | null> {
        throw new Error('Function not implemented.');
    },
    auth: function (login: IUserLogin): Promise<IUser | null> {
        throw new Error('Function not implemented.');
    },
    getAll: function (): Promise<IUser[]> {
        throw new Error('Function not implemented.');
    },
    getOne: function (id: string): Promise<IUser | null> {
        throw new Error('Function not implemented.');
    },
    create: function (data: IUser): Promise<void> {
        throw new Error('Function not implemented.');
    },
    update: function (id: string, data: IUser): Promise<void> {
        throw new Error('Function not implemented.');
    },
    partialUpdate: function (id: string, partialData: Partial<IUser>): Promise<void> {
        throw new Error('Function not implemented.');
    },
    delete: function (id: string): Promise<void> {
        throw new Error('Function not implemented.');
    }
};

export default UserServices;
