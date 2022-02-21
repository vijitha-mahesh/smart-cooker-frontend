import axios from 'axios';

const api = 'https://localhost:44357/api/';

export const createOrder = async (data: any) => {
    await axios({
        method: 'post',
        url: api + 'Order/CreateOrder',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    })
        .then(function (response) {
            // console.log(response);
            return true;
        })
        .catch(function (response) {
            console.log('order not sucess');
            return false;
        });
};
