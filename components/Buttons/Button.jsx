import Link from 'next/link'
import React from 'react'

const Button = ({ url, text, buttonIcon, variant }) => {
  return (
    <Link className={`flex py-2 px-6 shadow transition duration-150 rounded-md font-medium text-base items-center justify-center ${variant == "outline" ? 'bg-transparent border border-white text-white hover:border-primary hover:bg-white hover:text-primary' : variant == "light" ? 'bg-white border border-white text-primary hover:bg-primary hover:text-white' : variant == "noborder" ? 'text-primary bg-transparent border-none shadow-none hover:bg-primary  hover:text-white' : 'text-white bg-primary border-none shadow-none hover:bg-white  hover:text-primary' }`} href={url}>
      <span className='inline-flex items-center space-x-2'>
        {text}
        {buttonIcon && React.createElement(buttonIcon, { className: 'h-4 w-4' })}
      </span>
    </Link>
  )
}

export default Button