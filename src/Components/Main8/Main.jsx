import Logo from '/src/img/logo.svg'
import Text from '/src/img/Text_footer.svg'
import Soshal from '/src/img/Social Media.svg'



export default function Main() {

    return (

        <div className="h-[450px] bg-[#F7F7F7] flex w-full items-center">

            <div className="flex flex-col items-center ml-20 h-90 w-1/4 bg-amber-300">
                <div className="w-50 mt-10 bg-red-200">
                    <img className='w-40' src={Logo} alt="" />
                    <img className='mt-6' src={Text} alt="" />
                    <img src={Soshal} alt="" />

                </div>
            </div>

        </div>

    )

}