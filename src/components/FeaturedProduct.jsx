"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SectionTitle from './sectionTitle';


// Category mapping based on API response
const categoryMap = {
  '6751516f9c52879c1fde6558': 'Fruits',
  '6751569e0e539396658e60a9': 'Salad',
  '6751584feaeaa5cc21bbe21b': 'Vegetables',
};

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('All');
  const [categories, setCategories] = useState(['All', 'Fruits', 'Salad', 'Vegetables']);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://code-commando.com/api/v1/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('API Response:', data);

        // Check if data.data exists and is an array
        if (!data.data || !Array.isArray(data.data)) {
          console.error('Expected an array in data.data, but got:', data.data);
          setProducts([]);
          setCategories(['All']);
          return;
        }

        // Filter out deleted products
        const activeProducts = data.data.filter(product => !product.isDeleted);
        setProducts(activeProducts);

        // Extract unique categories from products
        const uniqueCategories = ['All', ...new Set(activeProducts.map(product => categoryMap[product.categoryId] || 'Unknown'))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
        setCategories(['All']);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = category === 'All'
    ? products.slice(0, 8)
    : products.filter(product => (categoryMap[product.categoryId] || 'Unknown') === category).slice(0, 8);

  return (
    <section className="px-4 md:px-0 ">
      <div className="max-w-[1200px] mx-auto">
        <SectionTitle
          section="Our Products"
          title="Our Fresh Products"
          subtitle="We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients."
        />
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-md text-sm md:text-base ${
                category === cat ? 'bg-[#749B3F] text-white' : 'bg-white text-gray-400 border border-gray-300'
              }`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="bg-white p-3 rounded-lg shadow-md text-center">
                <Image
                  src={product.images[0] || 'https://via.placeholder.com/150'}
                  alt={product.productName}
                  width={258}
                  height={208}
                  className="rounded-lg object-cover w-[149px] md:w-[258px] h-[119px]   md:h-[208px] mx-auto"
                />
                <h3 className="text-md text-gray-700 font-semibold mt-2">{product.productName}</h3>
                <p className="text-gray-600 text-sm mt-2">${product.price.toFixed(2)}</p>
                <button className="hover:bg-orange-500 text-gray-900 w-full  hover:text-white py-2 md:py-3  rounded-md border border-gray-300 mt-2 text-sm">
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600">No products available in this category.</p>
          )}
        </div>
        <div className="text-center mt-6">
         <button className=" text-[#FF6A1A] px-6 py-3  font-bold rounded-md border border-orange-400 mt-4 text-sm md:text-base">
                        See All Product
                    </button>
        </div>
      </div>
    </section>
  );
}