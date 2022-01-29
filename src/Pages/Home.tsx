import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    const navigate = useNavigate();

    return (
        <div>
            <p>This is the home page.</p>
            
            <Link to="/about"> <button style={{background:'green', height:'50px', margin:'100px'}}>about page</button></Link>

            <button onClick={()=> navigate('/about')}>Use this as new to go tho the about page</button>
        </div>
    );
};

export default HomePage;