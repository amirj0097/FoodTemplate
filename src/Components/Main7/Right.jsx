






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



    );
};


export default ScrollImageAnimation;





