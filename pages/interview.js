import React from "react";
import Carousel from "@/components/Carousal";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight, AiOutlinePlusCircle } from "react-icons/ai";
import Cards from "@/components/Cards";
import Carousel2 from "@/components/Carousel2";
import Carousal4 from "@/components/Carousal4";
function interview() {
  const images = [
    "https://ik.imagekit.io/nhuikqpll/homepage/70164741_523473378431412_876750050563958581_n-min.jpg",
    "https://ik.imagekit.io/nhuikqpll/homepage/315629526_500619635420904_6371819520038542661_n-min.jpg",
    "https://ik.imagekit.io/nhuikqpll/homepage/363384378_662387962577403_4220818092279134437_n-min.jpg",
    "https://ik.imagekit.io/nhuikqpll/homepage/277371173_1033156637284162_6854499599376410604_n-min.jpg",
    // "images/corsoul/careers_home_carousel_support.png",
    // Add more images with their respective widths
  ];

  const cardData = [
    {
      title: "Payments",
      desc: "Accept every kind of payment quickly and securely.",
      linkWord: "Learn more",
      img: "/images/interview/payment.svg",
      height: "86",
      weight: "86",
    },
    {
      title: "Point of Sale",
      desc: "Find the right point-of-sale software to help you run your business.",
      linkWord: "Learn more",
      img: "/images/interview/point_of.svg",
      height: "86",
      weight: "86",
    },
    {
      title: "Square Online",
      desc: "Create and launch an online ordering site with no monthly fee.",
      linkWord: "Learn more",
      img: "/images/interview/square_online.svg",
      height: "86",
      weight: "86",
    },
    {
      title: "Square Capital",
      desc: "Get easy access to loans to keep your business moving forward.",
      linkWord: "Learn more",
      img: "/images/interview/square_capital.svg",
      height: "86",
      weight: "86",
    },
  ];


  
  return (
    <>
      <p className="py-2 bg-[#f2f2f2] text-center font-[500] ">
        Currently, all interviews are conducted virtually via phone or Google
        Meet.
      </p>
      <div className="md:pt-[5.25rem] pt-[3.25rem]  flex justify-center items-center flex-col">
        <p className=" tracking-[1px] font-[500] text-[1rem]   text-center">
          INTERVIEWING AT SQUARE
        </p>
        <p className="md:text-[2.75rem] text-[2rem] font-[500] w-full px-[20px] md:px-0  md:w-[50%] text-center leading-[2.50rem] md:leading-[3.25rem] mt-[1rem]">
        Empowering ambitious teens to network, collaborate, grow, succeed
        </p>
        <p className="md:text-[1.25rem] text-[1.125rem] font-[400] text-center md:w-[52%] w-[80%]  md:pt-[2.625rem] pt-[1.635rem] leading-[1.75rem] ">
       In a fast-paced world where connections are the keys to success, teenagers often find themselves lacking the necessary opportunities to network and build valuable relationships
        </p>
        <p className="md:text-[1.25rem] text-[1.125rem] font-[400] text-center md:w-[54%] w-[80%]  md:pt-[2.625rem] pt-[1.635rem] leading-[1.75rem] ">
        Networking allows them to expand their horizons, learn from others, and open doors to exciting opportunities. However, a networking and collaboration platform focused on personal growth tailored specifically for teenagers didn’t exist - until now. Introducing NovoTeen - the ultimate networking platform for teenagers ready to make their mark on the world.        </p>
      </div>
      <div class="relative mt-10">
        <Carousal4 images={images} />
      </div>
      <div className="w-full h-full  flex justify-center mt-10">
        <div className="container  flex justify-center flex-col items-center">
          <p className="py-6 md:text-[2rem] text-[1.5rem] font-[500] w-full px-[20px] text-center md:w-[40%]">Providing teenagers with the guidance they need to thrive</p>
          <div className="grid md:grid-cols-2 grid-cols-1 w-[80%] py-6 mb-10 ">
            <div className="">
              <Image
                src="/images/interview/interview.svg"
                width={400}
                height={400}
                alt="image"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-[1rem] leading-[1.75rem] mt-[40px] w-full px-[20px] md:px-0 md:w-[84%]">
                {" "}
                We understand that networking, especially at such a crucial stage in their lives, requires <span className=" font-bold">more than just facilitating connections.</span>  NovoTeen has come up with a unique and comprehensive approach to empower these young minds to dream big and take bold steps towards their future.
                </p>
              <Link
                href="#"
                className="flex items-center text-blue-500 text-center mt-5"
              >
                <AiOutlinePlusCircle className="text-4xl mr-2" />
                <p>Learn more about the process</p>
              </Link>
            </div>
          </div>
          <div className="pt-10 w-[80%] border-y-[1px] border-gray-400">
            <p className="py-8 text-[2rem] font-[500] text-center">
              Learn more about our products and services.
            </p>
            <div className="flex items-center justify-center">
              <div className="grid md:grid-cols-4 grid-cols-1 pb-[15px] md:pb-[40px]  mt-10 ">
                {cardData.map((data, index) => {
                  return <Cards cardData={data} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* color sections */}
      <div className="pt-[2.5rem] w-full h-full">
        <p className="text-center pb-[2rem] md:pb-[4rem]">
          See available jobs for{" "}
          <Link href="#" className="font-[500] text-blue-600">
            {" "}
            Cash App
          </Link>{" "}
          and{" "}
          <Link href="#" className="font-[500] text-blue-600">
            TIDAL
          </Link>
        </p>
        <div className="w-full h-full py-[5rem] flex-col bg-[#6DBAAB] flex justify-center items-center">
          <p className="text-[1.75rem] text-white md:w-[65%] w-[85%] font-[400]">
            “At Square, we want all of our candidates to feel they can thrive
            during the interview process. We know that finding and choosing a
            job is deeply personal, and our team is here to help guide you
            through that journey.”
          </p>
          <p className="tracking-[1px] text-white text-[1rem] mt-10 text-start  md:w-[65%] w-[85%]">
            TAYLOR CASCINO, HEAD OF TALENT
          </p>
        </div>
      </div>
      {/*  */}
      <div className="bg-[#F2F2F2] pt-[4rem]">
        <p className="text-[2rem] font-[500] text-center">
          Get to know us a little better.
        </p>
        <div className="py-10 text-center">
        {/* card start */}
                <Carousel2/>
          {/* card end */}
          
        </div>
      </div>
      <div className=" w-full  flex justify-center ">
        <div className="mt-[3.75rem] w-full flex flex-col items-center justify-center">
          <Image
            src="/images/svgs/sun.svg"
            height={100}
            width={100}
            alt="Picture of the author"
          />
          <p className="pt-[2rem] text-[2rem] font-[500] text-center">
            Find the right opportunity at Square.
          </p>
          <Link
            href="#"
            className="w-[150px] h-[32px] my-[2rem] btn text-[12px]  bg-blue-700 text-center text-white rounded-[10px]"
          >
            search all jobs
          </Link>
        </div>
      </div>
    </>
  );
}

export default interview;
