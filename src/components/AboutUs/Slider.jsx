import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import Slider from "react-slick";

const AutoSlider = () => {
  const slickSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const slides = [
    { id: 1, label: "Innovation" },
    { id: 2, label: "Excellence" },
    { id: 3, label: "Collaboration" },
    { id: 4, label: "Customer-Centric" },
  ];

  return (
    <main>
      {/* Top Section with Slick Slider */}
      <div className="relative bg-[url('/images/about/aboutbg.jpg')] h-96 bg-cover bg-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-white/5"></div>
        <div className="relative z-10 h-full mt-20">
          <Slider {...slickSettings}>
            <div className="h-full flex items-center justify-start px-6 md:px-12">
              <div className="max-w-lg">
                <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-4 leading-tight">
                  Elevating Businesses with Exceptional Solutions
                </h1>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Delivering high-quality SaaS solutions that redefine
                  excellence and set new industry benchmarks. Our innovative
                  services empower clients to achieve their goals with
                  efficiency and precision.
                </p>
              </div>
            </div>
            <div className="h-full flex items-center justify-start px-6 md:px-12">
              <div className="max-w-lg">
                <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-4 leading-tight">
                  Empowering Businesses, One Solution at a Time
                </h1>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Partnering with businesses to meet their IT needs through
                  cutting-edge SaaS solutions, driving growth and success at
                  every step.
                </p>
              </div>
            </div>
            <div className="h-full flex items-center justify-start px-6 md:px-12">
              <div className="max-w-lg">
                <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-4 leading-tight w-[80%]">
                  Pioneering the Future of IT Solutions
                </h1>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  An innovative IT company dedicated to empowering enterprises.
                  Progress-driven and committed to staying ahead, we deliver
                  transformative IT solutions that enable businesses to thrive
                  globally.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* Bottom Section with Swiper */}
      {/* <div className="justify-center items-center bg-gray-500 mx-auto py-12 flex"> */}
      <div className="justify-center items-center bg-gradient-to-tr from-[#00CFF8] to-[#1a73e8] mx-auto py-12 flex">

        <Swiper
          spaceBetween={10}
          slidesPerView="auto"
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000 }}
          className="w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="w-80 flex-shrink-0 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="relative mb-4">
                  <div className="bar w-full h-1 bg-gray-200">
                    <div className="in h-1 bg-blue-900 w-16 animate-progress"></div>
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-white">
                  {slide.label}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default AutoSlider;
