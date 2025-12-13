import React, { useState, useRef, useEffect } from 'react';
import fff from '/src/img/Noone.svg'
import ddd from '/src/img/textnoone.svg';
import Mosbat from '/src/icon/+.svg';
import Charkhesh from '/src/icon/charkhesh.svg';
import Like from '/src/icon/Like.svg';
import Search from '/src/icon/Search (2).svg';


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
        title: 'Fresh Apples',
        price: '$20.00-$15.00',
        weight: '(1kg)',
        category: 'Fruits'
      },
      {
        id: 3,
        title: 'Bananas Bunch',
        price: '$12.00-$8.00',
        weight: '(1kg)',
        category: 'Fruits'
      },
      {
        id: 4,
        title: 'Orange Citrus',
        price: '$18.00-$14.00',
        weight: '(2kg)',
        category: 'Fruits'
      }
    ],
    Vegetable: [
      {
        id: 5,
        title: 'fresh Vegetables',
        price: '$25.00-$15.00',
        weight: '(1.5kg)',
        category: 'Vegetable'
      },
      {
        id: 6,
        title: 'Organic Carrots',
        price: '$18.00-$12.00',
        weight: '(2kg)',
        category: 'Vegetable'
      },
      {
        id: 7,
        title: 'Fresh Tomatoes',
        price: '$14.00-$10.00',
        weight: '(1kg)',
        category: 'Vegetable'
      },
      {
        id: 8,
        title: 'Green Lettuce',
        price: '$9.00-$7.00',
        weight: '(500g)',
        category: 'Vegetable'
      }
    ],
    Meal: [
      {
        id: 9,
        title: 'Grilled Chicken',
        price: '$35.00-$28.00',
        weight: '(500g)',
        category: 'Meal'
      },
      {
        id: 10,
        title: 'Beef Steak',
        price: '$45.00-$35.00',
        weight: '(400g)',
        category: 'Meal'
      },
      {
        id: 11,
        title: 'Salmon Fillet',
        price: '$38.00-$30.00',
        weight: '(300g)',
        category: 'Meal'
      },
      {
        id: 12,
        title: 'Pork Chops',
        price: '$32.00-$25.00',
        weight: '(500g)',
        category: 'Meal'
      }
    ],
    Milk: [
      {
        id: 13,
        title: 'Fresh Milk',
        price: '$10.00-$8.00',
        weight: '(1L)',
        category: 'Milk'
      },
      {
        id: 14,
        title: 'Chocolate Milk',
        price: '$18.00-$15.00',
        weight: '(1L)',
        category: 'Milk'
      },
      {
        id: 15,
        title: 'Almond Milk',
        price: '$22.00-$18.00',
        weight: '(1L)',
        category: 'Milk'
      },
      {
        id: 16,
        title: 'Soy Milk',
        price: '$20.00-$16.00',
        weight: '(1L)',
        category: 'Milk'
      }
    ],
    Cakes: [
      {
        id: 17,
        title: 'bakery bread viennoiserie...',
        price: '$40.00-$30.00',
        weight: '(1kg)',
        category: 'Cakes'
      },
      {
        id: 18,
        title: 'ICE cream cones sundae...',
        price: '$20.00-$15.00',
        weight: '(450ml)',
        category: 'Cakes'
      },
      {
        id: 19,
        title: 'Chocolate Cake',
        price: '$32.00-$25.00',
        weight: '(800g)',
        category: 'Cakes'
      },
      {
        id: 20,
        title: 'Cheesecake',
        price: '$38.00-$30.00',
        weight: '(600g)',
        category: 'Cakes'
      }
    ],
    Drinks: [
      {
        id: 21,
        title: 'Orange Juice',
        price: '$15.00-$12.00',
        weight: '(1L)',
        category: 'Drinks'
      },
      {
        id: 22,
        title: 'Cola Drink',
        price: '$8.00-$6.00',
        weight: '(2L)',
        category: 'Drinks'
      },
      {
        id: 23,
        title: 'Mineral Water',
        price: '$5.00-$3.00',
        weight: '(1.5L)',
        category: 'Drinks'
      },
      {
        id: 24,
        title: 'Energy Drink',
        price: '$12.00-$9.00',
        weight: '(500ml)',
        category: 'Drinks'
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
    <div className="p-6 max-w-7xl bg-gray-400  mx-auto font-sans" ref={containerRef}>
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
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <div className="flex justify-center items-center space-x-6 mt-10">
        <button
          onClick={prevCategory}
          className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-900 shadow-lg"
        >
          ‹
        </button>



        <button
          onClick={nextCategory}
          className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-900 shadow-lg"
        >
          ›
        </button>
      </div>


    </div>
  );
};

export default BestSellingSlider;