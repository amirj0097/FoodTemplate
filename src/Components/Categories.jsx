



export default function Categories(){
    return(
             <div className="flex flex-row-reverse absolute bg-white shadow-xl shadow-gray-3  00 items-center justify-center gap-19 py-8 -mt-15 ml-50  w-[70%]  px-8">

        <a className="hover:scale-[1.3] hover:duration-500 hover:text-[#E21A43] font-semibold text-[#666666] duration-400"  href="">
          <span className="flex flex-col items-center"> <img src="src/img/Sweets (2).svg" alt="Sweets" />Sweets</span>
          </a>
        <a className="hover:scale-[1.3] hover:duration-500 font-semibold hover:text-[#E21A43] text-[#666666] duration-400" href="">
          <span className="flex flex-col items-center"><img src="src/img/Pasta (2).svg" alt="" />Pasta</span> 
          
          </a>
        <a className="hover:scale-[1.3] hover:text-[#E21A43] font-semibold hover:duration-500 text-[#666666] duration-400" href="">
           <span className="flex flex-col items-center"><img src="src/img/Meat (2).svg" alt="Meat" />Meat</span>
          </a>
        <a className="hover:scale-[1.3] hover:text-[#E21A43] font-semibold hover:duration-500 text-[#666666] duration-400" href="">
           <span className="flex flex-col items-center"><img src="src/img/Bakery (2).svg" alt="Bakery" />Bakery</span>
          </a>
        <a className="hover:scale-[1.3] hover:text-[#E21A43] font-semibold hover:duration-500 text-[#666666] duration-400"  href="">
           <span className="flex flex-col items-center"><img src="src/img/Semi-finished (2).svg" alt="Semi-finished" />Semi-finished</span>
          </a>
        <a className="hover:scale-[1.3] hover:text-[#E21A43] font-semibold hover:duration-500 text-[#666666] duration-400" href="">
           <span className="flex flex-col items-center"><img src="src/img/Vegetables (2).svg" alt="Vegetables" />Vegetables</span>
          </a>
        <a className="hover:scale-[1.3] hover:text-[#E21A43] font-semibold hover:duration-500 text-[#666666] duration-400" href="">
          <span className="flex flex-col items-center"><img src="src/img/Fruits (2).svg" alt="Fruits" />Fruits</span>
          </a>

      </div>
    )
}