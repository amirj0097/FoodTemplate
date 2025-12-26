
import Shop from '/src/icon/Shop(2).svg'
import Mosbat from '/src/icon/Mosbat_red.svg'
import Cofee from '/src/img/Cofee.svg'
import Apel from '/src/img/apel.jpg'
import Sabzee from '/src/img/Sabzigat.jpg'
import Meal from '/src/img/Meal.jpg'
import Milk from '/src/img/Milk.jpg'
import Cakes from '/src/img/Cakes.jpg'
import Drink from '/src/img/Drinks.jpg'

import React, { useState, useEffect } from 'react';



const ProductShowcase = () => {
  // داده‌های کامل‌تر با تصاویر
  const allProducts = [
    // Fruits (12 items)
    { id: 1, name: 'Low Fat Peanut Oil', category: 'Fruits', originalPrice: 26.00, discountPrice: 20.00, rating: 4, image: Apel},
    { id: 2, name: 'Fresh Apple', category: 'Fruits', originalPrice: 12.00, discountPrice: 8.00, rating: 5, image: Apel },
    { id: 3, name: 'Kiwifruit Food', category: 'Fruits', originalPrice: 8.00, discountPrice: 5.00, rating: 4, image: Apel },
    { id: 4, name: 'Organic Banana', category: 'Fruits', originalPrice: 6.00, discountPrice: 4.00, rating: 4, image: Apel },
    { id: 5, name: 'Sweet Orange', category: 'Fruits', originalPrice: 10.00, discountPrice: 7.00, rating: 5, image: Apel },
    { id: 6, name: 'Juicy Watermelon', category: 'Fruits', originalPrice: 15.00, discountPrice: 12.00, rating: 4, image: Apel },
    { id: 7, name: 'Fresh Grapes', category: 'Fruits', originalPrice: 9.00, discountPrice: 6.50, rating: 4, image: Apel },
    { id: 8, name: 'Ripe Mango', category: 'Fruits', originalPrice: 14.00, discountPrice: 10.00, rating: 5, image: Apel },
    { id: 9, name: 'Sweet Strawberry', category: 'Fruits', originalPrice: 18.00, discountPrice: 14.00, rating: 4, image: Apel },
    { id: 10, name: 'Fresh Pineapple', category: 'Fruits', originalPrice: 11.00, discountPrice: 8.00, rating: 4, image: Apel },
    { id: 11, name: 'Organic Avocado', category: 'Fruits', originalPrice: 16.00, discountPrice: 12.00, rating: 5, image: Apel },
    { id: 12, name: 'Sweet Cherry', category: 'Fruits', originalPrice: 22.00, discountPrice: 18.00, rating: 4, image: Apel },

    // Vegetable (12 items)
    { id: 13, name: 'Fresh Carrot', category: 'Vegetable', originalPrice: 5.00, discountPrice: 3.50, rating: 4, image: Sabzee },
    { id: 14, name: 'Organic Tomato', category: 'Vegetable', originalPrice: 7.00, discountPrice: 5.00, rating: 5, image: Sabzee },
    { id: 15, name: 'Green Broccoli', category: 'Vegetable', originalPrice: 9.00, discountPrice: 6.50, rating: 4, image: Sabzee},
    { id: 16, name: 'Fresh Lettuce', category: 'Vegetable', originalPrice: 4.00, discountPrice: 2.50, rating: 4, image: Sabzee },
    { id: 17, name: 'Organic Spinach', category: 'Vegetable', originalPrice: 6.00, discountPrice: 4.00, rating: 5, image: Sabzee},
    { id: 18, name: 'Crisp Cucumber', category: 'Vegetable', originalPrice: 3.00, discountPrice: 2.00, rating: 4, image: Sabzee},
    { id: 19, name: 'Bell Pepper', category: 'Vegetable', originalPrice: 8.00, discountPrice: 6.00, rating: 4, image:  Sabzee},
    { id: 20, name: 'Fresh Onion', category: 'Vegetable', originalPrice: 5.00, discountPrice: 3.00, rating: 4, image: Sabzee},
    { id: 21, name: 'Organic Garlic', category: 'Vegetable', originalPrice: 10.00, discountPrice: 7.00, rating: 5, image: Sabzee},
    { id: 22, name: 'Sweet Potato', category: 'Vegetable', originalPrice: 7.00, discountPrice: 5.00, rating: 4, image: Sabzee},
    { id: 23, name: 'Fresh Corn', category: 'Vegetable', originalPrice: 9.00, discountPrice: 6.00, rating: 4, image: Sabzee},
    { id: 24, name: 'Green Beans', category: 'Vegetable', originalPrice: 6.00, discountPrice: 4.50, rating: 4, image: Sabzee},

    // Meal (12 items)
    { id: 25, name: 'Prime Beef', category: 'Meal', originalPrice: 35.00, discountPrice: 28.00, rating: 5, image: Meal },
    { id: 26, name: 'Chicken Meat', category: 'Meal', originalPrice: 15.00, discountPrice: 10.00, rating: 4, image: Meal },
    { id: 27, name: 'Fresh Salmon', category: 'Meal', originalPrice: 40.00, discountPrice: 32.00, rating: 5, image: Meal },
    { id: 28, name: 'Organic Eggs', category: 'Meal', originalPrice: 8.00, discountPrice: 6.00, rating: 4, image: Meal },
    { id: 29, name: 'Pork Chops', category: 'Meal', originalPrice: 22.00, discountPrice: 18.00, rating: 4, image: Meal },
    { id: 30, name: 'Turkey Breast', category: 'Meal', originalPrice: 25.00, discountPrice: 20.00, rating: 5, image: Meal },
    { id: 31, name: 'Ground Beef', category: 'Meal', originalPrice: 18.00, discountPrice: 14.00, rating: 4, image: Meal },
    { id: 32, name: 'Lamb Chops', category: 'Meal', originalPrice: 45.00, discountPrice: 36.00, rating: 5, image: Meal },
    { id: 33, name: 'Bacon Strips', category: 'Meal', originalPrice: 12.00, discountPrice: 9.00, rating: 4, image: Meal },
    { id: 34, name: 'Sausages', category: 'Meal', originalPrice: 10.00, discountPrice: 7.50, rating: 4, image: Meal },
    { id: 35, name: 'Duck Meat', category: 'Meal', originalPrice: 30.00, discountPrice: 24.00, rating: 5, image: Meal },
    { id: 36, name: 'Veal Cutlet', category: 'Meal', originalPrice: 38.00, discountPrice: 30.00, rating: 4, image: Meal },

    // Milk (12 items)
    { id: 37, name: 'Coconut Milk', category: 'Milk', originalPrice: 8.00, discountPrice: 6.00, rating: 5, image:Milk },
    { id: 38, name: 'Delicious Milk', category: 'Milk', originalPrice: 12.00, discountPrice: 8.00, rating: 4, image: Milk},
    { id: 39, name: 'Almond Milk', category: 'Milk', originalPrice: 10.00, discountPrice: 7.00, rating: 5, image: Milk },
    { id: 40, name: 'Soy Milk', category: 'Milk', originalPrice: 9.00, discountPrice: 6.50, rating: 4, image:Milk },
    { id: 41, name: 'Oat Milk', category: 'Milk', originalPrice: 11.00, discountPrice: 8.00, rating: 5, image: Milk},
    { id: 42, name: 'Organic Milk', category: 'Milk', originalPrice: 14.00, discountPrice: 10.00, rating: 4, image: Milk},
    { id: 43, name: 'Goat Milk', category: 'Milk', originalPrice: 16.00, discountPrice: 12.00, rating: 5, image: Milk},
    { id: 44, name: 'Cashew Milk', category: 'Milk', originalPrice: 13.00, discountPrice: 9.00, rating: 4, image: Milk },
    { id: 45, name: 'Rice Milk', category: 'Milk', originalPrice: 9.00, discountPrice: 6.00, rating: 4, image: Milk },
    { id: 46, name: 'Hemp Milk', category: 'Milk', originalPrice: 15.00, discountPrice: 11.00, rating: 5, image: Milk },
    { id: 47, name: 'Buffalo Milk', category: 'Milk', originalPrice: 18.00, discountPrice: 14.00, rating: 4, image: Milk },
    { id: 48, name: 'Lactose-Free Milk', category: 'Milk', originalPrice: 12.00, discountPrice: 9.00, rating: 5, image: Milk },

    // Cakes (12 items)
    { id: 49, name: 'Cream Cake', category: 'Cakes', originalPrice: 17.00, discountPrice: 12.00, rating: 5, image: Cakes },
    { id: 50, name: 'Chocolate Cake', category: 'Cakes', originalPrice: 20.00, discountPrice: 15.00, rating: 5, image: Cakes },
    { id: 51, name: 'Cheesecake', category: 'Cakes', originalPrice: 22.00, discountPrice: 17.00, rating: 5, image: Cakes },
    { id: 52, name: 'Red Velvet', category: 'Cakes', originalPrice: 25.00, discountPrice: 20.00, rating: 5, image: Cakes },
    { id: 53, name: 'Carrot Cake', category: 'Cakes', originalPrice: 18.00, discountPrice: 14.00, rating: 4, image: Cakes },
    { id: 54, name: 'Birthday Cake', category: 'Cakes', originalPrice: 30.00, discountPrice: 24.00, rating: 5, image: Cakes },
    { id: 55, name: 'Cupcakes', category: 'Cakes', originalPrice: 12.00, discountPrice: 9.00, rating: 4, image: Cakes },
    { id: 56, name: 'Fruit Cake', category: 'Cakes', originalPrice: 16.00, discountPrice: 12.00, rating: 4, image: Cakes },
    { id: 57, name: 'Tiramisu', category: 'Cakes', originalPrice: 24.00, discountPrice: 19.00, rating: 5, image: Cakes },
    { id: 58, name: 'Brownies', category: 'Cakes', originalPrice: 10.00, discountPrice: 7.00, rating: 4, image: Cakes },
    { id: 59, name: 'Donuts', category: 'Cakes', originalPrice: 8.00, discountPrice: 6.00, rating: 4, image: Cakes },
    { id: 60, name: 'Muffins', category: 'Cakes', originalPrice: 9.00, discountPrice: 6.50, rating: 4, image: Cakes },

    // Drinks (12 items)
    { id: 61, name: 'Fresh Black Coffee', category: 'Drinks', originalPrice: 25.00, discountPrice: 20.00, rating: 5, image: Drink },
    { id: 62, name: 'Mix Ready Juice', category: 'Drinks', originalPrice: 15.00, discountPrice: 8.00, rating: 4, image: Drink },
    { id: 63, name: 'Green Tea', category: 'Drinks', originalPrice: 12.00, discountPrice: 9.00, rating: 5, image: Drink },
    { id: 64, name: 'Orange Juice', category: 'Drinks', originalPrice: 8.00, discountPrice: 6.00, rating: 4, image: Drink },
    { id: 65, name: 'Smoothie', category: 'Drinks', originalPrice: 10.00, discountPrice: 7.50, rating: 4, image: Drink },
    { id: 66, name: 'Iced Tea', category: 'Drinks', originalPrice: 7.00, discountPrice: 5.00, rating: 4, image: Drink },
    { id: 67, name: 'Lemonade', category: 'Drinks', originalPrice: 6.00, discountPrice: 4.00, rating: 5, image: Drink },
    { id: 68, name: 'Energy Drink', category: 'Drinks', originalPrice: 9.00, discountPrice: 6.50, rating: 4, image: Drink },
    { id: 69, name: 'Herbal Tea', category: 'Drinks', originalPrice: 11.00, discountPrice: 8.00, rating: 5, image: Drink },
    { id: 70, name: 'Sparkling Water', category: 'Drinks', originalPrice: 5.00, discountPrice: 3.50, rating: 4, image: Drink },
    { id: 71, name: 'Hot Chocolate', category: 'Drinks', originalPrice: 14.00, discountPrice: 10.00, rating: 5, image: Drink },
    { id: 72, name: 'Apple Juice', category: 'Drinks', originalPrice: 9.00, discountPrice: 6.00, rating: 4, image: Drink },
  ];

  // دسته‌بندی‌ها
  const categories = ['Fruits', 'Vegetable', 'Meal', 'Milk', 'Cakes', 'Drinks'];

  // state‌ها
  const [selectedCategory, setSelectedCategory] = useState('Fruits');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // فیلتر کردن محصولات بر اساس دسته‌بندی
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(allProducts.slice(0, 12));
    } else {
      const filtered = allProducts.filter(product => product.category === selectedCategory);
      setFilteredProducts(filtered.slice(0, 12));
    }
  }, [selectedCategory]);

  // تایمر شمارش معکوس 3 روز
  useEffect(() => {
    const totalSeconds = timeLeft.days * 86400 + timeLeft.hours * 3600 + timeLeft.minutes * 60 + timeLeft.seconds;

    if (totalSeconds <= 0) {
      // ریست تایمر به 3 روز
      setTimeLeft({
        days: 3,
        hours: 0,
        minutes: 0,
        seconds: 0
      });
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const totalSeconds = prevTime.days * 86400 + prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds;

        if (totalSeconds <= 0) {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const newTotalSeconds = totalSeconds - 1;
        const days = Math.floor(newTotalSeconds / 86400);
        const hours = Math.floor((newTotalSeconds % 86400) / 3600);
        const minutes = Math.floor((newTotalSeconds % 3600) / 60);
        const seconds = newTotalSeconds % 60;

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // کامپوننت ستاره‌ها
  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-xs ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          >
            ★
          </span>
        ))}
        <span className="text-gray-500 text-xs ml-1">({rating}.0)</span>
      </div>
    );
  };

  // کامپوننت تایمر
  const TimerBox = ({ value, label }) => (
    <div className="flex flex-col  items-center">
      <div className="bg-[#E21A4326] w-[47.5px] h-11.5 flex flex-col items-center justify-center ">
        <span className="text-sm font-bold text-red-600">{value.toString().padStart(2, '0')}</span>
        <span className="text-[8px] text-[#E21A43] font-semibold">{label}</span>
      </div>
    </div>
  );

  return (
    <div className="h-[730px] flex  bg-gray-50 items-center">
      <div className="max-w-7xl mx-auto">
        {/* عنوان اصلی */}




        <div className="flex flex-col lg:flex-row gap-6">
          {/* بخش سمت چپ - تخفیف ویژه */}
          <div className="w-[280px] h-135 border border-[#EEEEEE] bg-[#ffffff]">
            <div className=" p-1 ">



              {/* تصویر محصول */}
              <div className="mb-3">
                <div className=" rounded-lg p-2">
                  <div className="h-58  overflow-hidden">
                    <img
                      src={Cofee}
                      alt="Fresh Black Coffee"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>



              {/* تایمر */}
              <div className="px-2.5">
                <div className="mb-3 flex justify-center">

                  <div className="flex  gap-5">
                    <TimerBox value={timeLeft.days} label="DAY" />
                    <TimerBox value={timeLeft.hours} label="HOUR" />
                    <TimerBox value={timeLeft.minutes} label="MIN" />
                    <TimerBox value={timeLeft.seconds} label="SCE" />
                  </div>
                </div>

                <div className="mb-4 flex flex-col items-start justify-start w-full">
                  <h2 className="text-xl font-sofia text-[#333333]  mb-2">
                    Fresh Black Coffee
                  </h2>

                  <p className="text-gray-600 text-sm mb-3 text-left ">
                    There are many variations of a passages of Lorem Ipsum available
                  </p>

                  <div className="flex items-center gap-5 mb-2">
                    <span className="text-[17px] text-gray-500 line-through">$25.00</span>
                    <span className="text-xl font-bold text-red-600">$20.00</span>
                  </div>

                </div>


                <div className="flex  gap-5">
                  <button className='bg-[#E21A43] text-[#fff] cursor-pointer flex justify-center font-sofia  items-center gap-3 py-3 w-44'><img src={Shop} alt="" />Add to Bag</button>
                  <button className='bg-[#E21A4333] px-4  cursor-pointer flex items-center justify-center '><img src={Mosbat} alt="" /></button>
                </div>

              </div>
            </div>


          </div>

          {/* بخش سمت راست - محصولات */}
          <div className="lg:w-3/5">

            <div class="flex w-40 mr-auto ml-auto items-center justify-center">
              <div class="h-px  flex-grow bg-gray-500"></div>
              <span class="px-2 text-[#333333]  font-sofia"> Best Selling</span>
              <div class="h-px  flex-grow bg-gray-500"></div>
            </div>

            {/* نوار دسته‌بندی‌ها */}
            <div className="flex justify-center flex-wrap gap-1 mb-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 cursor-pointer rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === category
                    ? 'text-red-600  underline font-semibold'
                    : ' text-gray-700 '
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* گرید محصولات کامپکت */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white   px-2  transition-shadow duration-200 border border-gray-100">
                  {/* تصویر محصول */}
                  <div className="flex items-center gap-2 justify-center">

                    <div className="w-1/2 py-2 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full flex  h-25 object-cover"
                      />
                    </div>


                    {/* اطلاعات محصول */}
                    <div className='w-1/2 gap-y-1 h-26 flex flex-col justify-center items-start'>
                      <h3 className="font-semibold  text-[#333333] text-xs text-left  line-clamp-1">{product.name}</h3>

                      {/* قیمت‌ها */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                        <span className="font-bold text-xs  text-[#E21A43] text-sm">${product.discountPrice.toFixed(2)}</span>
                      </div>

                      {/* دکمه خرید */}
                      <button type='submit' className="w-[73%] cursor-pointer text-[#E21A43]  border border-[#E21A43] text-xs  py-2.5 transition duration-300">
                        Buy Now
                      </button>

                      {/* رتبه‌بندی */}
                      <div className="scale-60 flex w-1/10">
                        <StarRating className='text-[#E21A43]' rating={product.rating} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;