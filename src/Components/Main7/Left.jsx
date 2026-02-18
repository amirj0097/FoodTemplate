
import Google from '/src/img/googleplay.svg'
import Appstore from '/src/img/appstore.svg'


export default  function Left(){


    return(

         <div className="w-1/2 flex flex-col  gap-y-12 justify-cener">
        
        
                        <div className='flex flex-col items-center'>
                            <p className="text-[#333333] text-5xl font-sofia">Make your online shop sob</p>
                            <p className="text-[#333333] mr-9 mt-5 text-5xl font-sofia">ready with our mobile all</p>
                        </div>
        
                        <div className="flex flex-col mr-10  items-center ">
                            <p className='text-[#666666] font-shabnam font-bold'>There are many variations of passages of Lorem lpsum available, but the</p>
                            <p className='text-[#666666] mt-1 mr-10 font-shabnam font-bold'>majority have suffered alteration in some form, by injected humour</p>
                        </div>  
        
        
                        <div className="flex ml-23  gap-5">
                            <a href="">
                                <img className='' src={Google} alt="" />
                            </a>
                            <a href="">
                                <img src={Appstore} alt="" />
                            </a>
                        </div>
        
                    </div>

    )


}