


export default function Header(){

    return(


        <div className="w-full justify-end items-center px-20 h-[120px] flex">


            <div className="bg-amber-200 mr-5">
                <input className="bg-amber-500" type="search" placeholder="Search..."/>
                
            </div>
          
            <div className="flex gap-3">
              <a href=""><img src="src/icon/user.svg" className="bg-[#E21A431A] px-3.5 p-3" alt="" /></a>
              <a href=""><img src="src/icon/shop.svg" className="bg-[#E21A431A] p-3" alt="" /></a>

            </div>


        </div>
         
        
    )
}