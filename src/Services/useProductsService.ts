import axios from 'axios';

const api = 'https://61f7e4bd39431d0017eafae7.mockapi.io/';

export const getProducts = async () => {
    return await axios.get(api + 'products');
};

export const getProductInformation = async (id: string) => {
    return await axios({
        method: 'get',
        url: `https://61f7e4bd39431d0017eafae7.mockapi.io/products/${id}`,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        console.log(response);
        return response;
    });
};

export const addProduct = async (data: any) => {
    await axios({
        method: 'post',
        url: api + 'products',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    })
        .then(function (response) {
            //handle success
            // console.log(response);
            return response;
        })
        .catch(function (response) {
            //handle error
            // console.log(response);
        });
};
