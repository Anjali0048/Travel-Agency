import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-blue-600">TravelAgency</Link>
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/getDestinations" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Destinations</Link>
              <Link to="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Packages</Link>
              <Link to="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:block">
              <Link to="/login" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
              <Link to="/signup" className="ml-4 text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Sign Up</Link>
            </div>
            <div className="ml-3 relative">
              <div>
                <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src="https://via.placeholder.com/150" alt="" />
                </button>
              </div>
              <div className="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</Link>
                <Link to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</Link>
                <Link to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex sm:hidden">
            <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link to="/getDestinations" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Destinations</Link>
          <Link to="#" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Packages</Link>
          <Link to="#" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          <Link to="/login" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Login</Link>
          <Link to="/signup" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
