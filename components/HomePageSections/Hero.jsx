import CategoriesDropDown from 'components/DropDowns/CategoriesDropDown'
import SearchForm from 'components/Forms/SearchForm'
import React from 'react'

const Hero = () => {

  return (
    <section className='bg-white'>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 min-h-full flex flex-col items-center justify-center'>
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
          <h1 className='max-w-xl mb-6 font-sans text-7xl font-extrabold leading-none tracking-tight text-primary sm:text-8xl md:mx-auto'>
            Simplifie toi la Vie
          </h1>
          <p className="text-base text-variant md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
          <div className='mt-8 lg:block'>
            <SearchForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero