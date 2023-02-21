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
        <div className="grid lg:grid-cols-2 lg:gap-8">
          <div>
            <Image
              width={1080}
              height={1080}
              alt=""
              src="/asset/figures/people-talking.png"
              className='w-full'
            />
          </div>
          <div className='py-12'>
            <h1 className='mb-8 font-sans text-xl font-bold leading-none tracking-tight text-primary sm:text-2xl'>
              Qui Sommes-nous ?
            </h1>
            <p className='text-secondary text-lg text-justify mb-4'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            <p className='text-secondary text-lg text-justify'>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About