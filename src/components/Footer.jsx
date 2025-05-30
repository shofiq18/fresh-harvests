
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 px-6 text-gray-800">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and App Download Section */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4 md:mb-32">
            <span className="text-green-600 text-3xl mr-2">🍃</span>
            <h3 className="text-2xl font-bold text-gray-800">Fresh Harvests</h3>
          </div>
          <p className="mb-4 text-gray-600 font-medium">Download App:</p>
          <div className="flex justify-center md:justify-start gap-3">
            <Link href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                width={135}
                height={40}
                className="h-[40px] w-auto hover:opacity-80 transition-opacity"
              />
            </Link>
            <Link href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                width={135}
                height={40}
                className="h-[40px] w-auto hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
        </div>

        {/* Quick Links 1 */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-800">Quick Links 1</h4>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="/" className="hover:text-green-600 transition-colors">Home</Link></li>
            <li><Link href="/shop" className="hover:text-green-600 transition-colors">Shop</Link></li>
            <li><Link href="/about" className="hover:text-green-600 transition-colors">About us</Link></li>
            <li><Link href="/blog" className="hover:text-green-600 transition-colors">Blog</Link></li>
            <li><Link href="/detail-blog" className="hover:text-green-600 transition-colors">Detail Blog</Link></li>
          </ul>
        </div>

        {/* Quick Links 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-800">Quick Links 2</h4>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="/favorites" className="hover:text-green-600 transition-colors">Favorites</Link></li>
            <li><Link href="/cart" className="hover:text-green-600 transition-colors">Cart</Link></li>
            <li><Link href="/signin" className="hover:text-green-600 transition-colors">Sign in</Link></li>
            <li><Link href="/register" className="hover:text-green-600 transition-colors">Register</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h4>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <span className="text-green-600">📞</span>
              <span>+1234 5678 90</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">📧</span>
              <span>freshharvests@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">📍</span>
              <span>Tanjung Sari Street, Pontianak, Indonesia</span>
            </li>
          </ul>
          <div className="mt-6">
            <p className="text-sm text-center md:text-start font-medium text-gray-600 mb-2">Accepted Payment Methods:</p>
            <div className="flex justify-center md:justify-start gap-3">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                alt="Visa"
                width={40}
                height={20}
                className="w-auto h-6 bg-white p-1 rounded shadow-sm hover:shadow-md transition-shadow"
              />
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="PayPal"
                width={40}
                height={20}
                className="w-auto h-6 bg-white p-1 rounded shadow-sm hover:shadow-md transition-shadow"
              />
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg"
                alt="Apple Pay"
                width={40}
                height={20}
                className="w-auto h-6 bg-white p-1 rounded shadow-sm hover:shadow-md transition-shadow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Social Media and Copyright */}
      <div className="max-w-[1200px] mx-auto mt-8 text-center border-t border-gray-300 pt-4 flex justify-between items-center flex-col md:flex-row">
        <p className="text-sm text-gray-600 mb-2 md:mb-0">© Copyright 2024. All Rights Reserved by Banana Studio</p>
        <div className="flex justify-center gap-4">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              width={24}
              height={24}
              className="w-6 h-6 hover:opacity-80 transition-opacity"
            />
          </Link>
          <Link href="https://x.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
              alt="X (Twitter)"
              width={24}
              height={24}
              className="w-6 h-6 hover:opacity-80 transition-opacity"
            />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              width={24}
              height={24}
              className="w-6 h-6 hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}