
"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  const toggleFavoritesMenu = () => {
    setIsFavoritesOpen(!isFavoritesOpen);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-3 md:px-0   flex items-center justify-between bg-opacity-90   z-20 fixed top-0 left-0 right-0 h-[80px]  ">
      <div className="navbar-start">
        {/* Logo */}
        <div className="flex items-center my-[30px]">
          <div className="text-green-600 text-2xl mr-2">🍃</div>
          <Link href="/" className="text-shadow-md md:text-xl font-bold text-gray-800">
            Fresh Harvests
          </Link>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="navbar-center hidden md:flex my-[38px]">
        <div className="sm:space-x-4 lg:space-x-16">
          <Link href="/" className="text-gray-100 border-b-2 border-green-600 pb-1 hover:text-green-600">
            Home
          </Link>
          <Link href="/shop" className="text-gray-100 hover:text-green-600">
            Shop
          </Link>
          <Link href="/about" className="text-gray-100 hover:text-green-600">
            About us
          </Link>
          <Link href="/blog" className="text-gray-100 hover:text-green-600">
            Blog
          </Link>
        </div>
      </div>

      {/* Right Side: Icons and Sign In */}
      <div className="navbar-end">
        <div className="flex items-center space-x-4">
          {/* Favorites Menu Bar */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="flex items-center cursor-pointer gap-2" onClick={toggleFavoritesMenu}>
              <span className="text-gray-800 hidden lg:block text-xl hover:text-green-600">❤️</span>
              <p className="text-sm hidden md:block text-white">Favorite</p>
            </label>
            {isFavoritesOpen && (
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href="/favorites" onClick={toggleFavoritesMenu}>My Favorites</Link></li>
                <li><a>Manage Favorites</a></li>
              </ul>
            )}
          </div>

          {/* Cart Icon with Badge */}
          <div className="dropdown dropdown-end">
            <div className="flex items-center cursor-pointer gap-2">
              <div className="indicator mr-2">
                <span className="text-gray-800 text-xl  hover:text-green-600">🛒</span>
                <span className="badge badge-error indicator-item">3</span>
              </div>
              <p className="text-sm ml-2 hidden md:block text-white">Cart</p>
            </div>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href="/cart">View Cart</Link></li>
            </ul>
          </div>

          {/* Sign In Button */}
          <Link href="/signin" className="md:px-6 md:py-3 border border-gray-100 text-white rounded-sm md:ml-[16px] hidden md:block">
            Sign in
          </Link>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <div className="dropdown dropdown-end">
              {/* <label tabIndex={0} className="btn bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </label> */}
              <div tabIndex={0} role="button" className="btn  text-white lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/shop">Shop</Link></li>
                <li><Link href="/about">About us</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/favorites">❤️ Favorites</Link></li>
                <li><Link href="/signin" className="btn btn-success mt-2">Sign in</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

