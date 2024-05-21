import React from 'react';
import logo from "./logo.png";
import "./Navbar.css";
import { Link } from 'react-router-dom';

interface Props {}

const Navbar = (props: Props) => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-60 h-18"/>
          </Link>
          <Link to="/search" className="hidden font-bold lg:flex">
            <p className="text-black hover:text-darkBlue">
              Dashboard
            </p>
          </Link>
          
        </div>
        <div className="hidden lg:flex items-center space-x-6 text-back">
          <div className="hover:text-darkBlue">Login</div>
          <a
            href=""
            className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
          >
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;