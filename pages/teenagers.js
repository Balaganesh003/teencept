import React from "react";

function Teenagers() {
  return (
    <>
      <div className=" max-w-[1280px] mx-auto w-full h-screen">
        <p className=" pl-[68px] mt-[127px] font-Inter text-[#686DE0] font-[500] text-[20px] tracking-[6px]">
          UNLEASH YOUR POTENTIAL
        </p>
        <div className="px-[55px] mt-[50px] flex gap-[2rem] ">
          <div className=" font-Atkinson w-[45%]  text-[2.25rem] font-[400] tracking-[-0.54px]">
            With a diverse community, meet fellow ambitious teens and create
            meaningful connections
          </div>
          <div className=" font-Inter w-[51%] font-[400]  text-[20px] text-[#2E2E2E] tracking-[-0.2px]">
            Welcome to Novoteen - the prime destination for ambitious teenagers.
            Unleash your potential with our exclusive members only platform
            filled with opportunities & connections just waiting to be made.
          </div>
        </div>
        <div className=" mt-[90px] mx-[40px] w-full">
          <div className=" grid grid-cols-4 gap-0 w-full h-full">
            <div className=" relative  h-[300px]">
              <img
                src="/images/teenagers/img1.png"
                className=" w-full h-full  object-cover"
                alt="a"
              />
              <img
                src="/images/teenagers/Rectangle1.svg"
                className=" z-10 absolute top-[-0.5%] right-[-0.5%]"
                alt="a"
              />
            </div>
            <div className=" relative  h-[300px]">
              <img
                src="/images/teenagers/img2.png"
                className=" w-full h-full  object-cover"
                alt="a"
              />
              {/*  tl */}
              <img
                src="/images/teenagers/tl.svg"
                className=" absolute top-[-0.5%] left-[-0.5%]"
                alt="tl"
              />
              {/*  tr */}
              <img
                src="/images/teenagers/tr.svg"
                className=" absolute top-[-0.5%] right-[-0.5%]"
                alt="tr"
              />
              {/*  bl */}
              <img
                src="/images/teenagers/bl.svg"
                className=" absolute bottom-[-0.5%] left-[-0.5%]"
                alt="bl"
              />
              {/*  br */}
              <img
                src="/images/teenagers/br.svg"
                className=" absolute bottom-[-0.5%] right-[-0.5%]"
                alt="br"
              />
            </div>
            <div className=" relative  h-[300px]">
              <img
                src="/images/teenagers/img3.png"
                className=" w-full   object-cover"
                alt="a"
              />
              {/* circle */}
              <img 
              src="/images/teenagers/circle.svg"
              className=" absolute top-[28%] left-[27%]"
              alt="w"
              />
            </div>
            <div className=" relative  h-[300px]">
              <img
                src="/images/teenagers/img4.png"
                className="w-full h-full object-cover"
                alt="a"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teenagers;
