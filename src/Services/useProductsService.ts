import axios from 'axios';

export const getProducts = () => {
    return axios.get('https://61f7e4bd39431d0017eafae7.mockapi.io/products');
};