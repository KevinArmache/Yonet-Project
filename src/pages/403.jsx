import React from 'react'

const Error403 = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <h1 className='text-4xl text-red-600 font-bold'>
        You are not authorized to access this route!
      </h1>
    </div>
  )
}

export default Error403