import React from 'react';

const Banner = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center h-[50vh] sm:h-[60vh] lg:h-[70vh] flex flex-col justify-center items-center text-white text-center px-4 sm:px-8"
        style={{ backgroundImage: "url('https://i.ibb.co/5LpBxG7/hero.jpg')" }} // Fixed style
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Breadcrumb */}
        <div className="relative z-10 text-sm sm:text-base flex items-center space-x-2 mb-4 sm:mb-6">
          <a href="/" className="text-white hover:text-gray-300">Home</a>
          <span>/</span>
          <a href="/study-destinations/study-in-the-uk" className="text-white hover:text-gray-300">Study in the UK</a>
          <span>/</span>
          <span>May Intake</span>
        </div>

        {/* Header */}
        <h1 className="relative z-10 text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          May Intake in the <span className="text-red-500">UK</span>
        </h1>

        {/* Description */}
        <p className="relative z-10 mt-2 sm:mt-4 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
          The UK provides a variety of courses for international students. May is a prime intake period, offering flexible
          opportunities to begin your academic journey.
        </p>

        
      </section>
    </div>
  );
};

export default Banner;
