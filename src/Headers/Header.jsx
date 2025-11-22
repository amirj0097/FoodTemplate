


export default function Header() {

    return (


        <div className="w-full  items-center justify-between px-20 h-[120px] flex">

            <nav className="flex flex-row-reverse gap-8 text-[#888888]">
                <a href="">Page</a>
                <a href="">Blog</a>
                <a href="">Shop</a>
                <a href="">Category</a>
                <a className="text-red-600" href="">Home +</a>
            </nav>

            <div className="flex">
                <div className="h-11 -mr-3 flex">
                    <input className="bg-[#E21A431A] w-40 pl-3 outline-none" type="search" placeholder="Search..." />
                    <span><img className="px-3 h-full cursor-pointer bg-[#E21A43]" src="src/icon/Search.svg" alt="" /></span>
                </div>

                <div className="flex gap-3">
                    <a href=""><img src="src/icon/user.svg" className="bg-[#E21A431A] px-3.5 p-3" alt="" /></a>
                    <a href=""><img src="src/icon/shop.svg" className="bg-[#E21A431A] p-3" alt="" /></a>

                </div>

            </div>

        </div>


    )
}