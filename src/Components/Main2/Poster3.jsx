

export default function Poster3(){

    return(
         <div className="bg-white w-60 h-90 mt-auto mb-auto flex justify-center  items-start">
        <img className="p-3" src='src/img/bastanee.svg' alt="" />
           <div className="flex w-30 px-2 py-2 gap-2 absolute justify-center mt-[233px] bg-white shadow-md shadow-gray-200">

        <a className="" href=""> <img className="border-r-1 border-[#888888]  w-15 pr-2" src='src/icon/+.svg' alt="" /></a>
        <a className="" href=""> <img className="border-r-1 border-[#888888] w-15 pr-2" src='src/icon/charkhesh.svg' alt="" /></a>
        <a className="" href=""> <img className="border-r-1 border-[#888888] w-15   pr-2" src='src/icon/Like.svg' alt="" /></a>
        <a className="" href=""> <img className="w-10 pr-0 " src='src/icon/search (2).svg' alt="" /></a>
</div>

        <div className="absolute mt-70 w-50">
          <img src='src/img/textnoone.svg' alt="" />
        </div>

        <div className="flex w-50 absolute mt-76 gap-3">
          <span className="line-through font-semibold">$40.00</span>
          <span className="font-bold">$30.00</span>
          <span>(1kg)</span>
        </div>


      </div>

    )


}