import React from "react";

const Page3 = () => {
  // Image paths from public folder
  const images = [
    "/Images/img1.jpg",
    "/Images/img2.jpg",
    "/Images/img3.jpg",
    "/Images/img4.jpeg",
    "/Images/img5.jpeg",
    "/Images/img6.webp",
    "/Images/img7.jpg",
    "/Images/img8.jpg",
    "/Images/img9.webp",
    "/Images/img10.jpg",
    "/Images/img11.jpg",
    "/Images/img12.jpg",
    "/Images/img13.jpg",

  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="w-full mb-4 rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default Page3;
