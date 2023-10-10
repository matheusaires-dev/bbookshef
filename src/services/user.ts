import axios from 'axios';

const API_URL = 'http://localhost:3001';

const UserService = {

    getUsers: async () => {
        const response = await axios.get(`${API_URL}/users`);
        return response.data;
    },

    createUser: async (user: IUser) => {
        const response = await axios.post(`${API_URL}/users`, user);
        return response.data;
    },

    updateUser: async (userId: string, user: IUser) => {
        const response = await axios.put(`${API_URL}/users/${userId}`, user);
        return response.data;
    },

    deleteUser: async (userId: string) => {
        const response = await axios.delete(`${API_URL}/users/${userId}`);
        return response.data;
    },
};

export default UserService;
