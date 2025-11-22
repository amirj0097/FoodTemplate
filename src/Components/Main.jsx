
export default function Main() {


    return (
        <div className="w-full flex  h-[715px] ">

            <div className="flex flex-col mt-15 w-1/2  items-center   ">
                <span><img className="mr-140" src="src/icon/Rang.svg" alt="" /></span>
                <img src="src/img/Title.svg" alt="" />
                <img className="ml-5 mt-5" src="src/img/Text.svg" alt="" />

                <div className="flex mr-auto ml-21 gap-6 mt-5">
                    <a href="" className="bg-[#E21A43] text-white py-2 px-4">BUY NOW</a>
                    <a href="" className="text-[#E21A43] flex items-center py-2 px-4 border border-[#E21A43]">SEE MORE</a>
                </div>

            </div>



            <div className="w-1/2 flex justify-end items-center">
                <span><img src="src/img/Sushee.svg" alt="" /></span>
            </div>


        </div>
    )


}