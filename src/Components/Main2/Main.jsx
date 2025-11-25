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


          <div className="bg-white w-60 h-100 mt-20 flex justify-center  items-start">
            <img className="p-3" src="src/img/Noone.svg" alt="" />
            <div className="flex w-30 p-3 absolute justify-center mt-[235px] bg-amber-500">

             <a className="border-r-1 border-[#888888]" href=""> <img className="mr-2" src="src/img/+.svg" alt="" /></a>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}