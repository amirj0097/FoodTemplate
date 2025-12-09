import React, { useState } from 'react';
import fff from '/src/img/Noone.svg';
import fff2 from '/src/img/bastanee.svg';
import fff3 from '/src/img/comboze.svg';
import ddd from '/src/img/textnoone.svg';
import ddd2 from '/src/img/textbastanee.svg';
import ddd3 from '/src/img/textcomboze.svg';
import Mosbat from '/src/icon/+.svg';
import Charkhesh from '/src/icon/charkhesh.svg';
import Like from '/src/icon/Like.svg';
import Search from '/src/icon/Search (2).svg';
import rightsmall from '/src/icon/rightsmall.svg';
import leftsmall from '/src/icon/leftsmall.svg';

const ProductSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      id: 1, // اضافه کردن id
      description: ddd,
      originalPrice: "$49.00",
      currentPrice: "$30.00",
      weight: "(1kg)",
      img: fff,
      icon1: Mosbat,
      icon2: Charkhesh,
      icon3: Like,
      icon4: Search,
    },
    {
      id: 2, // اضافه کردن id
      description: ddd2,
      originalPrice: "$65.00",
      currentPrice: "$45.00",
      weight: "(450ml)",
      img: fff2,
    },
    {
      id: 3, // اضافه کردن id
      description: ddd3,
      originalPrice: "$25.00",
      currentPrice: "$18.00",
      weight: "(1.5kg)",
      img: fff3,
    },
    {
      id: 4, // اضافه کردن id
      description: ddd3,
      originalPrice: "$29.00",
      currentPrice: "$15.00",
      weight: "(1kg)",
      img: fff3,
    },
    {
      id: 5, // اضافه کردن id
      description: ddd2,
      originalPrice: "$45.00",
      currentPrice: "$35.00",
      weight: "(450ml)",
      img: fff2,
    },
    {
      id: 6, // اضافه کردن id
      description: ddd3,
      originalPrice: "$38.00",
      currentPrice: "$28.00",
      weight: "(1.5kg)",
      img: fff3,
    }
  ];

  const slides = [
    {
      id: "slide-1", // اضافه کردن id برای اسلاید
      products: products.slice(0, 3)
    },
    {
      id: "slide-2", // اضافه کردن id برای اسلاید
      products: products.slice(3, 6)
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const renderStars = () => {
    // تابع شما
  };

  return (
    <div className="w-[62%] py-4 px-4">
      <div className="max-w-6xl -mr-65">
        <main className="overflow-hidden">
          <div className="flex justify-end p-6">
            <div className="flex -mr-2 gap-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 text-[#E21A43] border border-[#E21A43] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <img className='' src={leftsmall} alt="" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-[#E21A43] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <img className='' src={rightsmall} alt="" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide) => ( // حذف slideIndex
                  <div key={slide.id} className="w-full flex-shrink-0 p-0"> {/* استفاده از slide.id */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {slide.products.map((product) => ( // حذف productIndex
                        <div
                          key={product.id} // استفاده از product.id
                          className='overflow-hidden bg-white w-60 h-90 flex justify-center items-start relative'
                        >
                          <span className=""><img className='p-3' src={product.img} alt="" /></span>

                          {product.id === 1 && ( // تغییر شرط به id
                            <div className="flex w-30 px-2 py-2 gap-2 absolute justify-center mt-[233px] bg-white shadow-md shadow-gray-200">
                              <a className=" " href=""> <img className="border-r-1 border-[#888888] w-15 pr-2" src={Mosbat} alt="" /></a>
                              <a className=" " href=""> <img className="border-r-1 border-[#888888] w-15 pr-2" src={Charkhesh} alt="" /></a>
                              <a className=" " href=""> <img className="border-r-1 border-[#888888] w-15 pr-2" src={Like} alt="" /></a>
                              <a className="" href=""> <img className="w-10 pr-0" src={Search} alt="" /></a>
                            </div>
                          )}

                          <div className="absolute mt-70 w-50">
                            <img className='' src={product.description} alt="" />
                          </div>

                          <div className="flex w-50 absolute mt-76 gap-3">
                            <span className="text-[#333333] line-through">
                              {product.originalPrice}
                            </span>
                            <span className="font-bold text-[#333333]">
                              {product.currentPrice}
                            </span>
                            <span className="text-xs flex items-center text-[#333333]">
                              {product.weight}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductSlider;