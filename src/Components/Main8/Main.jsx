import Logo from '/src/img/logo.svg'
import Text from '/src/img/Text_footer.svg'
import Soshal from '/src/img/Social Media.svg'
import Woodbar from '/src/img/Footnote.svg'




export default function Main() {

    return (

        <div className="h-[450px] bg-[#F7F7F7] flex flex-col w-full justify-start ">

            <div className="flex  items-center px-20 gap-3 h-90 w-full bg-amber-300">

                <div className=" w-1/4 h-68 mt-20 bg-red-200">

                    <div className="">
                        <img className='w-40' src={Logo} alt="" />
                        <img className='mt-6' src={Text} alt="" />
                        <img className='mt-6' src={Soshal} alt="" />
                    </div>



                </div>


                <div className=" w-1/4 h-68 mt-20 bg-red-200">

                    <div className="">
                        <img className='w-40' src={Logo} alt="" />
                        <img className='mt-6' src={Text} alt="" />
                        <img className='mt-6' src={Soshal} alt="" />
                    </div>



                </div>


                <div className=" w-1/4 h-68 mt-20 bg-red-200">

                    <div className="">
                        <img className='w-40' src={Logo} alt="" />
                        <img className='mt-6' src={Text} alt="" />
                        <img className='mt-6' src={Soshal} alt="" />
                    </div>



                </div>


                <div className=" w-1/4 h-68 mt-20 bg-red-200">

                    <div className="">
                        <img className='w-40' src={Logo} alt="" />
                        <img className='mt-6' src={Text} alt="" />
                        <img className='mt-6' src={Soshal} alt="" />
                    </div>



                </div>
                

                <div className="flex right-0 left-0 absolute mt-90 px-23 justify-between">

                    <div className="">
                        <img src={Woodbar} alt="" />
                    </div>

                    <div className="">
                        <img src={Woodbar} alt="" />
                    </div>

                </div>

            </div>


        </div>

    )

}