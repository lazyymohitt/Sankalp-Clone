import React from 'react'
import Button from '../Button';

const Page1 = () => {
  return (
    <div className=" flex items-center justify-center bg-[url(/Images/main.jpg)] bg-cover bg-center bg-no-repeat bg-full w-full h-[50vh] bg-red-500 md:h-[90vh] md:bg-center">
      <div className="center-text flex h-full w-full flex-col justify-center bg-[#201f219d]  text-white">
        <h1 className="text-center text-3xl mb-5 font-bold font-GilSBt md:text-7xl md:font-normal tracking-wider">
          Welcome to Our Restaurant!!
        </h1>
        <h4 className="text-center text-xs mx-5 tracking-wide md:text-base md:tracking-wider  ">
          Experience refined dining where authentic flavors meet elegant
          ambiance. Every dish is crafted with care to give you a memorable
          taste of sophistication. <br />
          Our chefs bring together the finest ingredients and timeless recipes,
          reimagined with a modern twist to please even the most refined palate.
        </h4>

        <div className="btns flex mt-9 justify-center gap-5">
          <Button
            name="Become VIP"
            borderColor="yellow-600"
            bgColor="transparent"
            textColor="text-yellow-400"
            hoverBg="yellow-100"
          />
          <Button name="Order Online" />
        </div>
      </div>
    </div>
  );
}

export default Page1