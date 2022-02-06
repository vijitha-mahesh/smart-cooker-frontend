import axios from 'axios';
import { setGlobalState, useGlobalState } from '../GlobalState';

//login service
export const submitLoginData = async (data: any) => {
    console.log('auth service method');
    await axios({
        method: 'post',
        withCredentials: true,
        url: 'https://localhost:44357/api/AuthManagement/Login',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    })
        .then(function (response) {
            //handle success
            // console.log('here is the response :' + response.data.success);
            setGlobalState('jwt', response.data.token);
            console.log(useGlobalState);
            return response;
        })
        .catch(function (response) {
            //handle error
             console.log(response);
            //console.log('catch ');
        });
    console.log('response');
};
