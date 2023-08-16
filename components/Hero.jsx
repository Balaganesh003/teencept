import Link from 'next/link';
import React from 'react';
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
import Img10 from '@/public/images/hero/img10.png';
import FadeInOnScroll from './FadeInOnScroll';

function Hero() {
  return (
    <div className=" bg-[#FFF9F6] relative h-full   pb-[5rem] flex items-center justify-center">
      <div className="hidden md:absolute md:block bottom-0 left-5">
        <div className="flex gap-3 items-end hero-img">
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
      <div className="hidden md:absolute bottom-0 right-5 md:flex justify-end">
        <div className="flex gap-3  items-end hero-img w-fit">
          <div className="flex flex-col gap-3 items-end md:translate-x-[43%] lg:translate-x-[58%] xl:translate-x-[69%] 2xl:translate-x-[70%]">
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
      <div className="block md:hidden  absolute top-10">
        <div className="flex flex-col gap-6 max-w-[25rem]">
          <div className="flex gap-3 items-end ">
            <div className="flex flex-col gap-3">
              <FadeInOnScroll delay={100}>
                <Image src={Img5} alt="hero" className="object-contain" />
              </FadeInOnScroll>
              <FadeInOnScroll delay={300}>
                <Image src={Img6} alt="hero" className="object-contain" />
              </FadeInOnScroll>
            </div>
            <div className="flex flex-col gap-3">
              <FadeInOnScroll delay={500}>
                <Image src={Img8} alt="hero" className="object-contain" />
              </FadeInOnScroll>
              <FadeInOnScroll delay={200}>
                <Image src={Img} alt="hero" className="object-contain" />
              </FadeInOnScroll>
            </div>
            <div className="flex flex-col gap-3">
              <FadeInOnScroll delay={600}>
                <Image src={Img10} alt="hero" className="object-contain" />
              </FadeInOnScroll>
              <FadeInOnScroll delay={100}>
                <Image src={Img7} alt="hero" className="object-contain" />
              </FadeInOnScroll>
              <FadeInOnScroll delay={400}>
                <Image src={Img2} alt="hero" className="object-contain" />
              </FadeInOnScroll>
            </div>
          </div>
          <div className="flex gap-3 ">
            <FadeInOnScroll delay={100}>
              <Image src={Img4} alt="hero" className="object-contain" />
            </FadeInOnScroll>
            <FadeInOnScroll delay={300}>
              <Image src={Img9} alt="hero" className="object-contain" />
            </FadeInOnScroll>
            <FadeInOnScroll delay={500}>
              <Image src={Img3} alt="hero" className="object-contain" />
            </FadeInOnScroll>
          </div>
        </div>
      </div>
      <div className="z-10 min-h-screen md:min-h-[50vh] relative bg-[#FFF9F6]/[5%]  overflow-x-hidden  flex items-center justify-center">
        <h2 className="text-[2.625rem] mt-[-6rem] md:mt-0  flex flex-col  text-center font-semibold   ">
          <span>Reimagining networking</span>
          <span>for ambitious teens</span>
        </h2>
      </div>
    </div>
  );
}

export default Hero;
