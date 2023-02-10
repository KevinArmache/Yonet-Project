import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className='bg-white'>
      <div className='px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12'>
        <div className=''>
          <h1 className='mb-12 font-sans text-xl font-bold leading-none tracking-tight text-primary sm:text-3xl'>
            A Propos de Yonet!
          </h1>
        </div>
        <div className="grid lg:grid-cols-2">
          <div>
            <Image src="/asset/images/team.png" width={1080} height={1080} className="object-cover w-full" alt="" />
          </div>
          <div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About