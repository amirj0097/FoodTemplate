

export default function Right(){

    return(
             <div className="w-1/2 z-25 h-90 p-8 gap-y-10 flex flex-col ">
                <div className="text-6xl flex flex-col gap-y-4 mr-auto">
                    <p className="text-[#666666] font-semibold">Our Spiceal Service</p>
                    <p className="mr-auto text-[#666666] font-semibold relative before:content-arrow before:absolute before:w-33  before:h-7 before:-z-20 before:bg-[#E21A434D] before:-right-2 before:bottom-0">Freash Beef</p></div>
                <div className="flex gap-3">
                    <span className='line-through font-semibold text-gray-500 text-3xl'>$20.00</span>
                    <span className='text-3xl font-semibold'>$18.00</span>
                </div>
                <div className="flex">
                    <button className='font-semibold cursor-pointer  text-[#E21A43] border border-[#E21A43] py-2 px-3'>SHOP NOW</button>
                </div>
            </div>
    )

}