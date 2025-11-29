

     const ProductCard = ({ id, price,price1,weight,textimage,title,imagebox1, imagebox2,imagebox3,imagebox4,image }) => {
      const formatPrice = (price) => {
      return price.toLocaleString('fa-IR') + ' تومان';
     };
    return(
        
        <div  className="flex p-5 gap-15 bg-amber-300">

          <div data-product-id={id} className="bg-white flex items-center justify-end flex-col  pb-7  p-3 w-70">
            <div className="flex">
              <img className="z-6" src={image} alt="" />
              <img className="-ml-13 h-93 mt-5" src={textimage} alt="" />
            </div>
            <img src={title} alt="" />
            <div className="bg-[#e21a422b] mt-3 px-6.5 py-4">
             <a href=""> <img src={imagebox1} alt="Order Now" /></a>
            </div>
          </div>


          <div className="bg-white w-60 h-90 mt-auto mb-auto flex justify-center  items-start">
            <img className="p-3" src={image} alt="" />

             <a className="" href=""> <img className="border-r-1 border-[#888888]  w-15 pr-2" src={imagebox1} alt="" /></a>
             <a className="" href=""> <img className="border-r-1 border-[#888888] w-15 pr-2" src={imagebox2} alt="" /></a>
             <a className="" href=""> <img className="border-r-1 border-[#888888] w-15   pr-2" src={imagebox3} alt="" /></a>
             <a className="" href=""> <img className="w-10 pr-0 invert-100" src={imagebox4} alt="" /></a>

            
            <div className="absolute mt-70 w-50">
              <img src={textimage} alt="" />
            </div>

              <div className="flex w-50 absolute mt-76 gap-3">
                <span className="line-through font-semibold">{price1}</span>
                <span className="font-bold">{price}</span>
                <span>{weight}</span>
              </div>


          </div>

        </div>
    )
}


export default ProductCard