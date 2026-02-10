import Logo from '/src/img/logo.svg'
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

                        <div className="mt-6 flex flex-col items-start font-semibold">
                            <p className='text-[#666666]'>Sophisticated simplicity for the</p>
                            <p className='text-[#666666]'>independent mind</p>
                        </div>

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
                        <p className='font-sofia text-xl z-10 relative before:content-arrow before:bg-[#666666] before:-z-70 before:absolute before:w-12.5 before:-bottom-6 before:flex  before:h-[1px]'>Help & Information</p>



                        <div className="flex mt-10 flex-col items-start gap-y-2">
                            <a href="#">
                                <span className='font-shabnam font-bold hover:text-[#423939] text-[#655b5b]'>Pagination</span></a>
                            <a href="#">
                                <span className='font-shabnam  font-bold hover:text-[#423939] text-[#655b5b]'>Terms & Conditions</span></a>
                            <a href="#">
                                <span className='font-shabnam font-bold hover:text-[#423939] text-[#655b5b]'>Contact</span></a>
                            <a href="#">
                                <span className='font-shabnam font-bold hover:text-[#423939] text-[#655b5b]'>Home page</span></a>
                            <a href="#">
                                <span className='font-shabnam font-bold hover:text-[#423939] text-[#655b5b]'>Term of use</span></a>

                        </div>
                    </div>



                </div>


                <div className=" w-1/4 h-68 mt-20 ">

                    <div className="flex flex-col  items-start">
                        <p className='font-sofia text-xl z-10 relative before:content-arrow before:bg-[#666666] before:-z-70 before:absolute before:w-12.5 before:-bottom-6 before:flex  before:h-[1px]'>About Us</p>



                        <div className="flex mt-10 flex-col items-start gap-y-2">
                            <a href="#">
                                <span className='font-shabnam font-bold hover:text-[#423939] text-[#655b5b]'>Help Center</span></a>
                            <a href="#">
                                <span className='font-shabnam  font-bold hover:text-[#423939] text-[#655b5b]'>Address Store</span></a>
                            <a href="#">
                                <span className='font-shabnam font-bold hover:text-[#423939] text-[#655b5b]'>Privacy Policy</span></a>
                            <a href="#">
                                <span className='font-shabnam font-bold hover:text-[#423939] text-[#655b5b]'>Receivers & Amplifiers</span></a>
                            <a href="#">
                                <span className='font-shabnam font-bold hover:text-[#423939] text-[#655b5b]'>Clothings</span></a>

                        </div>
                    </div>

                </div>


                <div className=" w-1/4 h-68 mt-20 ">

                    <div className="flex flex-col  items-start">

                        <p className='font-sofia text-xl z-10 relative before:content-arrow before:bg-[#666666] before:-z-70 before:absolute before:w-12.5 before:-bottom-6 before:flex  before:h-[1px]'>Categories</p>

                        <div className="flex mt-10 flex-col items-start gap-y-2">

                            <a href="#">
                                <span className='font-shabnam font-bold hover:text-[#423939] text-[#655b5b]'>DelDelivery</span></a>
                            <a href="#">
                                <span className='font-shabnam  font-bold hover:text-[#423939] text-[#655b5b]'>Legal Notice</span></a>
                            <a href="#">
                                <span className='font-shabnam font-bold hover:text-[#423939] text-[#655b5b]'>Documentatio</span></a>
                            <a href="#">
                                <span className='font-shabnam font-bold hover:text-[#423939] text-[#655b5b]'>Secure payment</span></a>
                            <a href="#">
                                <span className='font-shabnam font-bold hover:text-[#423939] text-[#655b5b]'>Stores</span></a>

                        </div>
                    </div>


                </div>


                <div className="flex right-0 left-0 absolute mt-90 px-21 justify-between">
                    <div className="flex items-center text-[#666666]">
                        <span className='border items-center justify-center inline-flex mr-2 rounded-[50%] h-3 w-3 text-xs'>c</span>
                        <p className=''>Copyright 2022 | woodbar By Graphicraz.</p>
                    </div>
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