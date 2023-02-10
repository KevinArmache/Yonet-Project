import Image from 'next/image'
import React from 'react'

const CategoryCard = ({ category }) => {
  return (
    <div className='hover:text-primary ease-in duration-300 text-secondary hover:cursor-pointer'>
      <Image width={1080} height={720} src="/asset/images/beatmaker.jpg" alt="" className='w-full object-cover rounded-md' />
      <div className='mt-2'>
        <p className='font-light text-base'>
          Beat maker
        </p>
      </div>
    </div>
  )
}

export default CategoryCard