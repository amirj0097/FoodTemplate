
import Title from '/src/img/Title Main7.svg'
import Text from '/src/img/Text Main7.svg'


export default function Main() {

    return (

        <div className="h-[650px] flex w-full bg-gray-300 items-center">

                <div className="w-1/2 flex flex-col items-center justify-center bg-red-300 gap-y-3">

                <img src={Title} alt="" />
                <img src={Text} alt="" />
                </div>


                <div className="w-1/2 bg-amber-400">ytfyt</div>

        </div>

    )

}