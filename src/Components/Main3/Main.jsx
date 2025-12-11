
import khat from '/src/img/khat.svg'
import Title from '/src/img/Title main3.svg'
import peyck from '/src/img/peyck.svg'
import Gosht from '/src/img/Gosht2.svg'
import bademgon from '/src/img/bademgon.svg'
import steyke from '/src/img/steyke.svg'
import Felesh from '/src/icon/Felesh.svg'

export default function Main() {

    return (

        <div className="bg-white w-full items-center justify-center flex h-[650px]">



            <div className="w-1/2  h-90 justify-center items-center flex flex-col ">

                        <img className='absolute z-9 -mt-3 flex-wrap  left-0 right-0' src={khat} alt="" />

                <div className="flex z-25 gap-y-6 absolute items-center flex-col">
                    <img className='w-30 mt-8 ' src={peyck} alt="" />
                    <img className='flex   ' src={steyke} alt="" />
                </div>
                <div className="flex z-25">
                    <img src={bademgon} alt="" />
                    <img src={Gosht} alt="" />
                </div>
                <img className='z-20 ml-120 mt-10' src={Felesh} alt="" />
            </div>



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
        </div>

    )

}