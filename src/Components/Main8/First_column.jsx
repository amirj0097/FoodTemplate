
import Logo from '/src/img/logo.svg'
import FaceBook from '/src/icon/FaceBooke.svg'
import Linkdin from '/src/icon/Linkdin.svg'
import Instagram from '/src/icon/instagram.svg'
import Rated from '/src/icon/reted simplified.svg'
import Dentmind from '/src/icon/dent mind (2).svg'

export default function First_column(){

        return(

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

        )

}