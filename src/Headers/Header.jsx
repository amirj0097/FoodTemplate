


export default function Header() {

    return (


        <header className="w-full  items-center justify-between shadow-xs shadow-[#f4f4f4]  px-27 h-[90px] flex">

                <a href=""><img src="src/img/Logo.svg" alt="" /></a>

            <nav className="flex flex-row-reverse gap-8 text-[#888888]">
                <a className="hover:text-red-600" href="">Page</a>
                <a className="hover:text-red-600" href="">Blog</a>
                <a className="hover:text-red-600" href="">Shop</a>
                <a className="hover:text-red-600" href="">Category</a>
                <a className="text-red-600 hover:text-red-600 font-semibold" href="">Home +</a>
            </nav>

            <div className="flex">
                <div className="h-11 -mr-3 flex">
                    <input className="bg-[#E21A431A] w-40 pl-3 outline-none" type="search" placeholder="Search..." />
                    <span><img className="px-3.5 h-full cursor-pointer bg-[#E21A43]" src="src/icon/Search.svg" alt="" /></span>
                </div>

                <div className="flex gap-3">
                    <a href=""><img src="src/icon/user.svg" className="bg-[#E21A431A] px-3.5 p-3" alt="" /></a>
                    <a href=""><img src="src/icon/shop.svg" className="bg-[#E21A431A] p-3" alt="" /></a>

                </div>

            </div>

        </header>


    )
}