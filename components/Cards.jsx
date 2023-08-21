import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"
function Cards({cardData}) {
  return (
   <>
    <div className='w-full h-fit flex flex-col items-center'>
       <Image
       src={cardData.img}
        alt="Card" 
        width={cardData. weight}
        height={cardData.height}
        />
        <h3 className='text-[1rem]  font-Atkinson   font-bold mt-[1.75rem]'>
            {cardData.title}
        </h3>
        <p className='mt-[0.5rem] font-Inter text-[1rem] leading-[1.75] tracking-[-0.015em] font-[300] text-center'>
            {cardData.desc}
        </p>
        <Link href="#" className='text-blue-500 font-Inter flex text-[1rem] font-[400] items-center mt-[1.5rem]'>
            {cardData.linkWord}
            <AiOutlineArrowRight className='ml-2'/>
        </Link>

    </div>
   </>
  )
}

export default Cards