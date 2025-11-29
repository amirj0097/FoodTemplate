

export default function Poster2(){

    return(
         <div className="bg-white w-60 h-90 mt-auto mb-auto flex justify-center  items-start">
        <img className="p-3" src='src/img/bastanee.svg' alt="" />

        <div className="absolute mt-70 w-50">
          <img src='src/img/textbastanee.svg' alt="" />
        </div>

        <div className="flex w-50 absolute mt-76 gap-3">
          <span className="line-through font-semibold">$20.00</span>
          <span className="font-bold">$15.00</span>
          <span>(450ml)</span>
        </div>


      </div>

    )


}