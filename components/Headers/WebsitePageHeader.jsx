import { useRouter } from 'next/router'
import React from 'react'

const WebsitePageHeader = ({ title }) => {
  const router = useRouter();

  return (
    <div className='relative overflow-hidden -z-50'>
      <img
        className="object-cover w-full h-32 md:h-48 xl:h-64"
        src="/asset/images/video-editor.jpeg"
        alt=""
      />
      <div className="absolute inset-0 px-6 py-4 bg-primary bg-opacity-70 sm:text-center">
          <h2 className="my-16 font-sans text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none">
            {`${title} "${router.query.q}"`}
          </h2>
      </div>
    </div>
  )
}

export default WebsitePageHeader