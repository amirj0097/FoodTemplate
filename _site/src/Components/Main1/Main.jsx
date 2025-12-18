import { useState, useEffect } from 'react';

export default function Main() {
  // داده‌های اسلایدها
  const slides = [
    {
      id: 1,
      title: "src/img/Title.svg",
      text: "src/img/Text.svg",
      image: "src/img/Sushee.svg",
      button1Text: "BUY NOW",
      button2Text: "SEE MORE",
      goolIcon: "src/icon/gool.svg",

    },
    {
      id: 2,
      title: "src/img/Title.svg", // می‌توانید فایل‌های مختلف بگذارید
      text: "src/img/Text.svg",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
      button1Text: "ORDER NOW",
      button2Text: "VIEW MENU",
      goolIcon: "src/icon/gool.svg",
    },
    {
      id: 3,
      title: "src/img/Title.svg",
      text: "src/img/Text.svg",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w-600",
      button1Text: "SHOP NOW",
      button2Text: "RECIPES",
      goolIcon: "src/icon/gool.svg",

    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // رفتن به اسلاید بعدی
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // رفتن به اسلاید قبلی
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // رفتن به اسلاید مشخص
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // اتوپلی خودکار
  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        nextSlide();
      }, 8000); // هر 5 ثانیه
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentSlide, autoPlay]);

  return (
    <div className="w-full h-[650px] overflow-hidden relative">


      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 py-3 px-4.5 border border-[#E21A43] bg-white  transition-colors"
      >
        <img src="src/icon/left.svg" alt="left arrow" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 py-3.5 px-4.5 bg-[#E21A43] hover:bg-opacity-90 transition-colors"
      >
        <img src="src/icon/right.svg" alt="right arrow" />
      </button>



      {/* اسلاید فعلی */}
      <div
        className="w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 h-full"
          >
            <div className="w-full flex h-[650px]">
              {/* بخش چپ - متن و دکمه‌ها */}
              <div className="flex flex-col w-1/2 ml-30 items-start justify-center">
                <span className="-ml-3 absolute top-[17%]">
                  <img className="" src="src/icon/Rang.svg" alt="Rang" />
                </span>

                <img src={slide.title} alt="Title" />
                <img className="ml-0 mt-5" src={slide.text} alt="Text" />



                {/* دکمه‌های اصلی */}
                <div className="flex w-full h-30 gap-6 mt-5">
                  <a
                    href="#"
                    className="bg-[#E21A43] text-white  flex items-center max-h-12 px-6 font-semibold transition-all duration-300"
                    style={{ backgroundColor: slide.bgColor, borderColor: slide.bgColor }}
                  >
                    {slide.button1Text}
                  </a>
                  <a
                    href="#"
                    className="text-[#E21A43]  flex items-center max-h-12 px-6 font-semibold border border-[#E21A43] transition-all duration-300"
                    style={{ borderColor: slide.bgColor, color: slide.bgColor }}

                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = slide.bgColor}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    {slide.button2Text}
                  </a>
                  <img
                    className="ml-auto -mt-5 mr-auto w-10"
                    src={slide.goolIcon}
                    alt="gool"
                  />
                </div>
              </div>

              {/* بخش راست - تصویر */}
              <div className="w-1/2 flex justify-end overflow-hidden items-center relative">
                <img
                  src={slide.image}
                  alt="Sushee"
                  className="max-h-full object-contain
                       opacity-0 translate-x-[100px] 
                      animate-[slideIn_1.2s_cubic-bezier(0.25,0.46,0.45,0.94)_0.3s_forwards]"
                />



              </div>

              <style jsx>{`
                       @keyframes slideIn {
                          0% {
                            opacity: 0;
                            transform: translateX(100px) rotate(5deg);
                          }
                          100% {
                            opacity: 1;
                            transform: translateX(0) rotate(0);
                          }
                        }
                `}</style>

            </div>
          </div>
        ))}
      </div>


    </div>

  );

}