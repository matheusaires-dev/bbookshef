import axios from 'axios';

const API_URL = 'http://localhost:3001';

const BookService = {
    getBooks: async () => {
        const response = await axios.get(`${API_URL}/books`);
        return response.data;
    },

    createBook: async (book: IDataBook) => {
        const response = await axios.post(`${API_URL}/books`, book);
        return response.data;
    },

    updateBook: async (bookId: string, updatedBook: IDataBook) => {
        const response = await axios.put(`${API_URL}/books/${bookId}`, updatedBook);
        return response.data;
    },

    partialUpdateBook: async (bookId: string, partialBookData: IDataBook) => {
        const response = await axios.patch(`${API_URL}/books/${bookId}`, partialBookData);
        return response.data;
    },

    deleteBook: async (bookId: string) => {
        const response = await axios.delete(`${API_URL}/books/${bookId}`);
        return response.data;
    },
};

export default BookService;
