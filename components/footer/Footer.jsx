import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="h-13 flex items-center justify-between">
      <div>
        &copy;2025 Spike. All rights reserved.
      </div>
      <div className="flex gap-2 items-center">
        <Image src="/images/1.png" alt="facebook" width={15} height={15} className="opacity-60 cursor-pointer" />
        <Image src="/images/2.png" alt="instagram" width={15} height={15} className="opacity-60 cursor-pointer" />
        <Image src="/images/3.png" alt="twitter" width={15} height={15} className="opacity-60 cursor-pointer" />
        <Image src="/images/4.png" alt="youtube" width={15} height={15} className="opacity-60 cursor-pointer" />
      </div>
    </div>
  )
}

export default Footer