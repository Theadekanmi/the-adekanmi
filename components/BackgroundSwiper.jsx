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
    text: 'Let’s Build Together',
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
  <div
    className="relative w-full h-screen flex flex-col items-center justify-center text-white"
    style={{
      backgroundImage: `url(${slide.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}
  >
    {/* Overlay Content */}
    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center z-10 px-4 text-center">
      <div
        data-aos="fade-up"
        className="text-white backdrop-blur-md bg-white/10 rounded-xl p-6 md:p-10 max-w-2xl"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.text}</h1>
        <a
          href={slide.link}
          className="inline-block mt-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-blue-600 transition"
        >
          {slide.button}
        </a>
      </div>
    </div>
  </div>
</SwiperSlide>


        ))}
      </Swiper>

      {/* Swiper Arrows */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          width: 40px;
          height: 40px;
        }
      `}</style>
    </div>
  );
}
