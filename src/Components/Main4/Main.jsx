import React, { useState, useRef, useEffect } from 'react';
import Noone from '/src/img/Noone.svg';
import Bastanee from '/src/img/bastanee.svg';
import Comboze from '/src/img/comboze.svg';
import Sarfasl from '/src/img/sarfasl(2).svg'
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
        description: ' bakery bread viennoiserie...',
        originalPrice: "$40.00",
        currentPrice: "$30.00",
        weight: "(1kg)",
        img: Noone,
        icon1: Mosbat,
        icon2: Charkhesh,
        icon3: Like,
        icon4: Search
      },
      {
        id: 2,
        description: "ICE cream cones sundae...",
        originalPrice: "$20.00",
        currentPrice: "$15.00",
        weight: "(45ml)",
        img: Bastanee,

      },
      {
        id: 3,
        description: "fresh Vegetable",
        originalPrice: "$25.00",
        currentPrice: "$15.00",
        weight: "(1.5kg)",
        img: Sarfasl,
      },
      {
        id: 4,
        description: "Papaya seed auglis fruit...",
        originalPrice: "$45.00",
        currentPrice: "$35.00",
        weight: "(1.5kg)",
        img: Comboze,
      }
    ],
    Vegetable: [
      {
        id: 5,
        description:  "fresh Vegetable",
        originalPrice: "$40.00",
        currentPrice: "$30.00",
        weight: "(1kg)",
        img: Sarfasl,

      },
      {
        id: 6,
        description:  "fresh Vegetable",
        originalPrice: "$20.00",
        currentPrice: "$15.00",
        weight: "(45ml)",
        img: Sarfasl,

      },
      {
        id: 7,
        description:  "fresh Vegetable",
        originalPrice: "$25.00",
        currentPrice: "$15.00",
        weight: "(1.5kg)",
        img: Sarfasl,
      },
      {
        id: 8,
        description:  "fresh Vegetable",
        originalPrice: "$45.00",
        currentPrice: "$35.00",
        weight: "(1.5kg)",
        img: Sarfasl,
      }
    ],
    Meal: [
      {
        id: 9,
        description: "ICE cream cones sundae...",
        originalPrice: "$40.00",
        currentPrice: "$30.00",
        weight: "(1kg)",
        img: Bastanee,

      },
      {
        id: 10,
        description: "ICE cream cones sundae...",
        originalPrice: "$20.00",
        currentPrice: "$15.00",
        weight: "(45ml)",
        img: Bastanee,

      },
      {
        id: 11,
        description: "ICE cream cones sundae...",
        originalPrice: "$25.00",
        currentPrice: "$15.00",
        weight: "(1.5kg)",
        img: Bastanee,
      },
      {
        id: 12,
        description: "ICE cream cones sundae...",
        originalPrice: "$45.00",
        currentPrice: "$35.00",
        weight: "(1.5kg)",
        img: Bastanee,
      }
    ],
    Milk: [
      {
        id: 13,
        description: "Papaya seed auglis fruit...",
        originalPrice: "$40.00",
        currentPrice: "$30.00",
        weight: "(1kg)",
        img: Comboze,

      },
      {
        id: 14,
        description: "Papaya seed auglis fruit...",
        originalPrice: "$20.00",
        currentPrice: "$15.00",
        weight: "(45ml)",
        img: Comboze,

      },
      {
        id: 15,
        description: "Papaya seed auglis fruit...",
        originalPrice: "$25.00",
        currentPrice: "$15.00",
        weight: "(1.5kg)",
        img: Comboze,
      },
      {
        id: 16,
        description: "Papaya seed auglis fruit...",
        originalPrice: "$45.00",
        currentPrice: "$35.00",
        weight: "(1.5kg)",
        img: Comboze,
      }
    ],
    Cakes: [
      {
        id: 17,
        description:  "fresh Vegetable",
        originalPrice: "$40.00",
        currentPrice: "$30.00",
        weight: "(1kg)",
        img: Sarfasl,
      },
      {
        id: 18,
        description:  "fresh Vegetable",
        originalPrice: "$20.00",
        currentPrice: "$15.00",
        weight: "(45ml)",
        img: Sarfasl,

      },
      {
        id: 19,
        description:  "fresh Vegetable",
        originalPrice: "$25.00",
        currentPrice: "$15.00",
        weight: "(1.5kg)",
        img: Sarfasl,
      },
      {
        id: 20,
        description:  "fresh Vegetable",
        originalPrice: "$45.00",
        currentPrice: "$35.00",
        weight: "(1.5kg)",
        img: Sarfasl,
      }
    ],
    Drinks: [
      {
        id: 21,
        description: ' bakery bread viennoiserie...',
        originalPrice: "$40.00",
        currentPrice: "$30.00",
        weight: "(1kg)",
        img: Noone,

      },
      {
        id: 22,
        description: ' bakery bread viennoiserie...',
        originalPrice: "$20.00",
        currentPrice: "$15.00",
        weight: "(45ml)",
        img: Noone,

      },
      {
        id: 23,
        description: ' bakery bread viennoiserie...',
        originalPrice: "$25.00",
        currentPrice: "$15.00",
        weight: "(1.5kg)",
        img: Noone,
      },
      {
        id: 24,
        description: ' bakery bread viennoiserie...',
        originalPrice: "$45.00",
        currentPrice: "$35.00",
        weight: "(1.5kg)",
        img: Noone,
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
      // containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeCategory]);

  return (
    <div className=" w-full py-15 bg-[#F7F7F7]   font-sans" ref={containerRef}>
      {/* عنوان اصلی */}
      <span className="flex justify-center mb-5">
        <p className=' relative text-[#333333] font-semibold text-2xl before:content-arrow  before:bg-[#666666]  before:absolute before:-left-12 before:justify-center before:w-8 before:flex before:top-4 before:h-1   after:content-arrow after:bg-[#666666]  after:absolute  after:w-8 after:flex after:-right-12 after:top-4 after:h-1'>Best Selling Product</p>
      </span>

      {/* لیست دسته‌بندی‌ها */}
      <div className="mb-8  flex justify-center items-center">
        <h2 className="text-lg  font-semibold text-gray-800 mb-2">Fruits</h2>
        <div className="flex gap-5  space-y-1 ml-4">
          {categories.filter(cat => cat !== 'Fruits').map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-left cursor-pointer text-gray-700 hover:text-gray-900 transition-colors ${activeCategory === category ? 'font-bold text-blue-600 text-lg' : ''
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

            <div className="absolute flex mt-69 w-52">              
              <p className='text-[#666666]'>{product.description}</p>
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
      <div className="flex justify-center items-center space-x-6 mt-10">
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