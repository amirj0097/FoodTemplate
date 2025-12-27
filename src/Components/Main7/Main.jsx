
import Title from '/src/img/Title Main7.svg'
import Text from '/src/img/Text Main7.svg'
import Google from '/src/img/googleplay.svg'
import Appstore from '/src/img/appstore.svg'
import Appel_left from '/src/img/image left.svg'
import Appel_Middle from '/src/img/image Middle.svg'
import Appel_right from '/src/img/image right.svg'


export default function Main() {

    return (

        <div className="h-[650px] flex w-full items-center">

            <div className="w-1/2 ">

                <div className=" flex flex-col items-center gap-y-5 justify-center">
                    <img src={Title} alt="" />
                    <img src={Text} alt="" />
                </div>

                <div className="flex ml-24 mt-10 gap-5">
                    <img className='' src={Google} alt="" />
                    <img src={Appstore} alt="" />
                </div>

            </div>


            <div className="w-1/2 flex justify-center items-center">

                <img className='absolute left-auto right-82' src={Appel_left} alt="" />
                <img className='relative z-10 flex justify-center items-center' src={Appel_Middle} alt="" />
                <img className='absolute right-19' src={Appel_right} alt="" />

            </div>

        </div>

        

    )

}