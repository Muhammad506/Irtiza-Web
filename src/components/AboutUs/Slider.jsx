import Slider from "react-slick";

const AutoSlider = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1, // Show only one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Automatically slide every 2 seconds
    // pauseOnHover: true,
  };

  return (
    <main>
      <div className="relative bg-[url('/images/about/aboutbg.jpg')] h-96 bg-cover bg-center text-white">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Slider */}
        <div className="relative z-10 h-full ">
          <Slider {...settings}>
            {/* Page 1 */}
            <div className="h-96 flex items-center justify-start px-8">
              <div className="p-6 rounded-lg text-left max-w-lg">
                <h1 className="text-xl md:text-2xl xl:text-3xl font-bold mb-4">
                  Content Elevating Businesses with Solutions
                </h1>
                <p>
                  Delivering high-quality SaaS solutions that redefine
                  excellence and set new industry benchmarks.
                </p>
              </div>
            </div>

            {/* Page 2 */}
            <div className="h-96 flex items-center justify-start px-8">
              <div className="p-6 rounded-lg text-left max-w-lg">
                <h1 className="text-xl md:text-2xl xl:text-3xl font-bold mb-4">
                  Innovative IT Services for Success
                </h1>
                <p>
                  Empowering clients to achieve goals with efficiency and
                  precision through innovative services.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </main>
  );
};

export default AutoSlider;
