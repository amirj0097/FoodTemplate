

import Apel from '/src/img/ApplePay.svg'
import Amazon from '/src/img/Amazon.svg'
import Googleplay from '/src/img/GooglePay.svg'
import Visa from '/src/img/visa-logo.svg'
import Master from '/src/img/Mastercard.svg'
import Payoner from '/src/img/Payoneer.svg'





export default function PaymentMethods(){

        return(

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

           


        )

}