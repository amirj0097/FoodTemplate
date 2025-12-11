import Title from '/src/img/Title main3.svg'


export default function Right(){

    return(
             <div className="w-1/2 z-25 h-90 p-8 gap-y-10 flex flex-col ">
                <img className='w-150' src={Title} alt="" />
                <div className="flex gap-3">
                    <span className='line-through font-semibold text-gray-700 text-3xl'>$20.00</span>
                    <span className='text-3xl font-semibold'>$18.00</span>
                </div>
                <div className="flex">
                    <button className='font-semibold cursor-pointer  text-[#E21A43] border border-[#E21A43] py-2 px-3'>SHOP NOW</button>
                </div>
            </div>
    )

}