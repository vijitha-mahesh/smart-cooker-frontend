import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {ProductList} from '../../containers/CustomerPortal/ProductList';
export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {


    return (
        <div className='p-10'>
            <ProductList/>
        </div>
    );
};

export default HomePage;
