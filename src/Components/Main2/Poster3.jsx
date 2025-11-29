

export default function Poster3(){

    return(
         <div className="bg-white w-60 h-90 mt-auto mb-auto flex justify-center  items-start">
        <img className="p-3" src='src/img/comboze.svg' alt="" />


        <div className="absolute mt-70 w-50">
          <img src='src/img/textcomboze.svg' alt="" />
        </div>

        <div className="flex w-50 absolute mt-76 gap-3">
          <span className="line-through font-semibold">$45.00</span>
          <span className="font-bold">$35.00</span>
          <span>(1.5kg)</span>
        </div>


      </div>

    )


}