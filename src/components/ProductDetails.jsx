

"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import SectionTitle from './sectionTitle';
import SectionDivider from './sectionDevider';

// Category mapping
const categoryMap = {
  '6751516f9c52879c1fde6558': 'Fruits',
  '6751569e0e539396658e60a9': 'Salad',
  '6751584feaeaa5cc21bbe21b': 'Vegetables',
  '67505f3bcae535a16f2829a2': 'Electronics',
};

export default function ProductDetails() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id;
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('description'); // For tab switching

  useEffect(() => {
    if (!id) {
      setError('No product ID provided');
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://code-commando.com/api/v1/products/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Product Response:', data);
        if (data && data.data) {
          setProduct(data.data);
        } else {
          setError('No product data found or unexpected structure');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        setError(`Failed to load product: ${error.message}`);
      }
    };

    fetchProduct();
  }, [id]);

  // Fetch related products once the current product is loaded
  useEffect(() => {
    if (!product) return;

    const fetchRelatedProducts = async () => {
      try {
        const response = await fetch('https://code-commando.com/api/v1/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data && data.data && Array.isArray(data.data)) {
          // Filter products by the same category, exclude the current product, and limit to 4
          const filteredProducts = data.data
            .filter(
              (p) =>
                p.categoryId === product.categoryId &&
                p.id !== product.id &&
                !p.isDeleted
            )
            .slice(0, 4);
          setRelatedProducts(filteredProducts);
        } else {
          setRelatedProducts([]);
        }
      } catch (error) {
        console.error('Error fetching related products:', error);
        setRelatedProducts([]);
      }
    };

    fetchRelatedProducts();
  }, [product]);

  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>;
  }

  if (!product) {
    return <div className="text-center py-10">Loading...</div>;
  }

  const handleCardClick = (productId) => {
    router.push(`/product/${productId}`);
  };

  return (
    <section className="py-12 px-4 min-h-screen pt-24 md:pt-36">
      <div className="max-w-[1200px] mx-auto">
        {/* Image and Details Section */}
        <div className="flex flex-col md:flex-row gap-16 mb-12">
          {/* Image Section */}
          <div className="w-full md:w-1/2 sm:h-[390px] lg:h-[566px] p-6 rounded-lg border border-gray-200">
            <Image
              src={product.images[0] || 'https://via.placeholder.com/400'}
              alt={product.productName}
              width={400}
              height={400}
              className="rounded-lg object-cover w-full h-full sm:h-[350px] lg:h-[520px] mx-auto"
              loading="lazy"
            />
          </div>

          {/* Details Section */}
          <div className=" sw-full md:w-1/2 sm:h-[390px] md:h-[566px] lg:h-[566px] p-6 rounded-lg">
            <span className="text-[#749B3F] bg-[#f1f8e6] px-3 py-1 rounded-md text-sm md:text-base">
              {categoryMap[product.categoryId] || 'Unknown'}
            </span>
            <h1 className="text-5xl font-bold text-gray-900 mt-4 mb-2">{product.productName}</h1>
            <div className="text-2xl text-yellow-600 font-semibold mb-2">
              <span className="text-[#FFB848] text-xl"> ★★★★☆ <span className="text-black">4.5</span></span>
              <br />
              <p className="text-[#FF6A1A] mt-4 text-3xl">${product.price}/Kg</p>
            </div>
            <p className="text-gray-600 mb-6">{product.description || 'No description available'}</p>

            {/* Quantity Selector */}
            <div className="flex items-center mb-4">
              <label className="mr-4 text-gray-700 font-medium">Quantity</label>
              <button
                className="px-3 py-2 w-12 text-center border border-gray-200 text-gray-700"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                min="1"
                className="px-3 py-2 w-12 text-center border-t border-b border-gray-200 focus:outline-none text-gray-700"
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              />
              <button
                className="px-3 py-2 w-10 text-center border border-gray-200 text-gray-700"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
              <span className="text-gray-600 ml-1">/Kg</span>
            </div>

            {/* Actions */}
            <div className="lg:flex  gap-7">
              {/* Save as Favorite Button */}
              <button className="flex items-center gap-2 mb-4 lg:mb-0 px-8 py-4 w-full lg:w-1/2 pl-20 md:pl-12 text-center bg-gray-100 text-gray-700 font-semibold rounded-md hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
                Save as Favorite
              </button>

              {/* Add to Cart Button */}
              <button className="flex items-center gap-2 px-8 py-4 w-full lg:w-1/2 pl-20 md:pl-12 text-center bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="text-white"
                >
                  <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Description and Review Section */}
        <div className="">
          <div className="flex space-x-8 mb-6 sm:mt-36 lg:mt-16">
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'description'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-500 hover:text-gray-700'
                }`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'reviews'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-500 hover:text-gray-700'
                }`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews (0)
            </button>
          </div>
          <div className="md:w-[894px] md:h-[248px] bg-gray-100 p-4 rounded-xl">
            {activeTab === 'description' ? (
              <p className="text-gray-600 leading-relaxed">
                {product.description || 'No description available'}
              </p>
            ) : (
              <p className="text-gray-600 leading-relaxed">
                No reviews yet. Be the first to leave a review!
              </p>
            )}
          </div>
        </div>

        {/* Related Products Section */}
        <div className=" mt-8 md:my-28">
          <SectionTitle
            section="Our Products"
            title="Related Products"
            subtitle="Explore more products that you might like based on your interest."
          />

          {relatedProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="bg-white p-3 rounded-lg shadow-md text-center cursor-pointer"
                  onClick={() => handleCardClick(product.id)}
                >
                  <Image
                    src={relatedProduct.images[0] || 'https://via.placeholder.com/150'}
                    alt={relatedProduct.productName}
                    width={258}
                    height={208}
                    className="rounded-lg object-cover w-[149px] md:w-[258px] h-[119px] md:h-[208px] mx-auto"
                  />
                  <h3 className="text-md text-gray-700 font-semibold mt-2">{relatedProduct.productName}</h3>
                  <p className="text-gray-600 text-sm mt-2">${relatedProduct.price.toFixed(2)}</p>
                  <button
                    className="hover:bg-orange-500 text-gray-900 w-full hover:text-white py-2 md:py-3 rounded-md border border-gray-300 mt-2 text-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log(`Added ${relatedProduct.productName} to cart`);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>


          ) : (
            <p className="text-gray-600">No related products available.</p>
          )}
        </div>
      </div>
    </section>
  );
}