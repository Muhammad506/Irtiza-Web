const CardData2 = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform duration-500 hover:scale-105">
      {/* Image Section */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      {/* Content Section */}
      <div className="p-4">
        <hr className="border-t-4 border-[#00CFF8] w-16 mb-2" />

        <div className=" mb-2 pl-2">
          <h3 className="text-lg font-semibold text-[#142d56] ">{title}</h3>
        </div>
        <p className="text-gray-700 text-sm mb-4 text-justify">{description}</p>
      </div>
    </div>
  );
};

export default CardData2;
