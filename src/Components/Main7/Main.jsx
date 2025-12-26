
import Title from '/src/img/Title Main7.svg'
import Text from '/src/img/Text Main7.svg'
import Google from '/src/img/googleplay.svg'
import Appstore from '/src/img/appstore.svg'

export default function Main() {

    return (

        <div className="h-[650px] flex w-full bg-gray-300 items-center">

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


            <div className="w-1/2 bg-amber-400">ytfyt</div>

        </div>

        

    )

}