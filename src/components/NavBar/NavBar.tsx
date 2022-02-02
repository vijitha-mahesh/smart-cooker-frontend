import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const button = document.querySelector("#menu-button"); // Hamburger Icon
  const menu = document.querySelector("#menu"); // Menu

   const navigate = useNavigate();

  // button.addEventListener('click', () => {
  //   menu.classList.toggle('hidden');
  // });
  return (
      <div className="sticky top-0 ">
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
                      <h1 className="text-4xl">SMARTCooker</h1>
                  </a>
              </div>
              <svg xmlns="<http://www.w3.org/2000/svg>" id="menu-button" className="h-6 w-6 cursor-pointer md:hidden block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>

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
                          <a onClick={() => navigate('/staff/all-products')} className="md:p-4 py-2 block hover:text-white hover:cursor-pointer">
                              staff
                          </a>
                      </li>
                      <li>
                          <a onClick={() => navigate('/about')} className="md:p-4 py-2 block hover:text-white hover:cursor-pointer">
                              About Us
                          </a>
                      </li>
                      <li>
                          <a onClick={() => navigate('/login')} className="md:p-4 py-2 block hover:text-white text-yellow-300 hover:cursor-pointer">
                              Login
                          </a>
                      </li>
                  </ul>
              </div>
          </nav>
      </div>
  );
}
