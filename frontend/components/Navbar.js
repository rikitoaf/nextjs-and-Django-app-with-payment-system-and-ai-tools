import React from 'react'
import Link from 'next/link';
function Navbar() {
  return (
    <header className="bg-purple-500 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Alumni Network</h1>
            <nav>
              <Link href="/" legacyBehavior>
                <a className="px-3 hover:text-gray-200">Home</a>
              </Link>
              <Link href="/about" legacyBehavior>
                <a className="px-3 hover:text-gray-200">About</a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a className="px-3 hover:text-gray-200">Contact</a>
              </Link>
              <Link href="/blogs" legacyBehavior>
                <a className="px-3 hover:text-gray-200">Blogs</a>
              </Link>
              <Link href="/polls" legacyBehavior>
                <a className="px-3 hover:text-gray-200">Polls</a>
              </Link>
              <Link href="/login" legacyBehavior>
                <a className="px-3 hover:text-gray-200">Login</a>
              </Link>
              <Link href="/logout" legacyBehavior>
                <a className="px-3 hover:text-gray-200">Logout</a>
              </Link>
               <Link href="/register" legacyBehavior>
                <a className="px-3 hover:text-gray-200">Register</a>
              </Link>
            </nav>
          </div>
        </header>
  )
}

export default Navbar;