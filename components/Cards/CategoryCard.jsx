import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryCard = ({ category }) => {
  return (
    <Link href={`/categories/${category.slug}`}>
      <div className='hover:text-primary ease-in duration-300 text-secondary hover:cursor-pointer'>
        <Image width={1080} height={720} src={category.image} alt="" className='w-full object-cover rounded-md' />
        <div className='mt-2'>
          <p className='font-light text-base'>
            {category.name}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default CategoryCard