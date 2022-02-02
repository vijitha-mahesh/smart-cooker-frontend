import axios from 'axios';

const api = 'https://61f7e4bd39431d0017eafae7.mockapi.io/';

export const getProducts = () => {
    return axios.get(api + 'products');
};

// export const getProductInformation = (index: string) => {
//     console.log(index + '17 line');
//     return axios
//         .get(`https://61f7e4bd39431d0017eafae7.mockapi.io/products/${index}`)
//         .then(function (response) {
//             //handle success

//             return response;
//         })
//         .catch(function (response) {
//             //handle error
//             console.log(response);
//         });
// };

export const getProductInformation = (id: string) => {
    return axios({
        method: 'get',
        url: `https://61f7e4bd39431d0017eafae7.mockapi.io/products/${id}`,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function (response) {
        console.log(response);
        return response;
    });
};

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
