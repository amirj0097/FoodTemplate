// ProductList.js
import React from 'react';
import ProductCard from './ProductCard';


const ProductList = () => {
  const products = [
    {
        
      id: 1,
      textimage: 'src/img/text-sarfasl.svg',
      image: 'src/img/sarfasl.svg',
      imagebox1:'src/img/Order Now.svg',
      title:'src/img/Title-sarfasl.svg'
    
    },
    {
      id: 2,
      image: 'src/img/Noone.svg',
      textimage:'src/img/textnoone.svg',
      imagebox1:'src/img/+.svg',
      imagebox2:'src/icon/charkhesh.svg',
      imagebox3:'src/icon/Like.svg',
      imagebox4:'src/icon/Search.svg',
      price1: '$40.00',
      price: '$30.00',
      weight: '(1kg)'
    }
    // {
    //   id: 3,
    //   name: 'هدفون سونی',
    //   price: 2500000,
    //   category: 'الکترونیکی',
    //   image: '/images/headphone.jpg'
    // }
    // {
    //   id: 4,
    //   name: 'کتاب React پیشرفته',
    //   price: 800000,
    //   category: 'کتاب',
    //   image: '/images/book.jpg'
    // },
    // {
    //   id: 5,
    //   name: 'ماوس گیمینگ',
    //   price: 1200000,
    //   category: 'الکترونیکی',
    //   image: '/images/mouse.jpg'
    // }
  ];

  return (
   
      <div className="products-grid flex">
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            price1={product.price1}
            price={product.price}
            textimage={product.textimage}
            imagebox1={product.imagebox1}
            imagebox2={product.imagebox2}
            imagebox3={product.imagebox3}
            imagebox4={product.imagebox4}
            title={product.title}
            weight={product.weight}
            image={product.image}
          />
        ))}
      </div>

  );
};

export default ProductList;

