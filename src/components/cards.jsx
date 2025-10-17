import React from "react";

const Cards = ({ images, filter }) => {
  return (
    <div className="px-4 py-8">
      <h2 className="font-['Poppins'] text-2xl font-bold text-center capitalize mb-8">
        {filter} Pictures
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={image.src.medium}
              alt={image.photographer}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
