import React from 'react';
import { useState } from 'react';
import Container from './container'
import Link from 'next/link';
import Image from 'next/image';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <header className="sticky top-0 bg-white z-40">
      <div className="p-3 w-full bg-gradient-to-r from-sky-500 to-indigo-500"></div>
      <Container>
        <div className=" bg-white py-4 flex justify-between items-center">
          <Link href="/">
            <div className="flex gap-1 items-center font-semibold">
              <span className="font-semibold">
                <Image src="/logo.png" alt='logo' width={30} height={30}/>
              </span>
              <p className="text-lg">ElitesVerse</p>
            </div>
          </Link>
          <nav className="max-md:hidden">
            <div className="flex items-center gap-8 text-sm font-semibold ">
              <Link href='/' className="hover:text-blue-600 duration-500 transition">Home</Link>
              <Link href='/blog' className="hover:text-blue-600 duration-500 transition">Blog</Link>
              <Link href='/contact' className="hover:text-blue-600 duration-500 transition">Contact</Link>
              <Link href='/about' className="hover:text-blue-600 duration-500 transition">About</Link>
              <span>
                <Link href="/">
                  <button className="border-2 border-black rounded-lg px-2 py-1 text-sm">Learn More</button>
                </Link>
              </span>
              <span className="hidden">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>
          </nav>
          <div className=" hidden max-md:block">
            <button className="" onClick={toggleDropdown}>
              <span>
                {isDropdownOpen ? (
                  <FontAwesomeIcon icon={faTimes} className="text-2xl"/>
                ) : (
                  <FontAwesomeIcon icon={faBars} className="text-2xl"/>
                )}
              </span>
            </button>
            {isDropdownOpen && (
              <div className="bg-white border-r-2 drop-shadow-md absolute w-10/12 h-screen top-0 bottom-0 left-0 z-50">
                <div className="flex flex-col items-center justify-evenly h-4/6 text-base font-semibold">
                  <Link href='/' className="hover:text-blue-600 duration-500 transition">Home</Link>
                  <Link href='/blog' className="hover:text-blue-600 duration-500 transition">Blog</Link>
                  <Link href='/contact' className="hover:text-blue-600 duration-500 transition">Contact</Link>
                  <Link href='/about' className="hover:text-blue-600 duration-500 transition">About</Link>
                  <span>
                    <Link href="/">
                      <button className="border-2 border-black rounded-lg px-2 py-1">Learn More</button>
                    </Link>
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  )
}

export default nav;