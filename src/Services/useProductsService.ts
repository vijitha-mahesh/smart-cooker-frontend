import axios from 'axios';

const api = 'https://61f7e4bd39431d0017eafae7.mockapi.io/';

export const getProducts = () => {
    return axios.get(api +'products');
};

export const getProductInformation = (index:string) => {
    return axios.get(api +'products/'+index);
};


// export const getProd = (id: String) => {
//     return axios.get(`https://61f8a8f7783c1d0017c4470d.mockapi.io/products:${id}`);
// };


export const addProduct = (data: any) => {
    axios({
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
