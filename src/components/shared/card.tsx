import Image from 'next/image'
import React, { FC } from 'react'
import { CardProps } from '@/interfaces'

const Card: FC<CardProps> = ({ imageUrl, title, content }) => {
  return (
    <>
      <div
        className={` flex flex-col  gap-4 rounded overflow-hidden shadow-md p-5 bg-white `}
      >
        <Image
          loading='lazy'
          src={imageUrl}
          alt={title}
          width={100}
          height={100}
          className=' w-full h-full object-contain'
        />

        <h3 className='text-4xl mb-1  font-montserrat'>{title}</h3>
        <p className={'text-gray-500 text-base font-serif'}>{content}</p>
      </div>
    </>
  )
}

export default Card
