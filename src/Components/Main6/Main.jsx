
import Shop from '/src/icon/Shop(2).svg'
import Mosbat from '/src/icon/Mosbat_red.svg'
import Cofee from '/src/img/Cofee.svg'

import React, { useState, useEffect } from 'react';



const ProductShowcase = () => {
  // داده‌های کامل‌تر با تصاویر
  const allProducts = [
    // Fruits (12 items)
    { id: 1, name: 'Low Fat Peanut Oil', category: 'Fruits', originalPrice: 26.00, discountPrice: 20.00, rating: 4, image: 'https://images.unsplash.com/photo-1536975700520-2d3e8ad4d5dc?w=400&h=300&fit=crop&crop=center' },
    { id: 2, name: 'Fresh Apple', category: 'Fruits', originalPrice: 12.00, discountPrice: 8.00, rating: 5, image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=300&fit=crop&crop=center' },
    { id: 3, name: 'Kiwifruit Food', category: 'Fruits', originalPrice: 8.00, discountPrice: 5.00, rating: 4, image: 'https://images.unsplash.com/photo-1550253006-4e6e9a07aa4b?w=400&h=300&fit=crop&crop=center' },
    { id: 4, name: 'Organic Banana', category: 'Fruits', originalPrice: 6.00, discountPrice: 4.00, rating: 4, image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&h=300&fit=crop&crop=center' },
    { id: 5, name: 'Sweet Orange', category: 'Fruits', originalPrice: 10.00, discountPrice: 7.00, rating: 5, image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=300&fit=crop&crop=center' },
    { id: 6, name: 'Juicy Watermelon', category: 'Fruits', originalPrice: 15.00, discountPrice: 12.00, rating: 4, image: 'https://images.unsplash.com/photo-1563114773-8426e8455f8a?w=400&h=300&fit=crop&crop=center' },
    { id: 7, name: 'Fresh Grapes', category: 'Fruits', originalPrice: 9.00, discountPrice: 6.50, rating: 4, image: 'https://images.unsplash.com/photo-1592924688932-167677a56b1c?w=400&h=300&fit=crop&crop=center' },
    { id: 8, name: 'Ripe Mango', category: 'Fruits', originalPrice: 14.00, discountPrice: 10.00, rating: 5, image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=300&fit=crop&crop=center' },
    { id: 9, name: 'Sweet Strawberry', category: 'Fruits', originalPrice: 18.00, discountPrice: 14.00, rating: 4, image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=300&fit=crop&crop=center' },
    { id: 10, name: 'Fresh Pineapple', category: 'Fruits', originalPrice: 11.00, discountPrice: 8.00, rating: 4, image: 'https://images.unsplash.com/photo-1580651315530-69c8e0026377?w=400&h=300&fit=crop&crop=center' },
    { id: 11, name: 'Organic Avocado', category: 'Fruits', originalPrice: 16.00, discountPrice: 12.00, rating: 5, image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=300&fit=crop&crop=center' },
    { id: 12, name: 'Sweet Cherry', category: 'Fruits', originalPrice: 22.00, discountPrice: 18.00, rating: 4, image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=300&fit=crop&crop=center' },

    // Vegetable (12 items)
    { id: 13, name: 'Fresh Carrot', category: 'Vegetable', originalPrice: 5.00, discountPrice: 3.50, rating: 4, image: 'https://images.unsplash.com/photo-1598170845058-78131a90f4bf?w=400&h=300&fit=crop&crop=center' },
    { id: 14, name: 'Organic Tomato', category: 'Vegetable', originalPrice: 7.00, discountPrice: 5.00, rating: 5, image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop&crop=center' },
    { id: 15, name: 'Green Broccoli', category: 'Vegetable', originalPrice: 9.00, discountPrice: 6.50, rating: 4, image: 'https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?w=400&h=300&fit=crop&crop=center' },
    { id: 16, name: 'Fresh Lettuce', category: 'Vegetable', originalPrice: 4.00, discountPrice: 2.50, rating: 4, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop&crop=center' },
    { id: 17, name: 'Organic Spinach', category: 'Vegetable', originalPrice: 6.00, discountPrice: 4.00, rating: 5, image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop&crop=center' },
    { id: 18, name: 'Crisp Cucumber', category: 'Vegetable', originalPrice: 3.00, discountPrice: 2.00, rating: 4, image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&h=300&fit=crop&crop=center' },
    { id: 19, name: 'Bell Pepper', category: 'Vegetable', originalPrice: 8.00, discountPrice: 6.00, rating: 4, image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa8a?w=400&h=300&fit=crop&crop=center' },
    { id: 20, name: 'Fresh Onion', category: 'Vegetable', originalPrice: 5.00, discountPrice: 3.00, rating: 4, image: 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?w=400&h=300&fit=crop&crop=center' },
    { id: 21, name: 'Organic Garlic', category: 'Vegetable', originalPrice: 10.00, discountPrice: 7.00, rating: 5, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop&crop=center' },
    { id: 22, name: 'Sweet Potato', category: 'Vegetable', originalPrice: 7.00, discountPrice: 5.00, rating: 4, image: 'https://images.unsplash.com/photo-1561024356-9e3bfb6e058e?w=400&h=300&fit=crop&crop=center' },
    { id: 23, name: 'Fresh Corn', category: 'Vegetable', originalPrice: 9.00, discountPrice: 6.00, rating: 4, image: 'https://images.unsplash.com/photo-1563241527-3001a7494b02?w=400&h=300&fit=crop&crop=center' },
    { id: 24, name: 'Green Beans', category: 'Vegetable', originalPrice: 6.00, discountPrice: 4.50, rating: 4, image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&h=300&fit=crop&crop=center' },

    // Meal (12 items)
    { id: 25, name: 'Prime Beef', category: 'Meal', originalPrice: 35.00, discountPrice: 28.00, rating: 5, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop&crop=center' },
    { id: 26, name: 'Chicken Meat', category: 'Meal', originalPrice: 15.00, discountPrice: 10.00, rating: 4, image: 'https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?w=400&h=300&fit=crop&crop=center' },
    { id: 27, name: 'Fresh Salmon', category: 'Meal', originalPrice: 40.00, discountPrice: 32.00, rating: 5, image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=400&h=300&fit=crop&crop=center' },
    { id: 28, name: 'Organic Eggs', category: 'Meal', originalPrice: 8.00, discountPrice: 6.00, rating: 4, image: 'https://images.unsplash.com/photo-1521685468847-de0a1a3c41a8?w=400&h=300&fit=crop&crop=center' },
    { id: 29, name: 'Pork Chops', category: 'Meal', originalPrice: 22.00, discountPrice: 18.00, rating: 4, image: 'https://images.unsplash.com/photo-1602471629090-4c9076c6c95e?w=400&h=300&fit=crop&crop=center' },
    { id: 30, name: 'Turkey Breast', category: 'Meal', originalPrice: 25.00, discountPrice: 20.00, rating: 5, image: 'https://images.unsplash.com/photo-1602471629090-4c9076c6c95e?w=400&h=300&fit=crop&crop=center' },
    { id: 31, name: 'Ground Beef', category: 'Meal', originalPrice: 18.00, discountPrice: 14.00, rating: 4, image: 'https://images.unsplash.com/photo-1603048297172-c6094ad10c5e?w=400&h=300&fit=crop&crop=center' },
    { id: 32, name: 'Lamb Chops', category: 'Meal', originalPrice: 45.00, discountPrice: 36.00, rating: 5, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&crop=center' },
    { id: 33, name: 'Bacon Strips', category: 'Meal', originalPrice: 12.00, discountPrice: 9.00, rating: 4, image: 'https://images.unsplash.com/photo-1529198792454-468c652c52dd?w=400&h=300&fit=crop&crop=center' },
    { id: 34, name: 'Sausages', category: 'Meal', originalPrice: 10.00, discountPrice: 7.50, rating: 4, image: 'https://images.unsplash.com/photo-1626073191585-69497b43e8c5?w=400&h=300&fit=crop&crop=center' },
    { id: 35, name: 'Duck Meat', category: 'Meal', originalPrice: 30.00, discountPrice: 24.00, rating: 5, image: 'https://images.unsplash.com/photo-1625943917369-86e50c6c9a74?w=400&h=300&fit=crop&crop=center' },
    { id: 36, name: 'Veal Cutlet', category: 'Meal', originalPrice: 38.00, discountPrice: 30.00, rating: 4, image: 'https://images.unsplash.com/photo-1603048297172-c6094ad10c5e?w=400&h=300&fit=crop&crop=center' },

    // Milk (12 items)
    { id: 37, name: 'Coconut Milk', category: 'Milk', originalPrice: 8.00, discountPrice: 6.00, rating: 5, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop&crop=center' },
    { id: 38, name: 'Delicious Milk', category: 'Milk', originalPrice: 12.00, discountPrice: 8.00, rating: 4, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop&crop=center' },
    { id: 39, name: 'Almond Milk', category: 'Milk', originalPrice: 10.00, discountPrice: 7.00, rating: 5, image: 'https://images.unsplash.com/photo-1622484207762-9e57f7e6c2c8?w=400&h=300&fit=crop&crop=center' },
    { id: 40, name: 'Soy Milk', category: 'Milk', originalPrice: 9.00, discountPrice: 6.50, rating: 4, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop&crop=center' },
    { id: 41, name: 'Oat Milk', category: 'Milk', originalPrice: 11.00, discountPrice: 8.00, rating: 5, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop&crop=center' },
    { id: 42, name: 'Organic Milk', category: 'Milk', originalPrice: 14.00, discountPrice: 10.00, rating: 4, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop&crop=center' },
    { id: 43, name: 'Goat Milk', category: 'Milk', originalPrice: 16.00, discountPrice: 12.00, rating: 5, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop&crop=center' },
    { id: 44, name: 'Cashew Milk', category: 'Milk', originalPrice: 13.00, discountPrice: 9.00, rating: 4, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop&crop=center' },
    { id: 45, name: 'Rice Milk', category: 'Milk', originalPrice: 9.00, discountPrice: 6.00, rating: 4, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop&crop=center' },
    { id: 46, name: 'Hemp Milk', category: 'Milk', originalPrice: 15.00, discountPrice: 11.00, rating: 5, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop&crop=center' },
    { id: 47, name: 'Buffalo Milk', category: 'Milk', originalPrice: 18.00, discountPrice: 14.00, rating: 4, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop&crop=center' },
    { id: 48, name: 'Lactose-Free Milk', category: 'Milk', originalPrice: 12.00, discountPrice: 9.00, rating: 5, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop&crop=center' },

    // Cakes (12 items)
    { id: 49, name: 'Cream Cake', category: 'Cakes', originalPrice: 17.00, discountPrice: 12.00, rating: 5, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center' },
    { id: 50, name: 'Chocolate Cake', category: 'Cakes', originalPrice: 20.00, discountPrice: 15.00, rating: 5, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center' },
    { id: 51, name: 'Cheesecake', category: 'Cakes', originalPrice: 22.00, discountPrice: 17.00, rating: 5, image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=300&fit=crop&crop=center' },
    { id: 52, name: 'Red Velvet', category: 'Cakes', originalPrice: 25.00, discountPrice: 20.00, rating: 5, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center' },
    { id: 53, name: 'Carrot Cake', category: 'Cakes', originalPrice: 18.00, discountPrice: 14.00, rating: 4, image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=300&fit=crop&crop=center' },
    { id: 54, name: 'Birthday Cake', category: 'Cakes', originalPrice: 30.00, discountPrice: 24.00, rating: 5, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center' },
    { id: 55, name: 'Cupcakes', category: 'Cakes', originalPrice: 12.00, discountPrice: 9.00, rating: 4, image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=300&fit=crop&crop=center' },
    { id: 56, name: 'Fruit Cake', category: 'Cakes', originalPrice: 16.00, discountPrice: 12.00, rating: 4, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center' },
    { id: 57, name: 'Tiramisu', category: 'Cakes', originalPrice: 24.00, discountPrice: 19.00, rating: 5, image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=300&fit=crop&crop=center' },
    { id: 58, name: 'Brownies', category: 'Cakes', originalPrice: 10.00, discountPrice: 7.00, rating: 4, image: 'https://images.unsplash.com/photo-1564355808539-22fda35c7a5e?w=400&h=300&fit=crop&crop=center' },
    { id: 59, name: 'Donuts', category: 'Cakes', originalPrice: 8.00, discountPrice: 6.00, rating: 4, image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center' },
    { id: 60, name: 'Muffins', category: 'Cakes', originalPrice: 9.00, discountPrice: 6.50, rating: 4, image: 'https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?w=400&h=300&fit=crop&crop=center' },

    // Drinks (12 items)
    { id: 61, name: 'Fresh Black Coffee', category: 'Drinks', originalPrice: 25.00, discountPrice: 20.00, rating: 5, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&crop=center' },
    { id: 62, name: 'Mix Ready Juice', category: 'Drinks', originalPrice: 15.00, discountPrice: 8.00, rating: 4, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop&crop=center' },
    { id: 63, name: 'Green Tea', category: 'Drinks', originalPrice: 12.00, discountPrice: 9.00, rating: 5, image: 'https://images.unsplash.com/photo-1597481499751-6d4d6eff5c42?w=400&h=300&fit=crop&crop=center' },
    { id: 64, name: 'Orange Juice', category: 'Drinks', originalPrice: 8.00, discountPrice: 6.00, rating: 4, image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop&crop=center' },
    { id: 65, name: 'Smoothie', category: 'Drinks', originalPrice: 10.00, discountPrice: 7.50, rating: 4, image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop&crop=center' },
    { id: 66, name: 'Iced Tea', category: 'Drinks', originalPrice: 7.00, discountPrice: 5.00, rating: 4, image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400&h=300&fit=crop&crop=center' },
    { id: 67, name: 'Lemonade', category: 'Drinks', originalPrice: 6.00, discountPrice: 4.00, rating: 5, image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop&crop=center' },
    { id: 68, name: 'Energy Drink', category: 'Drinks', originalPrice: 9.00, discountPrice: 6.50, rating: 4, image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400&h=300&fit=crop&crop=center' },
    { id: 69, name: 'Herbal Tea', category: 'Drinks', originalPrice: 11.00, discountPrice: 8.00, rating: 5, image: 'https://images.unsplash.com/photo-1597481499751-6d4d6eff5c42?w=400&h=300&fit=crop&crop=center' },
    { id: 70, name: 'Sparkling Water', category: 'Drinks', originalPrice: 5.00, discountPrice: 3.50, rating: 4, image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=300&fit=crop&crop=center' },
    { id: 71, name: 'Hot Chocolate', category: 'Drinks', originalPrice: 14.00, discountPrice: 10.00, rating: 5, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop&crop=center' },
    { id: 72, name: 'Apple Juice', category: 'Drinks', originalPrice: 9.00, discountPrice: 6.00, rating: 4, image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop&crop=center' },
  ];

  // دسته‌بندی‌ها
  const categories = ['All', 'Fruits', 'Vegetable', 'Meal', 'Milk', 'Cakes', 'Drinks'];

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
    <div className="min-h-screen flex  bg-gray-50 items-center md:p-6">
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
                  <button className='bg-[#E21A43] text-[#fff] cursor-pointer flex justify-center font-sofia  items-center gap-3 py-4 w-42'><img src={Shop} alt="" />Add to Bag</button>
                  <button className='bg-[#E21A4333]  py-4 w-15 cursor-pointer flex items-center justify-center '><img src={Mosbat} alt="" /></button>
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
                      <h3 className="font-semibold  text-[#333333] text-xs line-clamp-1">{product.name}</h3>

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