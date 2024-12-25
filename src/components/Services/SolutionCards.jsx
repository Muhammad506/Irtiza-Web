import CardData from "./CardData";

const SolutionCards = () => {
  const itServices = [
    {
      image: "https://via.placeholder.com/600x300",
      title: "Data Centre Support",
      description:
        "We can help our customers to relocate their data center equipment. Hardware installation, SLA operations, and Asset Inventory.",
      link: "/data-centre-support",
    },
    {
      image: "https://via.placeholder.com/600x300",
      title: "Cloud Solutions",
      description:
        "We provide scalable and secure cloud solutions tailored to meet your business needs.",
      link: "/cloud-solutions",
    },
    {
      image: "https://via.placeholder.com/600x300",
      title: "Cybersecurity Services",
      description:
        "Protect your business with our comprehensive cybersecurity solutions.",
      link: "/cybersecurity-services",
    },
    {
      image: "https://via.placeholder.com/600x300",
      title: "IT Consulting",
      description:
        "Our experts will help you create an effective IT strategy and optimize your operations.",
      link: "/it-consulting",
    },
    {
      image: "https://via.placeholder.com/600x300",
      title: "Digital Transformation",
      description:
        "Revolutionize your business processes with our digital transformation solutions.",
      link: "/digital-transformation",
    },
    {
      image: "https://via.placeholder.com/600x300",
      title: "Managed IT Services",
      description:
        "Outsource your IT operations to us for streamlined efficiency and cost savings.",
      link: "/managed-it-services",
    },
    {
      image: "https://via.placeholder.com/600x300",
      title: "DevOps Solutions",
      description:
        "Accelerate development and deployment with our expert DevOps solutions.",
      link: "/devops-solutions",
    },
    {
      image: "https://via.placeholder.com/600x300",
      title: "Software Development",
      description:
        "Build custom software solutions tailored to your unique business needs.",
      link: "/software-development",
    },
  ];

  const managedServices = [
    {
      image: "https://via.placeholder.com/600x300",
      title: "AI and Machine Learning",
      description:
        "Leverage the power of AI and ML to drive innovation in your business.",
      link: "/ai-ml-solutions",
    },
    {
      image: "https://via.placeholder.com/600x300",
      title: "IoT Solutions",
      description:
        "Connect and manage devices with our cutting-edge IoT solutions.",
      link: "/iot-solutions",
    },
    {
      image: "https://via.placeholder.com/600x300",
      title: "Network Optimization",
      description:
        "Enhance network performance and reliability with our optimization services.",
      link: "/network-optimization",
    },
    {
      image: "https://via.placeholder.com/600x300",
      title: "Backup and Recovery",
      description:
        "Protect your data with our comprehensive backup and recovery solutions.",
      link: "/backup-recovery",
    },
    {
      image: "https://via.placeholder.com/600x300",
      title: "End-User Support",
      description:
        "Ensure seamless IT support for your users with our end-to-end services.",
      link: "/end-user-support",
    },
    {
      image: "https://via.placeholder.com/600x300",
      title: "Infrastructure Management",
      description:
        "Optimize your IT infrastructure with our management solutions.",
      link: "/infrastructure-management",
    },
  ];

  return (
    <main className="py-10">
      {/* IT Services */}
      <div>
        <div className="text-center mb-6 px-4">
          <h1 className="text-sm md:text-base font-semibold text-blue-500 tracking-wide uppercase">
            IT Services
          </h1>
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
        <div className="text-center mb-6 px-4">
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
