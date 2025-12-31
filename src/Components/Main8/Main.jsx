import Logo from '/src/img/logo.svg'
import Text from '/src/img/Text_footer.svg'
import Woodbar from '/src/img/Footnote.svg'
import Khat from '/src/img/Khat (2).svg'
import FaceBook from '/src/icon/FaceBooke.svg'
import Linkdin from '/src/icon/Linkdin.svg'
import Instagram from '/src/icon/instagram.svg'
import Rated from '/src/icon/reted simplified.svg'
import Dentmind from '/src/icon/dent mind (2).svg'
import Apel from '/src/img/ApplePay.svg'
import Amazon from '/src/img/Amazon.svg'
import Googleplay from '/src/img/GooglePay.svg'
import Visa from '/src/img/visa-logo.svg'
import Master from '/src/img/Mastercard.svg'
import Payoner from '/src/img/Payoneer.svg'


export default function Main() {

    return (

        <div className="h-[450px] bg-[#F7F7F7] flex flex-col w-full justify-start ">

            <div className="flex  items-center px-20 gap-3 h-90 w-full">

                <div className=" w-1/4 h-68 mt-20">

                    <div className="">
                        <img className='w-40' src={Logo} alt="" />
                        <img className='mt-6' src={Text} alt="" />
                        <div className="flex gap-3 mt-5">

                            <a href="#">
                                <img src={FaceBook} alt="" />
                            </a>
                            <a href="#">
                                <img src={Linkdin} alt="" />
                            </a>
                            <a href="#">
                                <img src={Instagram} alt="" />
                            </a>
                            <a className='flex' href="#">
                                <img src={Rated} alt="" />
                            </a>
                            <a className='flex' href="#">
                                <img src={Dentmind} alt="" />
                            </a>
                        </div>
                    </div>



                </div>


                <div className=" w-1/4 h-68 mt-20 ">

                    <div className="flex flex-col  items-start">
                        <p className='font-sofia text-xl'>Help & Information</p>
                        <img className='mt-5 mb-5' src={Khat} alt="" />

                        <div className="flex flex-col items-start gap-y-2">
                            <a href="#">
                                <span className='font-shabnam font-bold text-[#655b5b]'>Pagination</span></a>
                            <a href="#">
                                <span className='font-shabnam  font-bold text-[#655b5b]'>Terms & Conditions</span></a>
                            <a href="#">
                                <span className='font-shabnam font-bold text-[#655b5b]'>Contact</span></a>
                            <a href="#">
                                <span className='font-shabnam font-bold text-[#655b5b]'>Home page</span></a>
                            <a href="#">
                                <span className='font-shabnam font-bold text-[#655b5b]'>Term of use</span></a>

                        </div>
                    </div>



                </div>


                <div className=" w-1/4 h-68 mt-20 ">

                    <div className="flex flex-col  items-start">
                        <p className='font-sofia text-xl'>About Us</p>
                        <img className='mt-5 mb-5' src={Khat} alt="" />

                        <div className="flex flex-col items-start gap-y-2">
                            <a href="#">
                                <span className='font-shabnam font-bold text-[#655b5b]'>Help Center</span></a>
                            <a href="#">
                                <span className='font-shabnam  font-bold text-[#655b5b]'>Address Store</span></a>
                            <a href="#">
                                <span className='font-shabnam font-bold text-[#655b5b]'>Privacy Policy</span></a>
                            <a href="#">
                                <span className='font-shabnam font-bold text-[#655b5b]'>Receivers & Amplifiers</span></a>
                            <a href="#">
                                <span className='font-shabnam font-bold text-[#655b5b]'>Clothings</span></a>

                        </div>
                    </div>

                </div>


                <div className=" w-1/4 h-68 mt-20 ">

                    <div className="flex flex-col  items-start">
                        <p className='font-sofia text-xl'>Categories</p>
                        <img className='mt-5 mb-5' src={Khat} alt="" />

                        <div className="flex flex-col items-start gap-y-2">

                            <a href="#">
                                <span className='font-shabnam font-bold text-[#655b5b]'>DelDelivery</span></a>
                            <a href="#">
                                <span className='font-shabnam  font-bold text-[#655b5b]'>Legal Notice</span></a>
                            <a href="#">
                                <span className='font-shabnam font-bold text-[#655b5b]'>Documentatio</span></a>
                            <a href="#">
                                <span className='font-shabnam font-bold text-[#655b5b]'>Secure payment</span></a>
                            <a href="#">
                                <span className='font-shabnam font-bold text-[#655b5b]'>Stores</span></a>

                        </div>
                    </div>


                </div>


                <div className="flex right-0 left-0 absolute mt-90 px-21 justify-between">

                    <a href="">
                        <img src={Woodbar} alt="" />
                    </a>

                    <div className="flex  items-center justify-center gap-5">

                        <a className='border border-[#D9D9D9] bg-white min-h-5.5 w-9 flex items-center justify-center rounded-sm' href="">
                            <img src={Apel} alt="" />
                        </a>

                        <a className='border border-[#D9D9D9] bg-white min-h-5.5 w-9 flex items-center justify-center rounded-sm' href="">
                            <img src={Amazon} alt="" />
                        </a>

                        <a className='border border-[#D9D9D9] bg-white min-h-5.5 w-9 flex items-center justify-center rounded-sm' href="">
                            <img src={Googleplay} alt="" />
                        </a>

                        <a className='border border-[#D9D9D9] bg-white min-h-5.5 w-9 flex items-center justify-center rounded-sm' href="">
                            <img src={Visa} alt="" />
                        </a>

                        <a className='border border-[#D9D9D9] bg-white min-h-5.5 w-9 flex items-center justify-center rounded-sm' href="">
                            <img src={Master} alt="" />
                        </a>

                        <a className='border border-[#D9D9D9] bg-white min-h-5.5 w-9 flex items-center justify-center rounded-sm' href="">
                            <img src={Payoner} alt="" />
                        </a>

                    </div>

                </div>

            </div>


        </div>

    )

}