import Link from 'next/link'
import React from 'react'
import Button from '../button/Button'

const links = [
  {
    id: 1,
    title: "Home",
    url: "/"
  },
  {
    id: 2,
    title: "About",
    url: "/about"
  },
  {
    id: 3,
    title: "Portfolio",
    url: "/portfolio"
  },
  {
    id: 4,
    title: "Blog",
    url: "/blog"
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact"
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard"
  },
]

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24">
      <Link href="/" className="text-3xl font-bold">Spike</Link>
      <div className="flex items-center gap-5">
        {
          links.map((link, index) => (
            <Link key={index} href={link.url}>{link.title}</Link>
          ))
        }
        <Button url="/" text="Log out" />
      </div>
    </div>
  )
}

export default Navbar