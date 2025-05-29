"use client";

import React from 'react';



export default function SpecialOffer() {
    return (
        <div
            className="relative w-full  md:h-[640px] bg-cover bg-center flex items-center justify-center z-10"
            style={{ backgroundImage: "url('https://i.ibb.co/hFzBYR5H/top-view-fresh-vegetables-with-copy-space.jpg')" }}
        >
            {/* Overlay for text readability */}
            <div className="absolute inset-0  bg-opacity-30"></div>

            {/* Banner Content */}

            <div className='md:flex  flex-row justify-between items-center py-[95px] md:py-0 gap-4 w-[1200px] h-full px-4 '>
                <div>
                    <div className="relative z-20 text-center md:text-start text-black">
                        <span className="text-[#749B3F] bg-[#f1f8e6] px-3 py-1 rounded-md text-sm md:text-base">Special Offerr</span>
                        <h3 className="text-4xl md:text-6xl font-semibold mt-5">Seasonal Fruit Bundle</h3>
                        <p className="text-xl md:text-4xl text-black font-semibold mt-3">
                            Discount up to <span className="text-3xl text-[#FF6A1A]">80% OFF</span>
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4 mt-8">
                            <div className="bg-white text-gray-800 p-4 rounded-lg">
                                <span className="text-md">03</span><br />Days
                            </div>
                            <div className="bg-white text-gray-800 p-4 rounded-lg">
                                <span className="text-md">18</span><br />Hour
                            </div>
                            <div className="bg-white text-gray-800 p-4 rounded-lg">
                                <span className="text-md">54</span><br />Min
                            </div>
                            <div className="bg-white text-gray-800 p-4 rounded-lg">
                                <span className="text-md">21</span><br />Second
                            </div>
                        </div>
                        <button className="bg-green-600 text-white px-4 md:px-8 py-2 md:py-4 rounded-full mt-8 text-sm md:text-base">
                            CODE: <span className='text-[#FAC714]'>FRESH28</span>
                        </button>
                    </div>



                </div>

            </div>
        </div>
    );
}