// "use client";

// import React, { useState } from 'react';
// import Image from 'next/image';

// export default function Register() {
//   const [isModalOpen, setIsModalOpen] = useState(true); // Modal is open by default

//   return (
//     <section className="min-h-screen bg-gray-50 relative">
//       {/* Modal Window with Blurred Background */}
//       {isModalOpen && (
//         <>
//           {/* Blurred Background Overlay */}
//           <div
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
//             onClick={() => setIsModalOpen(false)}
//           ></div>

//           {/* Modal Window */}
//           <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg max-w-md w-full z-50">
//             {/* Close Button */}
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>

//             <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Register</h2>
//             <form className="space-y-4">
//               <div>
//                 <label className="block text-gray-700 text-sm font-medium mb-1">Full Name</label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none"
//                   placeholder="Enter your name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none"
//                   placeholder="Enter your email"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 text-sm font-medium mb-1">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none"
//                   placeholder="Enter your password"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-[#FF6A1A] text-white py-2 rounded-md hover:bg-orange-600 transition"
//               >
//                 Register
//               </button>
//               <div className="text-center text-gray-600">Or Sign up with</div>
//               <div className="flex justify-center space-x-4">
//                 <button className="border border-gray-300 px-4 py-2 rounded-md flex items-center">
//                   <Image
//                     src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
//                     alt="Google"
//                     width={20}
//                     height={20}
//                     className="mr-2"
//                   />
//                   Google
//                 </button>
//                 <button className="border border-gray-300 px-4 py-2 rounded-md flex items-center">
//                   <Image
//                     src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
//                     alt="Facebook"
//                     width={20}
//                     height={20}
//                     className="mr-2"
//                   />
//                   Facebook
//                 </button>
//               </div>
//               <p className="text-center text-gray-600 mt-4">
//                 Already have an account?{' '}
//                 <a href="/login" className="text-[#FF6A1A] hover:underline">
//                   Log In
//                 </a>
//               </p>
//             </form>
//           </div>
//         </>
//       )}
//     </section>
//   );
// }