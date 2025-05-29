"use client";

import React from 'react';
import Image from 'next/image';


export default function About() {
    return (
        <div className="max-w-[1213px]  mx-auto  px-4 ">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className='relative'>
                    <div className="relative">
                        <Image
                            src="https://i.ibb.co/Fqxyj1ny/smiling-farmer-holding-basket-of-fresh-vegetables-on-transparent-background-png.webp"
                            alt="About Fresh Harvests"
                            width={686}
                            height={639}
                            className="rounded-lg object-cover w-full h-[550px] md:w-[6846x] md:h-[639px]"
                        />
                        <div>
                            <div className='flex justify-center items-center rounded-md  px-2 py-1 bg-white absolute bottom-[210px] right-[24] md:right-[139px]'>
                                <span className="text-green-600 text-3xl mr-2">🍃</span>
                                <h3 className='text-black '>Fresh Harvests</h3>
                            </div>
                        </div>

                    </div>

                    {/* card photo */}
                    <div className="card  w-[150px]  h-[192px] absolute bottom-0 right-[10] md:right-[120px] bg-white ">
                        <figure className="pt-2 ">
                            <img
                                src="https://i.ibb.co/fGQM4ZWw/shutterstock-590135870-1600x.webp"
                                alt="fresh vegetables"
                                className="rounded-xl w-[137] h-[110px]" />
                        </figure>
                        <div className=" text-gray-500 items-center text-center">
                            <h2 className="text-gray-500">Mushroom</h2>
                            <span>$2.3/kg</span>
                            <div className="">
                                <button className="px-4 text-gray-600 border rounded-md border-gray-300 mb-2  ">Add to card</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className=" text-left">
                    <span className="text-[#749B3F] bg-[#f1f8e6] px-3 py-1 rounded-md text-sm md:text-base">
                        About us
                    </span>
                    <h2 className="text-2xl md:text-5xl  text-gray-800 mt-2">About Fresh Harvest</h2>
                    <p className="text-gray-600 text-sm md:text-base mt-4">
                        We work closely with farmers to ensure every product meets our high <br /> standards of quality and sustainability. From farm to table, we’re <br /> committed to delivering freshness you can taste in every bite.
                    </p>
                    <button className=" text-[#FF6A1A] px-6 py-3 font-bold rounded-md border border-orange-400 mt-4 text-sm md:text-base">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
}