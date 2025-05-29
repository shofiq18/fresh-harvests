"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SectionTitle from './sectionTitle';


export default function ClientFeedback() {
    const testimonials = [
        {
            id: 1,
            quote: "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
            name: "Jane Doe - Professional Chef ",
            rating: 5,
            clientImage: 'https://i.ibb.co/s9PFccfZ/images-1.jpg',
        },
        {
            quote: "Fresh Harvests has transformed my weekly grocery routine! The produce is always fresh, and delivery is super fast . Fresh Harvests has transformed my weekly grocery routine! The produce is always fresh, and delivery is super fast.",
            name: "Honey",
            rating: 4,
            clientImage: 'https://i.ibb.co/hJ6wmm34/images-2.jpg',
        },
        {
            quote: "I love the variety of fruits and vegetables. The quality is unmatched, and the customer service is amazing!. Fresh Harvests has transformed my weekly grocery routine! The produce is always fresh, and delivery is super fast.",
            name: "Michael Brown",
            rating: 4,
            clientImage: 'https://i.ibb.co/VWQjdh5q/images.jpg',
        },
        {
            id: 1,
            quote: "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
            name: "Jane Doe - Professional Chef",
            rating: 5,
            clientImage: 'https://i.ibb.co/s9PFccfZ/images-1.jpg',
        },
        {
            quote: "Fresh Harvests has transformed my weekly grocery routine! The produce is always fresh, and delivery is super fast. Fresh Harvests has transformed my weekly grocery routine! The produce is always fresh, and delivery is super fast.",
            name: "Honey",
            rating: 4,
            clientImage: 'https://i.ibb.co/hJ6wmm34/images-2.jpg',
        },
        {
            quote: "I love the variety of fruits and vegetables. The quality is unmatched, and the customer service is amazing! Fresh Harvests has transformed my weekly grocery routine! The produce is always fresh, and delivery is super fast.",
            name: "Michael Brown",
            rating: 4,
            clientImage: 'https://i.ibb.co/VWQjdh5q/images.jpg',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [testimonials.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className="px-4 md:px-0">
            <div className="max-w-[1200px] mx-auto">
                <SectionTitle
                    section="Testimonials"
                    title="What Our Clients Say"
                    subtitle="Hear what our happy customers have to say about their Fresh Harvests experience."
                />
                {/* Client Feedback Carousel */}
               
                    <div className=" max-w-[1013px] mx-auto mt-4 md:my-[100px] md:flex justify-center items-center gap-8 ">
                        <div className=" mb-4 md:mb-0 md:mr-6">
                            <Image
                                src={testimonials[currentIndex].clientImage}
                                alt={testimonials[currentIndex].name}
                                width={250}
                                height={220}
                                className="rounded-full w-24 h-24 md:w-64 md:h-64 object-cover"
                            />
                        </div>
                        <div className="bg-[#F4F6F6] rounded-lg p-6 shadow-md max-w-lg md:max-w-xl mx-auto flex flex-col md:flex-row items-center">

                            <div className="text-center md:text-left">
                                <p className="text-gray-600 text-sm md:text-base mb-4 italic">
                                    "{testimonials[currentIndex].quote}"
                                </p>
                                <div className="flex justify-center md:justify-start mb-2">
                                    {[...Array(5)].map((_, index) => (
                                        <span
                                            key={index}
                                            className={`text-xl ${index < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-300'
                                                }`}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <h4 className="text-gray-800 font-semibold text-lg">
                                    {testimonials[currentIndex].name}
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? 'bg-green-600' : 'bg-gray-300'
                                    }`}
                                onClick={() => goToSlide(index)}
                            ></button>
                        ))}
                    </div>
               
            </div>
        </section>
    );
}