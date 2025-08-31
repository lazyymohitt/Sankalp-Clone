import React from 'react'
import Button from '../Button';

const Page6 = () => {
  return (
    <div className="h-[75vh] text-white w-full bg-amber-200 bg-[url(Images/BackGround2.jpg)] bg-cover">
      <div className="overlay h-full w-full bg-[#00000081] flex justify-center  items-center">
        <div className="borderr h-[90%] w-[90%] border  border-amber-200 flex flex-col items-center">
          <h1 className="font-GilSB text-4xl md:text-5xl  py-8 mt-5"> Become A Member</h1>
          <h4 className=" text-md font-semibold  md:text-xl tracking-wide text-center py-10 px-5">
            Fill this below form and get benefits of offers , discounts , and
            many more on your cell .
          </h4>
          <Button  name="BECOME A VIP" />
        </div>
      </div>
    </div>
  );
}

export default Page6