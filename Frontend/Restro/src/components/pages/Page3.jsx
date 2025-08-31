import React from 'react'

const Page3 = () => {
  return (
    <div className="w-full overflow-hidden  bg-red-500 flex flex-col md:flex-row md:h-[80vh]">
      <div className="part1  relative w-full h-[60vh] md:h-full bg-emerald-200">
        <img
          src="Images/Interior.webp"
          className="h-full w-full object-cover"
          alt=""
        />
        <div className="overlay top-0  flex justify-center items-center h-full absolute w-full bg-[#0000006b]">
          <h1 className="text-white border px-60 py-40 md:px-40 md:py-60   border-amber-100 font-bold font-GilSB text-4xl tracking-wider">
            INTERIOR
          </h1>
        </div>
      </div>
      <div className="part2 relative w-full  h-[60vh] md:h-full bg-emerald-500">
        <img
          src="Images/Outside.jpg"
          className="h-full w-full object-cover"
          alt=""
        />
        <div className="overlay top-0  flex justify-center items-center h-full absolute w-full bg-[#0000006b]">
          <h1 className="text-white border px-60 py-40 md:px-40 md:py-60  border-amber-100 font-bold font-GilSB text-4xl tracking-wider">
            OUTSIDE
          </h1>
        </div>
      </div>
      <div className="part3 relative w-full  h-[60vh] md:h-full bg-emerald-700 ">
        <img
          src="Images/Food.jpg"
          className="h-full w-full object-cover"
          alt=""
        />
        <div className="overlay top-0  flex justify-center items-center h-full absolute w-full bg-[#0000006b]">
          <h1 className="text-white border px-60 py-40 md:px-40 md:py-60  border-amber-100 font-bold font-GilSB text-4xl tracking-wider">
            FOOD
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Page3