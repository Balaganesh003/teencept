"use-client"
import React from "react";
import { Slide } from "react-awesome-reveal";
function Hero2() {
  return (
    <>
      <div className="w-full h-screen sm:h-full bg-[#FFF9F6]">
        <div className=" max-w-[1280px] w-full mx-auto overflow-hidden">
          <div className="w-full h-[420px] relative flex items-center justify-center">
            <div className=" font-Atkinson text-[2.625rem] tracking-[-5%] font-[500]   text-center">
            
                Reimagining networking
              <br />
              for ambitious teens
               
             
            </div>
            
            <div className="  absolute top-[53px] left-[53px]">
            <Slide direction="up" >
                <img 
                src="/images/landingPage/l1.png"
                alt="a"
                className=" w-[132px] h-[164px]"
                />
                </Slide>
            </div>
            
            <div className="  absolute bottom-[41px] left-[53px]">
            <Slide direction="up" delay="10">
                <img 
                src="/images/landingPage/l2.png"
                alt="a"
                className=" w-[132px] h-[132px]"
                />
                </Slide>
            </div>
            <div className="  absolute bottom-[41px] left-[210px]">
            <Slide direction="up" delay="10">
                <img 
                src="/images/landingPage/l3.png"
                alt="a"
                className=" w-[110px] h-[206px]"
                />
                </Slide>
            </div>
            <div className="  absolute bottom-[41px] left-[347px]">
            <Slide direction="up" delay="15">
                <img 
                src="/images/landingPage/l4.png"
                alt="a"
                className=" w-[99px] h-[99px]"
                />
                </Slide>
            </div>
            <div className="  absolute top-[102px] left-[895px]">
            <Slide direction="up">
                <img 
                src="/images/landingPage/r1.png"
                alt="a"
                className=" w-[220px] h-[94px]"
                />
                </Slide>
            </div>
            <div className="  absolute top-[215px] left-[895px]">
            <Slide direction="up" delay="10">
                <img 
                src="/images/landingPage/r2.png"
                alt="a"
                className=" w-[66px] h-[66px]"
                />
                </Slide>
            </div>
            <div className="  absolute bottom-[40px] right-[330px]">
            <Slide direction="up" delay="15">
                <img 
                src="/images/landingPage/r3.png"
                alt="a"
                className=" w-[132px] h-[85px]"
                />
                </Slide>
            </div>
            <div className="  absolute bottom-[40px] right-[170px]">
            <Slide direction="up" delay="10">
                <img 
                src="/images/landingPage/r4.png"
                alt="a"
                className=" w-[128px] h-[165px]"
                />
                </Slide>
            </div>
            <div className="  absolute bottom-[163px] right-[37px]">
            <Slide direction="up" >
                <img 
                src="/images/landingPage/r5.png"
                alt="a"
                className=" sm:w-[112px] w-[120px] h-[132px] sm:h-[124px]"
                />
                </Slide>
            </div>
            <div className="  absolute bottom-[40px] right-[37px]">
            <Slide direction="up" delay="10">
                <img 
                src="/images/landingPage/r6.png"
                alt="a"
                className=" w-[110px] h-[110px]"
                />
                </Slide>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero2;
