import Link from 'next/link'
import React from 'react'

const Button = ({ url, text, buttonIcon, variant }) => {
  return (
    <Link className={`py-2 px-6 shadow transition duration-150 rounded-md font-medium text-base inline-flex items-center justify-center ${variant == "outline" ? 'bg-transparent border border-white text-white hover:border-primary hover:bg-white hover:text-primary' : variant == "light" ? 'bg-white border border-white text-primary hover:bg-primary hover:bg-primary hover:text-white' : 'text-primary hover:text-secondary ' }`} href={url}>
      <span>
        {text}
      </span>
      {buttonIcon ? (
        React.createElement(buttonIcon, { className: 'h-4 w-4', 'aria-hidden': true })
      ): null}
    </Link>
  )
}

export default Button