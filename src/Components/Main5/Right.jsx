
import gool from '/src/icon/gool(2).svg'
import Tick from '/src/icon/Tick.svg'


export default function Right(){

        return(

             <div className="w-1/2 pb-4   bg-ber-200">



                <p className='flex font-sofia text-[#333333]  text-[54px]'>Fresh Product Directly</p>
                <p className='flex font-sofia text-[#333333] font-semibold text-[54px]'>To Your Door With Free</p>
                <p className='flex font-sofia text-[#333333]  font-semibold text-[54px]  z-10 relative before:content-arrow before:bg-[#E21A434D] before:-z-70 before:absolute before:-right-0.5 before:left-0 before:w-54 before:bottom-1 before:h-7.5'>
                                  <img className='flex absolute mt-17 right-112 ' src={gool} alt="" />   Delivery</p>




                <div className="mt-6 flex flex-col items-start font-shabnam font-bold">
                    <p className='text-[#666666]'>There are many variations of passage Lorem lpsum available, but te majority</p>
                    <p className='text-[#666666]'>hav suffered alteration in some form, by injected humour</p>

                </div>

                <div className="flex gap-5 mt-6 ">


                    <span className='flex gap-2 text-[#666666] font-sofia'><img className='w-[16px]' src={Tick} alt="" /> Free Delivery For All Order</span>
                    <span className='flex gap-2 text-[#666666] font-sofia'><img className='w-[16px]' src={Tick} alt="" />Only Fresh Food</span>




                </div>

                <button className='text-[#E21A43] border border-[#E21A43] hover:bg-[#E21A43] transition duration-300 ease-in-out hover:text-white cursor-pointer py-3 px-4 font-semibold flex mt-7'>Find Now</button>
            </div>



        )

}