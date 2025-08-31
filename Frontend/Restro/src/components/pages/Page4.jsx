import React from 'react'

const Page4 = () => {
  return (
    <div className="h-full w-full flex flex-col items-center gap-5 md:flex-row md:justify-center md:items-center p-10 md:p-20">
      <div className="part1 w-[90%] h-[80vh] overflow-hidden rounded-md  ">
        <img
          src="Images/Front.jpg"
          className="h-full w-full object-cover object-center"
          alt=""
        />
      </div>
      <div className="part2  w-[90%] h-[80vh]">
        <h1 className='text-4xl tracking-wide text-center py-7 lg:py-4 lg:text-3xl font-GilSB'>Welcome to Our Restaurant - The  Taste Of India</h1>
        <h4 className='text-md leading-7 font-Gilreg tracking-wide text-center lg:text-sm lg:leading-5.5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores commodi dicta a, voluptatem maiores dolor vel nisi veritatis voluptate est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aperiam Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, corrupti. Ipsa neque velit deleniti eaque. Nesciunt esse, illum labore veritatis animi ut fugiat? Assumenda autem qui esse ut provident ipsum molestias id voluptas aliquid. Nulla esse et adipisci ducimus obcaecati! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro commodi ipsum quas mollitia eius voluptatem a sequi neque, temporibus sed, amet ut, qui voluptatibus placeat! Cupiditate aspernatur temporibus ut quia.</h4>
      </div>
      <div
        className="part3  w-[90%] h-[80vh]
      overflow-hidden rounded-md "
      >
        <img
          src="
           
        Images/Inside.jpg"
          className="h-full w-full object-cover object-center"
          alt=""
        />
      </div>
    </div>
  );
}

export default Page4