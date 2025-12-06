import Poster from "./ProductCard";

export default function Main() {

  return (
    <div className="bg-[#F7F7F7] w-full items-center justify-center flex h-[900px]">
      <div className="flex flex-col ">

        <span className="-mt-25 absolute flex justify-center ml-120"><img className="w-55  mt-20 " src="src/img/name main.svg" alt="New products" /></span>


        <Poster />
       


       

      </div>
    </div>
  );

};