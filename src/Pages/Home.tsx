import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    const navigate = useNavigate();

    return (
        <div className='h-screen text-5xl text-center bg-yellow-600'>
            <p>This is the home page.</p>
        </div>
    );
};

export default HomePage;