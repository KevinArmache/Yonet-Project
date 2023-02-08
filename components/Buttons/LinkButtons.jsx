import Link from 'next/link'
import React from 'react'

const LinkButtons = ({ url, text, buttonIcon }) => {
  return (
    <Link className='text-primary hover:text-secondary font-medium text-base inline-flex items-center justify-center' href={url}>
      <span>
        {text}
      </span>
      {buttonIcon ? (
        React.createElement(buttonIcon, { className: 'h-4 w-4', 'aria-hidden': true })
      ): null}
    </Link>
  )
}

export default LinkButtons