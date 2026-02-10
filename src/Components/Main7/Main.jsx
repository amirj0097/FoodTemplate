

import Google from '/src/img/googleplay.svg'
import Appstore from '/src/img/appstore.svg'
import Appel_left from '/src/img/image left.svg'
import Appel_Middle from '/src/img/image Middle.svg'
import Appel_right from '/src/img/image right.svg'
import { useEffect, useRef, useState } from 'react'



const ScrollImageAnimation = () => {
    const containerRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                const elementTop = rect.top;

                // وقتی المان وارد viewport شد، انیمیشن شروع میشه
                let progress = 1 - (elementTop / (viewportHeight * 0.8));
                progress = Math.max(0, Math.min(1, progress));
                setScrollProgress(progress);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // محاسبه translateX برعکس
    const leftTranslateX = -100 * (1 - scrollProgress); // از 0 به -100
    const rightTranslateX = 100 * (1 - scrollProgress); // از 0 به 100
    const opacityValue = scrollProgress; // از 1 به 0




    return (

        <div className="h-[650px] flex w-full items-center">

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



            <div
                ref={containerRef}
                className="relative w-1/2 min-h-screen flex items-center justify-center overflow-hidden"
            >
                <div className="relative w-1/2 h-96 flex justify-center items-center">

                    {/* عکس وسط - همیشه ثابت */}
                    <img
                        className="relative z-20"
                        src={Appel_Middle}
                        alt="middle apple"
                    />

                    {/* عکس چپ - از پشت عکس وسط بیرون میزنه */}
                    <img
                        className="absolute z-10 transition-all duration-700 ease-out"
                        style={{
                            transform: `translateX(${leftTranslateX}%)`,
                            opacity: opacityValue,
                            right: '43%',
                            marginLeft: '-25%' // نصف عرض عکس چپ
                        }}
                        src={Appel_left}
                        alt="left apple"
                    />

                    {/* عکس راست - از پشت عکس وسط بیرون میزنه */}
                    <img
                        className="absolute z-10 transition-all duration-700 ease-out"
                        style={{
                            transform: `translateX(${rightTranslateX}%)`,
                            opacity: opacityValue,
                            left: '43%',
                            marginRight: '-25%' // نصف عرض عکس راست
                        }}
                        src={Appel_right}
                        alt="right apple"
                    />

                    {/* ماسک برای پنهان کردن عکس‌ها وقتی داخل عکس وسط هستن */}
                    <div className="absolute z-30 w-full h-full flex justify-center items-center pointer-events-none">
                        <div className="relative w-32 h-32 bg-transparent">
                            {/* اینجا می‌تونید ماسک قرار بدید اگر نیازه */}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};





export default ScrollImageAnimation;
