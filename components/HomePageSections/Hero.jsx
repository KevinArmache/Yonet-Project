import CategoriesDropDown from 'components/DropDowns/CategoriesDropDown'
import SearchForm from 'components/Forms/SearchForm'
import React from 'react'

const Hero = () => {

  return (
    <section className='bg-white -mt-16'>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 min-h-screen flex flex-col items-center justify-center'>
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
          <h1 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-primary sm:text-7xl md:mx-auto'>
            Simplifie toi la vie!
          </h1>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className='flex items-center justify-center'>
          <SearchForm />
        </div>
      </div>
    </section>
  )
}

export default Hero