"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from './sectionTitle';

export default function Blog() {
    const blogPosts = [
        {
            id: 1,
            date: 'May 23, 2024',
            title: 'Exploring Seasonal Delights: A Guide to What’s Fresh Right Now',
            image: 'https://i.ibb.co/sp6fRhq7/agriculture-woman-tomato-harvest-field-food-production-natural-produce-eco-farming-space-sustainable.webp',
            link: '/blog/exploring-seasonal-delights',
        },
        {
            id: 2,
            date: 'May 23, 2024',
            title: 'Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads',
            image: 'https://i.ibb.co/5XY8nr2f/female-farmer-worker-harvesting-tomatoes-260nw-2474645073.webp',
            link: '/blog/mastering-salad-creations',
        },
        {
            id: 3,
            date: 'May 23, 2024',
            title: 'The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week',
            image: 'https://i.ibb.co/4ZR9drZQ/istockphoto-2159180099-612x612.jpg',
            link: '/blog/art-of-meal-prepping',
        },
    ];

    return (
        <section className=" px-4 md:px-0 ">
            <div className="max-w-[1200px] mx-auto">
                <SectionTitle 
                section={" Our Blog"}
                title="Fresh Harvest Blog" subtitle="Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration." />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-white rounded-lg overflow-hidden   ">
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={384}
                                height={260}
                                className="w-full h-[260px] rounded-2xl object-cover"
                            />
                            <div className="p-4">
                                <p className="text-gray-500 text-sm">{post.date}</p>
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-2 line-clamp-2">
                                    {post.title}
                                </h3>
                                <Link href={post.link} className="text-orange-500 mt-4 inline-block hover:underline">
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}