import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {

    const [message, setMessage] = useState('');
    const{number} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(number){
            setMessage('The number is ' + number);
        }
        else{
            setMessage('No number is provided')
        }
    })

    return (
        <div>
            <p>This is the about page.</p>
            {message}

            <button onClick={()=> navigate('/')}>Go back to the home page</button>
        
        </div>
    );
};

export default AboutPage;