import React, { useState, useRef, useEffect } from 'react';
import fff from '/src/img/Noone.svg';
import fff2 from '/src/img/bastanee.svg';
import fff4 from '/src/img/comboze.svg';
import fff3 from '/src/img/sarfasl(2).svg'
import ddd from '/src/img/textnoone.svg';
import ddd2 from '/src/img/textbastanee.svg';
import ddd4 from '/src/img/textcomboze.svg';
import ddd3 from '/src/img/textsarfasl (2).svg';
import Mosbat from '/src/icon/+.svg';
import Charkhesh from '/src/icon/charkhesh.svg';
import Like from '/src/icon/Like.svg';
import Search from '/src/icon/Search (2).svg';
import rightsmall from '/src/icon/rightsmall.svg';
import leftsmall from '/src/icon/leftsmall.svg';





const BestSellingSlider = () => {
  const [activeCategory, setActiveCategory] = useState('Fruits');
  const containerRef = useRef(null);

  const categories = ['Fruits', 'Vegetable', 'Meal', 'Milk', 'Cakes', 'Drinks'];

  // محصولات هر دسته (هر دسته 4 محصول)
  const allProducts = {
    Fruits: [
      {
        id: 1,
        description: ddd,
        originalPrice: "$40.00",
        currentPrice: "$30.00",
        weight: "(1kg)",
        img: fff,
        icon1: Mosbat,
        icon2: Charkhesh,
        icon3: Like,
        icon4: Search
      },
      {
        id: 2,
        description: ddd2,
        originalPrice: "$20.00",
        currentPrice: "$15.00",
        weight: "(45ml)",
        img: fff2,

      },
      {
        id: 3,
        description: ddd3,
        originalPrice: "$25.00",
        currentPrice: "$15.00",
        weight: "(1.5kg)",
        img: fff3,
      },
      {
        id: 4,
        description: ddd4,
        originalPrice: "$45.00",
        currentPrice: "$35.00",
        weight: "(1.5kg)",
        img: fff4,
      }
    ],
    Vegetable: [
      {
        id: 5,
        description: ddd,
        originalPrice: "$40.00",
        currentPrice: "$30.00",
        weight: "(1kg)",
        img: fff,

      },
      {
        id: 6,
        description: ddd2,
        originalPrice: "$20.00",
        currentPrice: "$15.00",
        weight: "(45ml)",
        img: fff2,

      },
      {
        id: 7,
        description: ddd3,
        originalPrice: "$25.00",
        currentPrice: "$15.00",
        weight: "(1.5kg)",
        img: fff3,
      },
      {
        id: 8,
        description: ddd4,
        originalPrice: "$45.00",
        currentPrice: "$35.00",
        weight: "(1.5kg)",
        img: fff4,
      }
    ],
    Meal: [
      {
        id: 9,
        description: ddd,
        originalPrice: "$40.00",
        currentPrice: "$30.00",
        weight: "(1kg)",
        img: fff,

      },
      {
        id: 10,
        description: ddd2,
        originalPrice: "$20.00",
        currentPrice: "$15.00",
        weight: "(45ml)",
        img: fff2,

      },
      {
        id: 11,
        description: ddd3,
        originalPrice: "$25.00",
        currentPrice: "$15.00",
        weight: "(1.5kg)",
        img: fff3,
      },
      {
        id: 12,
        description: ddd4,
        originalPrice: "$45.00",
        currentPrice: "$35.00",
        weight: "(1.5kg)",
        img: fff4,
      }
    ],
    Milk: [
      {
        id: 13,
        description: ddd,
        originalPrice: "$40.00",
        currentPrice: "$30.00",
        weight: "(1kg)",
        img: fff,

      },
      {
        id: 14,
        description: ddd2,
        originalPrice: "$20.00",
        currentPrice: "$15.00",
        weight: "(45ml)",
        img: fff2,

      },
      {
        id: 15,
        description: ddd3,
        originalPrice: "$25.00",
        currentPrice: "$15.00",
        weight: "(1.5kg)",
        img: fff3,
      },
      {
        id: 16,
        description: ddd4,
        originalPrice: "$45.00",
        currentPrice: "$35.00",
        weight: "(1.5kg)",
        img: fff4,
      }
    ],
    Cakes: [
      {
        id: 17,
        description: ddd,
        originalPrice: "$40.00",
        currentPrice: "$30.00",
        weight: "(1kg)",
        img: fff,
      },
      {
        id: 18,
        description: ddd2,
        originalPrice: "$20.00",
        currentPrice: "$15.00",
        weight: "(45ml)",
        img: fff2,

      },
      {
        id: 19,
        description: ddd3,
        originalPrice: "$25.00",
        currentPrice: "$15.00",
        weight: "(1.5kg)",
        img: fff3,
      },
      {
        id: 20,
        description: ddd4,
        originalPrice: "$45.00",
        currentPrice: "$35.00",
        weight: "(1.5kg)",
        img: fff4,
      }
    ],
    Drinks: [
      {
        id: 21,
        description: ddd,
        originalPrice: "$40.00",
        currentPrice: "$30.00",
        weight: "(1kg)",
        img: fff,

      },
      {
        id: 22,
        description: ddd2,
        originalPrice: "$20.00",
        currentPrice: "$15.00",
        weight: "(45ml)",
        img: fff2,

      },
      {
        id: 23,
        description: ddd3,
        originalPrice: "$25.00",
        currentPrice: "$15.00",
        weight: "(1.5kg)",
        img: fff3,
      },
      {
        id: 24,
        description: ddd4,
        originalPrice: "$45.00",
        currentPrice: "$35.00",
        weight: "(1.5kg)",
        img: fff4,
      }
    ]
  };

  const filteredProducts = allProducts[activeCategory] || [];

  // اسلاید به دسته بعدی
  const nextCategory = () => {
    const currentIndex = categories.indexOf(activeCategory);
    const nextIndex = (currentIndex + 1) % categories.length;
    setActiveCategory(categories[nextIndex]);
  };

  // اسلاید به دسته قبلی
  const prevCategory = () => {
    const currentIndex = categories.indexOf(activeCategory);
    const prevIndex = (currentIndex - 1 + categories.length) % categories.length;
    setActiveCategory(categories[prevIndex]);
  };

  // وقتی دسته عوض می‌شه، به بالای صفحه اسکرول کن
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeCategory]);

  return (
    <div className=" w-full py-20 bg-[#F7F7F7]   font-sans" ref={containerRef}>
      {/* عنوان اصلی */}
      <span className="flex justify-center mb-5">
        <img src="src/img/Title main4.svg" alt="" />
      </span>

      {/* لیست دسته‌بندی‌ها */}
      <div className="mb-8  flex justify-center items-center">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Fruits</h2>
        <div className="flex gap-5  space-y-1 ml-4">
          {categories.filter(cat => cat !== 'Fruits').map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-left text-gray-700 hover:text-gray-900 transition-colors ${activeCategory === category ? 'font-bold text-blue-600 text-lg' : ''
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>


      {/* محصولات دسته فعال - 4 محصول در 2 ردیف */}
      <div className="flex justify-center md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden bg-white w-60 h-90 flex justify-center items-start relative"
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

      {/* دکمه‌های کوچک‌تر برای اسلاید */}
      <div className="flex justify-center items-center space-x-4 mt-10">
        <button
          onClick={prevCategory}
          className="w-10 h-10 text-[#E21A43] border border-[#E21A43] flex items-center justify-center transition-all duration-300 hover:scale-110 "
        >
          <img className='' src={leftsmall} alt="" />

        </button>



        <button
          onClick={nextCategory}
          className="w-10 h-10 bg-[#E21A43] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 "
        >
          <img className='' src={rightsmall} alt="" />

        </button>
      </div>


    </div>
  );
};

export default BestSellingSlider;