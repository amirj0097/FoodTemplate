import Logo from '/src/img/logo.svg'



export default function Main(){

    return(

       <div className="h-[450px] bg-[#F7F7F7] flex w-full items-center">
        
            <div className="flex flex-col items-center ml-20 h-90 w-1/4 bg-amber-300">
                <img className='w-50' src={Logo} alt="" />
            </div>

       </div>

    )

}