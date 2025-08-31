import React from 'react'
import Button from '../Button';

const Page2 = () => {
  return (
    <div className="w-full h-[70vh]  bg-cover bg-center  bg-no-repeat  bg-[url(/Images/foreground.jpg)] md:h-[70vh] flex flex-col items-center">
      <h1 className="text-white  font-Italic text-center font-bold text-4xl w-[85%] leading-12 md:l mt-12 tracking-wide text-shadow-lg md:text-6xl md:text-center md:py-10">
        Bring a Joy and Make a Difference..
      </h1>
      <h4 className="text-oklch(70.7% 0.022 261.325) text-shadow-lg tracking-wider my-9 text-center leading-7">
        Craving Indian delicacies ? Order Online now and enjoy the authentic
        flavors of sankalp right at your doorstep!!
      </h4>
      <div className="btns flex flex-col gap-4 md:flex-row">
        <Button
          className="hover:text-xl"
          name="ORDER ONLINE"
          borderColor="yellow-600"
          bgColor="transparent"
          textColor="text-red-500"
          hoverBg="yellow-100"
        />
        <Button
          name=" RESERVE A TABLE"
          borderColor="yellow-600"
          bgColor="transparent"
          textColor="text-yellow-400"
          hoverBg="yellow-100"
        />
      </div>
    </div>
  );
}

export default Page2