"use client";



export default function SectionTitle({ title, subtitle, section }) {
  return (
    <div className="text-center mb-8">
      <span className="text-[#749B3F] bg-[#f1f8e6] px-3 py-1 rounded-md text-sm md:text-base">{section}</span>
      <h2 className="text-3xl md:text-5xl  text-gray-800 mt-4">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 mt-4 mb-4 md:mb-10 text-sm md:text-base max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
     
    </div>
  );
}