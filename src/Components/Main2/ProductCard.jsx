import Poster1 from "./poster1"


export default function ProductCard(){
  return (

<div className="flex mt-10 justify-center">
  <div className="bg-white absolute left-35 flex items-center justify-center flex-col pb-7 p-3 w-70">
    <div className="flex">
      <img className="z-6" src='src/img/sarfasl.svg' alt="" />
      <img className="-ml-13 h-93 mt-5" src='src/img/text-sarfasl.svg' alt="" />
    </div>
<p className="font-sofia text-[#333333] text-[32px]">Fresh Vegetable</p>
    <a href="">  
      <div className="bg-[#e21a422b] mt-3 px-6.5 py-4">
          <p className="font-semibold text-[#E21A43]">Order Now</p>
        </div>
    </a>
  
  </div>

  <Poster1 />

</div>
  )
}
