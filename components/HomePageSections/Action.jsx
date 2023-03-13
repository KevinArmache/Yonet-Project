import Button from 'components/Buttons/Button'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'
import SkeletonLoader from '../SkeletonLoader'

const Action = () => {
  const router = useRouter()

  const { data: session, status } = useSession();
  const user = session?.user;
  const isLoadingUser = status === 'loading';


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
        <div className='w-full md:basis-1/3 mt-8 lg:mt-0 flex items-center justify-center md:space-x-8 space-x-0'>
          {isLoadingUser ? (
            <p className='text-white'>...</p>
          ) : (
            <>
              {router.pathname.includes('pour-les-vendeurs') || router.pathname.includes('app') ? null : <Button text="Pour les vendeurs" url="/pour-les-vendeurs" variant="outline" />}
              <Button text={user ? 'Créer votre compte vendeur' : 'Commencer'} url={user ? '/app/vendeur/profil' : '/connexion'} variant="light" />
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Action