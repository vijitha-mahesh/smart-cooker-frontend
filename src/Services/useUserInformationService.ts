import axios from "axios";


const api = 'https://localhost:44357/api/';

export const getUserInformation = async (id: string) => {
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