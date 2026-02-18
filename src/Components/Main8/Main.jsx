


import First_column from './First_column'
import Second_column from './Second_column'
import Third_column from './Third_column'
import Fourth_column from './Fourth_column'
import PaymentMethods from './PaymentMethods'

export default function Main() {

    return (

        <div className="h-[450px] bg-[#F7F7F7] flex flex-col w-full justify-start ">

            <div className="flex  items-center px-20 gap-3 h-90 w-full">



                <First_column />


                <Second_column />


                <Third_column />


                <Fourth_column />


                <PaymentMethods />



            </div>

        </div>

    )

}