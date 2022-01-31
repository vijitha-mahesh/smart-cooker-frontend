import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {ProductList} from '../components/ProductList';
export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    const navigate = useNavigate();

    return (
        <div className='p-10'>
            <ProductList/>
        </div>
    );
};

export default HomePage;