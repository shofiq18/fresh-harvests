

"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRegisterMutation, useLoginMutation } from '../app/services/authApi';
import toast, { Toaster } from 'react-hot-toast';

export default function Navbar() {
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [register, { isLoading: isRegisterLoading }] = useRegisterMutation();
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();

  // Check if token exists on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const toggleFavoritesMenu = () => {
    setIsFavoritesOpen(!isFavoritesOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      setIsLoginModal(true);
      setError(null);
      setFormData({ fullName: '', email: '', password: '' });
    }
  };

  const switchModal = () => {
    setIsLoginModal(!isLoginModal);
    setError(null);
    setFormData({ fullName: '', email: '', password: '' });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await register({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      }).unwrap();
      console.log('Register response:', response);
      const token = response.token || response.access_token || response.accessToken || response.jwt;
      if (token) {
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
        setIsModalOpen(false);
        toast.success('Registration successful!');
      } else {
        console.warn('No token found in response. Proceeding without token.');
        setIsModalOpen(false);
        toast.success('Registration successful (no token returned)');
      }
    } catch (err) {
      console.error('Register error:', err);
      setError(err.data?.message || 'Registration failed');
      toast.error(err.data?.message || 'Registration failed');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Login payload:', {
      email: formData.email,
      password: formData.password,
    });
    try {
      const response = await login({
        email: formData.email,
        password: formData.password,
      }).unwrap();
      console.log('Login response:', response);
      const token = response.token || response.access_token || response.accessToken || response.jwt;
      if (token) {
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
        setIsModalOpen(false);
        toast.success('Login successful!');
      } else {
        console.warn('No token found in response. Proceeding without token.');
        setIsModalOpen(false);
        toast.success('Login successful (no token returned)');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.data?.message || 'Login failed');
      toast.error(err.data?.message || 'Login failed');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    toast.success('Logged out successfully!');
  };

  return (
    <div className="max-w-[1200px] mx-auto px-3 md:px-0 flex items-center justify-between bg-opacity-90 z-20 fixed top-0 left-0 right-0 h-[80px]">
      <Toaster />
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
        <div className="sm:space-x-4 lg:space-x-16 text-gray-800">
          <Link href="/" className="border-b-2 border-green-600 pb-1 hover:text-green-600">
            Home
          </Link>
          <Link href="/shop" className="hover:text-green-600">
            Shop
          </Link>
          <Link href="/about" className="hover:text-green-600">
            About us
          </Link>
          <Link href="/blog" className="hover:text-green-600">
            Blog
          </Link>
        </div>
      </div>

      {/* Right Side: Icons and Sign In/Logout */}
      <div className="navbar-end">
        <div className="flex items-center space-x-4">
          {/* Favorites Menu Bar */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="flex items-center cursor-pointer gap-2" onClick={toggleFavoritesMenu}>
              <span className="text-white hidden lg:block text-xl hover:text-green-600">❤️</span>
              <p className="text-sm hidden lg:block text-gray-800">Favorite</p>
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
                <span className="text-white text-xl hover:text-green-600">🛒</span>
                <span className="badge badge-error indicator-item">3</span>
              </div>
              <p className="text-sm ml-2 hidden md:block text-gray-800">Cart</p>
            </div>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href="/cart">View Cart</Link></li>
            </ul>
          </div>

          {/* Sign In/Logout Button */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="md:px-6 md:py-3 border border-gray-700 text-gray-800 rounded-sm md:ml-[16px] hidden md:block hover:bg-gray-100"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={toggleModal}
              className="md:px-6 md:py-3 border border-gray-700 text-gray-800 rounded-sm md:ml-[16px] hidden md:block hover:bg-gray-100"
            >
              Sign In
            </button>
          )}

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="text-black lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/shop">Shop</Link></li>
                <li><Link href="/about">About us</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/favorites">❤️ Favorites</Link></li>
                <li>
                  {isLoggedIn ? (
                    <button onClick={handleLogout} className="btn btn-success mt-2 w-full">
                      Logout
                    </button>
                  ) : (
                    <button onClick={toggleModal} className="btn btn-success mt-2 w-full">
                      Sign In
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <>
          {/* Blurred Background Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal Window */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg max-w-md w-full z-50">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {isLoginModal ? (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6 text-center">Login</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form className="space-y-4" onSubmit={handleLogin}>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-200 text-gray-400 rounded-md focus:outline-none"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-200 text-gray-400 rounded-md focus:outline-none"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center text-gray-700">
                      <input type="checkbox" className="mr-2" /> Remember me
                    </label>
                    <a href="#" className="text-gray-700 underline">Forgot Password</a>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#FF6A1A] text-white py-2 rounded-md hover:bg-orange-600 transition"
                    disabled={isLoginLoading}
                  >
                    {isLoginLoading ? 'Logging in...' : 'Login'}
                  </button>
                  <div className="flex items-center justify-center text-gray-600">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="px-4 text-[16px]">Or Sign in with</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <button className="border md:w-full text-center text-gray-700 border-gray-300 px-4 py-2 md:pl-16 rounded-md flex items-center">
                      <Image
                        src="https://i.ibb.co/xtTmyTzQ/Logo-google-icon-PNG.png"
                        alt="Google"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      Google
                    </button>
                    <button className="border md:w-full text-center text-gray-700 border-gray-300 px-4 py-2 md:pl-12 rounded-md flex items-center">
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                        alt="Facebook"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      Facebook
                    </button>
                  </div>
                  <p className="text-center text-gray-600 mt-4">
                    Don’t have an account?{' '}
                    <a href="#" onClick={switchModal} className="text-[#FF6A1A] hover:underline">
                      Register here
                    </a>
                  </p>
                </form>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6 text-center">Register</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form className="space-y-4" onSubmit={handleRegister}>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-200 text-gray-400 rounded-md focus:outline-none"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-200 text-gray-400 rounded-md focus:outline-none"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-200 text-gray-400 rounded-md focus:outline-none"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#FF6A1A] text-white py-2 rounded-md hover:bg-orange-600 transition"
                    disabled={isRegisterLoading}
                  >
                    {isRegisterLoading ? 'Registering...' : 'Register'}
                  </button>
                  <div className="flex items-center justify-center text-gray-600">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="px-4 text-[16px]">Or Sign in with</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <button className="border md:w-full text-center text-gray-700 border-gray-300 px-4 py-2 md:pl-16 rounded-md flex items-center">
                      <Image
                        src="https://i.ibb.co/xtTmyTzQ/Logo-google-icon-PNG.png"
                        alt="Google"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      Google
                    </button>
                    <button className="border md:w-full text-center text-gray-700 border-gray-300 px-4 py-2 md:pl-12 rounded-md flex items-center">
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                        alt="Facebook"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      Facebook
                    </button>
                  </div>
                  <p className="text-center text-gray-600 mt-4">
                    Already have an account?{' '}
                    <a href="#" onClick={switchModal} className="text-[#FF6A1A] hover:underline">
                      Log In
                    </a>
                  </p>
                </form>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}