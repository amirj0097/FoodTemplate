import khat from '/src/img/khat.svg'
import peyck from '/src/img/peyck.svg'
import Gosht from '/src/img/Gosht2.svg'
import bademgon from '/src/img/bademgon.svg'
import steyke from '/src/img/steyke.svg'
import Felesh from '/src/icon/Felesh.svg'



export default function left(){

        return(

                            <div className="w-1/2  h-90 justify-center items-center flex flex-col ">

                        <img className='absolute z-9 -mt-3 flex-wrap   left-0 right-0' src={khat} alt="" />

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

        )

}