import axios from "axios";


//login service
export const submitLoginData =  (data: any) => {
    console.log("auth service method");
 axios({
        method: 'post',
        url: 'https://localhost:44357/api/AuthManagement/Login',
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    })
        .then(function (response) {
            //handle success
             console.log('response');

            return response;
                   
        })
        .catch(function (response) {
            //handle error
            // console.log(response);
             console.log("catch ");
        });
 console.log('response');
};
