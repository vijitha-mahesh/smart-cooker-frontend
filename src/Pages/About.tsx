import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {

    return (
        <div className="bg-gray-500 h-screen text-center">
            <p className='text-5xl'>This is the about page.</p>
        </div>
    );
};

export default AboutPage;