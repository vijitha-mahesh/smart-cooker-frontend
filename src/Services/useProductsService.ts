import axios from 'axios';

const api = 'https://61f7e4bd39431d0017eafae7.mockapi.io/';

export const getProducts = () => {
    console.log(api + 'products');
    return axios.get(api +'products');
};

export const addProduct = (data: any) => {
    axios({
        method: 'post',
        url: 'https://61f7e4bd39431d0017eafae7.mockapi.io/products',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    })
        .then(function (response) {
            //handle success
            console.log(response);
            return response;
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
};
