import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavLogo from '../../assets/Images/NavLogo.png';
import { AuthContext } from '../../contexts/AuthContext';
import profileImage from '../../assets/Images/profile.png';

export default function NavBar() {
    const button = document.querySelector('#menu-button'); // Hamburger Icon
    const menu = document.querySelector('#menu'); // Menu

    const navigate = useNavigate();

    const { user, dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        localStorage.removeItem('userToken');
        //dispatch({ type: 'DeleteUser' });
        navigate('/login');
        window.location.reload();
    };

    // button.addEventListener('click', () => {
    //   menu.classList.toggle('hidden');
    // });
    return (
        <div className="sticky top-0 z-10">
            <nav
                className="
          flex flex-wrap
          items-center 
          justify-between
          w-full 
          h-20
          py-4
          md:py-0
          px-10
          text-lg text-white
          bg-sky-700
        "
            >
                <div>
                    <a onClick={() => navigate('/')}>
                        <div className="flex  content-center hover:cursor-pointer">
                            <div className="flex-shrink-0 w-12 h-12">
                                <img alt="product image" src={NavLogo} className="w-full h-full rounded-full" />
                            </div>
                            <div>
                                <h1 className="text-5xl">MARTCooker</h1>
                            </div>
                        </div>
                    </a>
                </div>
                <svg xmlns="<http://www.w3.org/2000/svg>" id="menu-button" className="h-6 w-6 cursor-pointer md:hidden block" fill="none" viewBox="0 0 24 24" stroke="currentColor"></svg>

                <div className="hidden w-full md:flex md:items-center md:w-auto " id="menu">
                    <ul
                        className="
            text-gray-300
              pt-4
              md:flex
              md:justify-between
              md:pt-0
              text-xl"
                    >
                        <li>
                            <a onClick={() => navigate('/')} className="md:p-4 py-2 block hover:text-white hover:cursor-pointer">
                                Home
                            </a>
                        </li>
                        <li>
                            {(user.Role == 'inventory_member' || (user.Role == 'sales_agent' && user)) && (
                                <a onClick={() => navigate('/staff/all-products')} className="md:p-4 py-2 block hover:text-white hover:cursor-pointer">
                                    Dash Board
                                </a>
                            )}
                        </li>
                        <li>
                            <a onClick={() => navigate('/about')} className="md:p-4 py-2 block hover:text-white hover:cursor-pointer">
                                About Us
                            </a>
                        </li>
                        <li>
                            {user && (
                                <div onClick={() => navigate('/profile')} className="flex-shrink-0 w-10 h-10 mt-2">
                                    <img alt="profile" src={profileImage} className="w-full h-full rounded-full  hover:cursor-pointer hover:shadow hover:shadow-white" />
                                </div>
                            )}
                        </li>

                        <li>
                            {!user && (
                                <a onClick={() => navigate('/login')} className="md:p-4 py-2 block hover:text-white text-yellow-300 hover:cursor-pointer">
                                    Login
                                </a>
                            )}
                            {user && (
                                <a onClick={() => handleLogout()} className="md:p-4 py-2 block hover:text-white text-yellow-300 hover:cursor-pointer">
                                    Log out
                                </a>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
