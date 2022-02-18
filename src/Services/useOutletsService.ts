import axios from 'axios';

const api = 'https://localhost:44357/api/';

export const getOutlets = async () => {
    return await axios({
        method: 'get',
        url: api + 'outlet',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        return response;
    });
};
