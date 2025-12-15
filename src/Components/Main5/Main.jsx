import Title from '/src/img/Title Main5.svg'
import gool from '/src/icon/gool(2).svg'
import Text from '/src/img/Text main5.svg'
import Tick_1 from '/src/img/Tick1.svg'
import Tick_2 from '/src/img/Tick2.svg'
import Goosht from '/src/img/Gosht .svg'


export default function Main() {

    return (

        <div className="bg-white w-full gap-5 items-center justify-center flex h-[650px]">


            <div className=" flex justify-end  w-1/2">
            <img src={Goosht} alt="" />
            </div>


            <div className=" w-1/2">


                <img className='' src={Title} alt="" />


                <img className='flex absolute -mt-1 right-123' src={gool} alt="" />

                <img className='mt-13' src={Text} alt="" />

                <div className="flex gap-5 mt-8">

                    <img src={Tick_1} alt="" />
                    <img src={Tick_2} alt="" />


                </div>

                <button className='text-[#E21A43] border border-[#E21A43] py-2 px-4 font-semibold flex mt-8.5'>Find Now</button>

            </div>

        </div>

    )

}