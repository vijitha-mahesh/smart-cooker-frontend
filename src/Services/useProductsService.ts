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

export const getProductInformation = async (id: string) => {
    return await axios({
        method: 'get',
        url: api + `products/${id}`,
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            // console.log(response);
            return response;
        })
        .catch(function (response) {
            //handle error
            console.log('error');
        });
};

export const getProductQuentityInOutlet = async (productId: string, outletId: string) => {
    var data = {
        productId: productId,
        outletId: outletId
    };

    var qty;
    console.log('2 outlet change' + data.outletId);

    await axios({
        method: 'post',
        url: api + 'products/quentity',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    })
        .then(function (response) {
            console.log('3 outlet change  ' + response.data);
            qty = response.data;
        })
        .catch(function (response) {
            //handle error
            // console.log(response);
        });
    return qty;
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

export const deleteProduct = async (e: number) => {
    await axios
        .delete(api + `products/${e}`)
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
