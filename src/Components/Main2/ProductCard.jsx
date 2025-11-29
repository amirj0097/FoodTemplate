import Poster1 from "./poster1"
import Poster2 from "./Poster2"
import Poster3 from "./Poster3"

export default function ProductCard(){
  return (

    <div className="flex  gap-15">

      <div className="bg-white flex items-center justi flex-col  pb-7  p-3 w-70">
        <div className="flex">
          <img className="z-6" src='src/img/sarfasl.svg' alt="" />
          <img className="-ml-13 h-93 mt-5" src='src/img/text-sarfasl.svg' alt="" />
        </div>
        <img src='src/img/Title-sarfasl.svg' alt="" />
      <a href="">  
         <div className="bg-[#e21a422b] mt-3 px-6.5 py-4">
          <img src='src/img/Order Now.svg' alt="Order Now" />
        </div>
        </a>
      </div>

      <Poster1 />
      <Poster2 />
      <Poster3 />
     
    </div>
  )
}
