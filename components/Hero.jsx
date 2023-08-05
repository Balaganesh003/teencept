import Link from 'next/link';
import React from 'react';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Img from '@/public/images/hero/img.png';
import Img1 from '@/public/images/hero/img1.png';
import Img2 from '@/public/images/hero/img2.png';
import Img3 from '@/public/images/hero/img3.png';
import Img4 from '@/public/images/hero/img4.png';
import Img5 from '@/public/images/hero/img5.png';
import Img6 from '@/public/images/hero/img6.png';
import Img7 from '@/public/images/hero/img7.png';
import Img8 from '@/public/images/hero/img8.png';
import Img9 from '@/public/images/hero/img9.png';
import FadeInOnScroll from './FadeInOnScroll';

function Hero() {
  return (
    <div className=" max-w-[100%] relative h-full  pb-[5rem] flex items-center justify-center">
      <div className="absolute bottom-0 left-8">
        <div className="flex gap-3 items-end">
          <div className="flex flex-col gap-3">
            <FadeInOnScroll delay={800}>
              <Image src={Img8} alt="hero" className="object-contain" />
            </FadeInOnScroll>
            <FadeInOnScroll delay={300}>
              <Image src={Img7} alt="hero" className="object-contain" />
            </FadeInOnScroll>
          </div>

          <FadeInOnScroll delay={500}>
            <Image src={Img6} alt="hero" className="object-contain " />
          </FadeInOnScroll>
          <FadeInOnScroll delay={600}>
            <Image src={Img9} alt="hero" className="object-contain " />
          </FadeInOnScroll>
        </div>
      </div>
      <div className="absolute bottom-0 right-8">
        <div className="flex gap-3 items-end">
          <div className="flex flex-col gap-3 items-end translate-x-[67.5%]">
            <FadeInOnScroll delay={100}>
              <Image src={Img1} alt="hero" className="object-contain" />
            </FadeInOnScroll>
            <FadeInOnScroll delay={300}>
              <Image src={Img} alt="hero" className="object-contain" />
            </FadeInOnScroll>
          </div>
          <div className="flex flex-col gap-3 items-end">
            <FadeInOnScroll delay={600}>
              <Image src={Img4} alt="hero" className="object-contain" />
            </FadeInOnScroll>
            <FadeInOnScroll delay={200}>
              <Image src={Img2} alt="hero" className="object-contain" />
            </FadeInOnScroll>
          </div>
          <div className="flex flex-col gap-3">
            <FadeInOnScroll delay={500}>
              <Image src={Img5} alt="hero" className="object-contain" />
            </FadeInOnScroll>
            <FadeInOnScroll delay={100}>
              <Image src={Img3} alt="hero" className="object-contain" />
            </FadeInOnScroll>
          </div>
        </div>
      </div>
      <div className=" lg:w-[calc(1320px + 30vw)] relative  overflow-x-hidden  flex items-center justify-center">
        <div className="flex-col   flex items-center  font-semibold     top-2 md:top-[10%] md:left-[40%]">
          <h6 className="uppercase tracking-[1px] mt-4 md:mt-14">
            Work at Square
          </h6>
          <h2 className="md:text-[2.625rem] text-[1.5rem] text-center leading-[2rem] md:leading-[3.375rem] mt-5">
            Invent today.
            <br />
            Shape tomorrow.
          </h2>
          <button className="w-[118px] mt-5 py-3 bg-blue-600 rounded text-white hover:bg-blue-700">
            <Link href="#">Search jobs</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
