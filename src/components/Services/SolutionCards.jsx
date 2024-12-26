import CardData from "./CardData";

const SolutionCards = () => {
  const itServices = [
    {
      image: "../../../images/services/card1.jpg",
      title: "Hardware Break Fix",
      description:
        "Reliable repair and maintenance solutions for desktops, laptops, and peripherals. Minimize downtime with prompt services tailored to your hardware needs. Keep your systems running smoothly with expert care.",
      link: "/data-centre-support",
    },
    {
      image: "../../../images/services/card2.jpg",
      title: "Desktop & IT Supports",
      description:
        " End-to-end IT support for desktops, software, and peripherals. Ensure uninterrupted operations with efficient troubleshooting and regular maintenance. Your trusted partner for day-to-day IT challenges.",
      link: "/cloud-solutions",
    },
    {
      image: "../../../images/services/card3.jpg",
      title: "Rollouts & Migrations",
      description:
        "Seamless deployment and migration of systems, software, and hardware. From planning to execution, ensure smooth transitions with minimal disruptions. Upgrade your IT environment with confidence.",
      link: "/cybersecurity-services",
    },
    {
      image: "../../../images/services/card4.jpg",
      title: "Network Support",
      description:
        "Comprehensive support for network setup, troubleshooting, and optimization. Enhance connectivity and performance for your organization. Dependable solutions for wired and wireless networks.",
      link: "/it-consulting",
    },
    {
      image: "../../../images/services/card5.jpg",
      title: "Data Center Support",
      description:
        "Professional assistance in managing, maintaining, and optimizing data center operations. Ensure maximum uptime and reliability for your critical infrastructure. Scalable solutions for your growing data needs.",
      link: "/digital-transformation",
    },
    {
      image: "../../../images/services/card6.jpg",
      title: "Audio Video Support",
      description:
        "Expert setup and maintenance for AV equipment, including conferencing and presentation systems. Enhance collaboration with high-quality audio and video solutions. Perfect for modern business environments.",
      link: "/managed-it-services",
    },
    {
      image: "../../../images/services/card7.jpg",
      title: "WiFi Services",
      description:
        " Reliable WiFi setup and support for homes and businesses. Ensure fast, secure, and uninterrupted internet connectivity. Customized solutions for optimal wireless performance.",
      link: "/devops-solutions",
    },
    {
      image: "../../../images/services/card8.jpg",
      title: "Tech Recruitmentt",
      description:
        " Streamlined hiring of skilled IT professionals to meet your technical demands. Access a pool of top talent for support, development, and network roles. Build your dream team with ease.",
      link: "/software-development",
    },
  ];

  const managedServices = [
    {
      image: "../../../images/services/card9.jpg",
      title: "IT Assets Management",
      description:
        "Efficient tracking, maintenance, and optimization of IT assets throughout their lifecycle. Ensure cost-effectiveness and seamless operations with proactive asset management. Maximize value from your IT investments.",
      link: "/ai-ml-solutions",
    },
    {
      image: "../../../images/services/card10.jpg",
      title: "Network Design and Maintenance",
      description:
        "Customized network architecture and ongoing support to meet your business needs. Enhance performance, reliability, and scalability with expert design and upkeep. Empower your organization with cutting-edge connectivity.",
      link: "/iot-solutions",
    },
    {
      image: "../../../images/services/card11.jpg",
      title: "Project Management",
      description:
        "Comprehensive management of IT projects from initiation to completion. Ensure timely delivery, budget adherence, and high-quality results with expert oversight. Drive success with strategic planning and execution.",
      link: "/network-optimization",
    },
    {
      image: "../../../images/services/card12.jpg",
      title: "Global Field Services",
      description:
        "On-site IT support and services delivered worldwide for consistent business operations. Expert solutions for hardware, software, and network challenges. A trusted partner wherever your business takes you.",
      link: "/backup-recovery",
    },
    {
      image: "../../../images/services/card13.jpg",
      title: "Service Desk Services",
      description:
        " Responsive and reliable service desk solutions to address IT issues and queries. Enhance user satisfaction with 24/7 support tailored to your needs. Your first line of defense for IT assistance.",
      link: "/end-user-support",
    },
    {
      image: "../../../images/services/card14.png",
      title: "Remote Support",
      description:
        "Instant and efficient IT support delivered remotely to resolve issues quickly. Reduce downtime with expert troubleshooting and maintenance. Convenient solutions for seamless IT operations.",
      link: "/infrastructure-management",
    },
  ];

  return (
    <main className="py-10">
      {/* IT Services */}
      <div>
        <div className="text-center mb-2  px-4 flex flex-col justify-center items-center gap-2 ">
          <h1 className="text-xs md:text-sm font-semibold text-[#00CFF1] uppercase leading-wider  w-full">
            __IT Services
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold  leading-wide mb-4 w-full p-2 md:w-[50%] lg:w-[40%]">
            Your Partner in Digital Transformation Success
          </h2>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {itServices.map((card, index) => (
            <CardData
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              link={card.link}
            />
          ))}
        </div>
      </div>

      {/* Managed Services */}
      <div className="mt-12">
        <div className="text-center mb-2 px-4">
          <h1 className="text-sm md:text-base font-semibold text-blue-500 tracking-wide uppercase">
            Managed Services
          </h1>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {managedServices.map((card, index) => (
            <CardData
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default SolutionCards;
