import Poster from "./ProductCard";

export default function Main() {

  return (
    <div className="bg-[#F7F7F7] w-full items-center justify-center flex h-[800px]">
      <div className="flex flex-col ">

        <span className="-mt-15 absolute flex justify-center ml-120">
            <p className="w-55  mt-20 font-semibold text-[#333333] text-2xl relative before:content-arrow before:bg-[#666666]  before:absolute before:left-5 before:w-8 before:flex before:top-4 before:h-1   after:content-arrow after:bg-[#666666]  after:absolute  after:w-8 after:flex after:-right-12 after:top-4 after:h-1">New Products</p>
          </span>


        <Poster />
       


       

      </div>
    </div>
  );

};