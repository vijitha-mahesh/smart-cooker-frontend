import axios from 'axios';

const mockApi = 'https://61f7e4bd39431d0017eafae7.mockapi.io/';
const api = 'https://localhost:44357/api/';

export const getProducts = async () => {
    //console.log('get requst');
    return await axios({
        method: 'get',
        url: api + 'products',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
       // console.log('response: '+response);
        return response;
    });
};

// export const getProducts = async () => {
//     return await axios.get(api + 'products');
// };

export const getProductInformation = async (id: string) => {
    return await axios({
        method: 'get',
        url: api + `products/${id}`,
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (response) {
            //handle error
             console.log('error');
        });
};

export const addProduct = async (data: any) => {
    await axios({
        method: 'post',
        url: mockApi + 'products',
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

