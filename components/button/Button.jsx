import Link from 'next/link'
import React from 'react'

const Button = ({text, url}) => {
  return (
      <div>
          <Link href={url}>
              <button className="bg-green-800 text-white px-6 py-2 w-max cursor-pointer rounded-sm">{text}</button>
          </Link>
    </div>
  )
}

export default Button