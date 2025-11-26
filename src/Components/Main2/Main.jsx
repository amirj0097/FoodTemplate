export default function Main() {
  return (
    <div className="bg-[#a4dfdb] w-full items-center justify-center flex h-[900px]">
      <div className="flex flex-col gap-y-20">

        <img className="" src="src/img/name main.svg" alt="New products" />


        <div className="flex p-5 gap-15 bg-amber-300">

          <div className="bg-white flex items-center justify-end flex-col pb-7  p-3 w-70">
            <div className="flex">
              <img className="z-6" src="src/img/sarfasl.svg" alt="" />
              <img className="-ml-13 h-93 mt-5" src="src/img/text-sarfasl.svg" alt="" />
            </div>
            <img src="src/img/Title-sarfasl.svg" alt="" />
            <div className="bg-[#e21a422b] mt-3 px-6.5 py-4">
             <a href=""> <img src="src/img/Order Now.svg" alt="Order Now" /></a>
            </div>
          </div>


          <div className="bg-white w-60 h-90 mt-auto mb-auto flex justify-center  items-start">
            <img className="p-3" src="src/img/Noone.svg" alt="" />
            <div className="flex w-30 px-2 py-2 gap-2 absolute justify-center mt-[233px] bg-white shadow-md shadow-gray-200">

             <a className=" " href=""> <img className="border-r-1 border-[#888888]  w-15 pr-2" src="src/img/+.svg" alt="" /></a>
             <a className=" " href=""> <img className="border-r-1 border-[#888888] w-15 pr-2" src="src/icon/charkhesh.svg" alt="" /></a>
             <a className=" " href=""> <img className="border-r-1 border-[#888888] w-15   pr-2" src="src/icon/Like.svg" alt="" /></a>
             <a className="" href=""> <img className="w-10 pr-0" src="src/icon/search (2).svg" alt="" /></a>

            </div>
            <div className="absolute mt-70 w-50">
              <img src="src/img/textnoone.svg" alt="" />
            </div>

              <div className="flex w-50 absolute mt-76 gap-3">
                <span className="line-through font-semibold">$40.00</span>
                <span className="font-bold">$30.00</span>
                <span>(1kg)</span>
              </div>

          </div>

        </div>
      </div>
    </div>
  )
}