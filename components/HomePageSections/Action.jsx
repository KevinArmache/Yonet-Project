import Button from 'components/Buttons/Button'
import Image from 'next/image'
import React from 'react'

const Action = () => {
  return (
    <section className='bg-primary'>
      <div className='px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12 flex flex-col lg:flex-row items-center justify-center space-x-6'>
        <div className='lg:basis-2/3 text-center lg:text-justify'>
          <h1 className='my-8 font-sans text-3xl font-extrabold leading-none tracking-tight text-white sm:text-5xl'>
            Vous avez du talent à vendre ?<br/>
            Faites le connaître!
          </h1>
          <p className='text-light text-lg font-light'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
          </p>
        </div>
        <div className='basis-1/3 mt-8 lg:mt-0 flex items-center justify-center space-x-8'>
          <Button text="Devenir Vendeur" url="/pour-les-vendeurs" variant="outline" />
          <Button text="Service Client" url="/assistance" variant="light" />
        </div>
      </div>
    </section>
  )
}

export default Action