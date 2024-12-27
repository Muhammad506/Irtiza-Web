import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main>
      {/* Top section with dark overlay */}
      <div className="relative bg-[url('https://img.freepik.com/free-photo/ai-technology-brain-background-digital-transformation-concept_53876-124672.jpg?t=st=1735118019~exp=1735121619~hmac=dee0a98167a1d2ba1f56e5b7cda079ac188fdd5645284ad683f864f9f7b4ad4b&w=900')] bg-cover bg-center h-80 lg:h-[400px] text-white">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24">
          {/* Heading with animation */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-wide"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            Our Services
          </motion.h1>

          {/* Paragraph with animation */}
          <motion.p
            className="text-sm md:text-base lg:text-lg max-w-xl text-justify"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
          >
            With over 20 years of combined experience, you will receive
            exceptional services and unrivaled expertise globally. Our 4500+
            highly skilled engineers, supported by our 24×7 helpdesk, will
            assist you in achieving your goals.
          </motion.p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
