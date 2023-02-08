
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import LinkButtons from 'components/Buttons/LinkButtons'
import CategoryCard from 'components/Cards/CategoryCard'
import React from 'react'

const Categories = () => {

  return (
    <section className='bg-white'>
      <div className='px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12'>
        <div className='w-full flex justify-between items-center'>
          <h1 className='mb-12 font-sans text-xl font-bold leading-none tracking-tight text-primary sm:text-3xl'>
            Catégories Populaires
          </h1>
          <div className='mb-8'>
            <LinkButtons url="#" text="Voir Plus" buttonIcon={ArrowRightIcon} />
          </div>
        </div>
        <div className='grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4'>
          {[1, 2, 3,  4].map((item, index) => (
            <CategoryCard key={index} category={item} />
          ))}
        </div> 
      </div>
    </section>
  )
}

export default Categories