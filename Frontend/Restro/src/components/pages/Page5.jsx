import React from "react";

const Collage = () => {
  const images = [
    "/Images/img1.jpg",
    "/Images/img2.jpg",
    "/Images/img3.jpg",
    "/Images/img4.jpg",
    "/Images/img5.jpg",
    "/Images/img6.jpg",
    "/Images/img7.jpg",
    "/Images/img8.jpg",
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-7xl w-full">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg break-inside-avoid group"
          >
            <img
              src={src}
              alt={`Collage ${index}`}
              className="w-full object-cover rounded-xl transform group-hover:scale-110 transition duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collage;
