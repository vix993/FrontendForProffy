import axios from 'axios';

const api = axios.create({
    baseURL: 'https://proffys.herokuapp.com/',
});

export default api;
