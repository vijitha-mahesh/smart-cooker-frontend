import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {

    return (
        <div className="flex flex-col justify-center h-screen items-center">

                <p className="text-5xl">This is the about page.</p>

        </div>
    );
};

export default AboutPage;