
export default function Main() {


    return (
        <div className="w-full flex  h-[715px] ">



            <div className="flex flex-col mt-15 w-1/2 ml-30 items-start   ">


                <span className="-ml-3 absolute"><img className="" src="src/icon/Rang.svg" alt="" /></span>
                <img src="src/img/Title.svg" alt="" />
                <img className="ml-0 mt-5" src="src/img/Text.svg" alt="" />

                    <span><img className="py-3 px-4.5 cursor-pointer border border-[#E21A43] absolute left-8 bottom-auto top-90" src="src/icon/left.svg" alt="" /></span>

                <div className="flex w-full h-30 gap-6 mt-5">
                    <a href="" className="bg-[#E21A43] text-white flex items-center max-h-12 px-6 font-semibold">BUY NOW</a>
                    <a href="" className="text-[#E21A43] flex items-center max-h-12 px-6 font-semibold border border-[#E21A43]">SEE MORE</a>
                    <img className="ml-auto -mt-5 mr-auto w-10" src="src/icon/gool.svg" alt="" />
                </div>

            </div>



            <div className="w-1/2 flex  justify-end items-center mb-10">
                <span><img src="src/img/Sushee.svg" alt="" /></span>
                <span><img className="bg-[#E21A43] cursor-pointer py-3.5 top-90 bottom-auto px-4.5 right-8 absolute" src="src/icon/right.svg" alt="" /></span>
            </div>


        </div>
    )


}