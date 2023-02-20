import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Button from 'components/Buttons/Button'
import Image from 'next/image'
import React from 'react'

const VendeurHeader = () => {

  return (
    <section className='bg-white flex flex-col lg:flex-row items-center justify-between mx-4 lg:max-w-6xl lg:mx-auto min-h-screen lg:max-h-screen lg:space-x-8'>
      <div className=''>
        <h1 className='my-6 font-sans text-6xl font-extrabold leading-none tracking-tight text-primary sm:text-8xl md:mx-auto'>
          Proposez vos services de création
        </h1>
        <p className="text-base text-variant">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
        <div className='mt-8 w-32'>
          <Button text="Commencer" url="/connexion" buttonIcon={ArrowRightIcon} />
        </div>
      </div>
      <div className=''>
        <Image
          width={1080}
          height={1080}
          alt=""
          src="/asset/figures/sponsor.png"
          className='w-full'
        />
      </div>
    </section>
  )
}

export default VendeurHeader