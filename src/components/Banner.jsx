
// components/Banner.js
"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Banner() {
    return (
        <div
            className="relative w-full  md:h-[800px] bg-cover bg-center flex items-center justify-center z-10"
            style={{ backgroundImage: "url('https://i.ibb.co/8n9yHjF2/last-one.jpg')" }}
        >
            {/* Overlay for text readability */}
            <div className="absolute inset-0  bg-opacity-30"></div>

            {/* Banner Content */}

            <div className='md:flex  flex-row justify-between items-center pt-28 md:pt-30 gap-4 w-[1200px] h-full px-4 '>
                <div>
                    <div className="relative z-20 text-start text-black">
                        <p className='mb-4 text-[#749B3F]  bg-[#c2dfc9] inline-block'>Welcome to Fresh Harvest</p>
                        <h1 className="  text-4xl md:text-6xl font-semibold mb-4">Fresh Fruits and Vegetables</h1>
                        <p className="text-sm text-gray-800 mb-6">At Fresh Harvests, we are passionate about providing you with the freshest <br /> and most flavorful fruits and vegetables.</p>
                        <button className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600">
                            Shop Now
                        </button>
                    </div>
                    {/* Special Offer Section */}
                    <div className=' flex items-center mt-4 md:mt-0 ml-4 md:ml-44 justify-between  bg-gray-300 bg-opacity-80 p-2 pt-2 md:p-5 rounded-lg shadow-lg w-[200px] md:w-[331px] h-[100px] md:h-[157px]'>
                        <div className=''>
                            <p className='text-[#176D38]'>Special Offer</p>
                            <h3 className='text-bold text-black md:text-xl'>Fresh Salad</h3>
                            <p><span className='text-[#176D38]'>Up to</span> <span className='md:text-xl text-black'>70%</span> <span className='text-black'>off</span></p>
                            <button className='bg-[#176D38] text-white px-1 md:px-2 py-1 rounded-full mb-2 md:mt-2'>code:JFSDFF</button>
                        </div>
                        <div>
                            <img className='rounded-full' src="https://i.ibb.co/Jwg3jmYJ/shutterstock-1773695441-min.jpg" alt="" width={149} height={146} />
                        </div>
                    </div>
                    {/* download app section  */}
                    <div className="py-5 px-3 md:px-0 font-sans ">
                        <p className="text-lg md:text-md text-gray-500 mb-3 text-start">Download App:</p>
                        <div className="flex  gap-3 ">
                            <Link href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                    alt="Download on the App Store"
                                    width={135}
                                    height={40}
                                    className="h-[40px] w-auto"
                                />
                            </Link>
                            <Link href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="Get it on Google Play"
                                    width={135}
                                    height={40}
                                    className="h-[40px] w-auto rounded-b-0"
                                />
                            </Link>
                        </div>

                    </div>

                </div>
                <div className="relative z-20 text-center text-white">
                  <div>
                 <Image
                    src="https://i.ibb.co/vMRc2tt/banner-image.png"
                    alt="Fresh Harvests Banner"
                    width={772}
                    height={632}
                    className="rounded-lg opacity-70  md:h-[632px]  mt-4 md:mt-12"
                  />
                </div>
              </div>
            </div>
        </div>
    );
}