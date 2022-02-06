import axios from 'axios';
import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitLoginData } from '../../Services/useAuthService';


export default function LoginForm() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e:any) => {
        e.preventDefault();
        var data = {
            email: username,
            password: password
        };
       // console.log('handle submit ' + data);


        submitLoginData(data).then(() => {
            navigate('/');
        });
       // console.log('end of the flow');
    };

    return (
        <div className=" max-w-xs m-auto">
            <form onSubmit={handleSubmit} className="bg-white shadow-md shadow-blue-500 rounded px-8 pt-6 pb-8 mb-4 w-96 ">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:shadow-blue-500"
                        id="email"
                        type="text"
                        placeholder="email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline hover:shadow-blue-500"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="******************"
                    />
                    <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Sign In
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Forgot Password?</a>
                </div>
            </form>
        </div>
    );
}
