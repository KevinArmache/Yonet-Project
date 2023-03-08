import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { getSession, signIn } from 'next-auth/react';
import { createPortal } from 'react-dom';
import { EnvelopeOpenIcon } from '@heroicons/react/24/solid';
import Head from 'next/head';
import { toast } from 'react-hot-toast';


export async function getServerSideProps(context) {
  // Check if user is authenticated
  const session = await getSession(context);

  // If not, redirect to the homepage
  if (!session) {
    return {
      props: {
        
      },
    };
  } else {
    return {
      redirect: {
        destination: '/app/client',
        permanent: false,
      },
    };
  }
}

const MagicLinkModal = ({ show = false, email = '' }) => {
  if (!show) return null;

  return createPortal(
    <div className="fixed inset-0 z-10 bg-white bg-opacity-90 backdrop-filter backdrop-blur-md backdrop-grayscale">
      <div className="min-h-screen px-6 flex flex-col items-center justify-center animate-zoomIn">
        <div className="flex flex-col items-center justify-center text-center max-w-sm">
          <EnvelopeOpenIcon className="shrink-0 w-12 h-12 text-primary" />
          <h3 className="mt-2 text-2xl font-semibold">
            Confirme ton adresse email
          </h3>
          <p className="mt-4 text-lg">
            Nous venons tout juste d&apos;envoyer un email à <strong>{email}</strong>. Vérifie ta messagerie et clique sur le lien pour te connecter à Yonet.
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default function Connexion() {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);


  // Allow users to sign In using magic link
  const handleSigninWithEmail = async (e) => {
    e.preventDefault()
    let toastId;
    try {
      setLoading(true)
      toastId = toast.loading('Veuillez Patienter...');
      const { error } = await signIn('email', {
        email,
        redirect: false,
        callbackUrl: `${window.location.origin}/app/client`,
      });
      // Something went wrong
      if (error) {
        throw new Error(error);
      }
      toast.success('Success!', { id: toastId });
      setShowModal(true);
      setLoading(false)
    } catch (err) {
      toast.error('An error occured!', { id: toastId });
      console.error(err.message)
    }
  }

  const handleSigninWithGoogle = () => {
    signIn('google', {
      callbackUrl: `${window.location.origin}/app/client`,
    })
  }

  return (
    <>
      <Head>
        <title>Connexion ou Inscription - Yonet!</title>
      </Head>
      <section className="h-screen">
        <div className="container px-6 py-4 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-secondary">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <div className="">
                <a className="block -mb-12 text-center text-4xl lg:text-5xl text-primary font-semibold lg:font-bold">
                  Yonet!
                </a>
              </div>
              <Link href="/" passHref>
                <img 
                  src="/asset/figures/marketing.svg"
                  alt="Google"
                  width={500}
                  height={500}
                  className="w-full"
                />
              </Link>
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <form onSubmit={handleSigninWithEmail}>
                {/* Email input */}
                <div className="mb-6">
                  <input 
                    type="text" 
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none" placeholder="Adresse Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                  />
                </div>
                {/* Submit button */}
                <button type="submit" className="inline-block px-7 py-3 bg-primary text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary active:shadow-lg transition duration-150 ease-in-out w-full disabled:bg-primary/50" data-mdb-ripple="true" data-mdb-ripple-color="light" disabled={loading}>
                  {loading ? "Veuillez patienter" : "Se connecter"}
                </button>
              </form>
              <div>
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">OU</p>
                </div>

                <button
                  className="px-7 py-3 font-semibold text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-light text-primary" 
                  role="button" 
                  onClick={() => handleSigninWithGoogle()}
                >
                  <Image
                    src="/asset/icons/google.svg"
                    alt="Google"
                    width={32}
                    height={32}
                    className="w-3.5 h-3.5 mr-2"
                  />
                  Continuer avec Google
                </button>

                <button className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3" style={{backgroundColor: '#3b5998'}} role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">
                  {/* Facebook */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-3.5 h-3.5 mr-2">
                    {/*! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                    <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>Continuer avec Facebook
                </button>
                <button className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center" style={{backgroundColor: '#55acee'}} role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">
                  {/* Twitter */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-3.5 h-3.5 mr-2">
                    <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>Continuer avec Twitter
                </button>
              </div>
            </div>
          </div>
        </div>
        <MagicLinkModal show={showModal} email={email} />
      </section>
    </>

  );
}
