const CardData = ({ image, title, description, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-72 h-[400px]">
      {/* Image Section */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between h-[calc(100%-12rem)]">
        <div>
          <hr className="border-t-2 border-orange-500 w-12 mb-2" />
          <div className="mb-2 pl-2">
            <h3 className="text-lg font-semibold text-blue-900">{title}</h3>
          </div>
          <p className="text-gray-700 text-sm mb-4">{description}</p>
        </div>
        <a
          href={link}
          className="text-orange-500 text-sm font-medium flex items-center hover:underline mt-auto"
        >
          Read more <span className="ml-1">&rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default CardData;
