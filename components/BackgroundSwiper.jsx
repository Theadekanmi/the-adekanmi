'use client';

import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

const slides = [
  {
    image: 'https://res.cloudinary.com/dpuj2f1h3/image/upload/v1747229071/Jay1_ypljmc.jpg',
    text: 'Welcome to My Page',
    button: 'Learn More',
    link: '/About',
  },
  {
    image: 'https://res.cloudinary.com/dpuj2f1h3/image/upload/v1747229058/jay_ktr5b1.jpg',
    text: 'Explore My Services',
    button: 'Our Services',
    link: '/Services',
  },
  {
    image: 'https://res.cloudinary.com/dpuj2f1h3/image/upload/v1747229116/jay2_hc4enf.jpg',
    text: 'Let\'s Build Together',
    button: 'Contact Me',
    link: '/Contact',
  },
];

export default function BackgroundSwiper() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        slidesPerView={1}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-screen">
              {/* Background Image - Full screen */}
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />
              
              {/* Overlay - Full coverage with proper positioning */}
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              
              {/* Content - Centered with proper z-index */}
              <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
                <div
                  data-aos="fade-up"
                  className="text-white backdrop-blur-sm bg-black/30 rounded-2xl p-8 md:p-12 max-w-3xl border border-white/20 shadow-2xl"
                >
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-lg">
                    {slide.text}
                  </h1>
                  <a
                    href={slide.link}
                    className="inline-block mt-6 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-semibold text-lg"
                  >
                    {slide.button}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Enhanced Swiper Arrows */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          width: 50px;
          height: 50px;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(0, 0, 0, 0.8);
          transform: scale(1.1);
        }
        
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
