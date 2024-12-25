import CardData2 from "./CardData2";

const OurPromise = () => {
  const cards = [
    {
      image: "/images/services/card2-1.jpg",
      title: "24/7 Service Desk ",
      description:
        "Our Australia & Pakistan based Service desk operates 24/7 * 365 days of the year. Your query/request will be responded within seconds via call or emails. ",
    },
    {
      image: "/images/services/card2-2.jpg",
      title: "Highly Skilled Resources ",
      description:
        "Our engineers are highly skilled, professional and up to date with current vendor certifications. We can reassure you that our fix rate is more than 97%. ",
    },
    {
      image: "/images/services/card2-3.jpg",
      title: "Parts Availability ",
      description:
        "We store our parts local to your customer’s premises, which will guarantee you that you wouldn’t be waiting for parts delivery to fix your problem. We will dispatch our engineers with parts for fast delivery of services. ",
    },
    {
      image: "/images/services/card2-4.jpg",
      title: "Cost Saving ",
      description:
        "With our partnership you will have access to our experts at competitive rates globally. By outsourcing your projects, you will get high quality services at low price. ",
    },
  ];

  return (
    <main className="py-10">
      {/* Header */}
      <div className="text-center mb-2  lg:mb-4 px-4 flex flex-col justify-center items-center gap-2 ">
        <h1 className="text-xs md:text-sm font-semibold text-[#00CFF1] uppercase leading-wider  w-full">
          __Our Promise
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold  leading-wide mb-4 w-full p-2 md:w-[50%] lg:w-[40%]">
          Delivering Excellence with Every Promise Kept
        </h2>
      </div>

      {/* Cards Section */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <CardData2
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </main>
  );
};

export default OurPromise;
