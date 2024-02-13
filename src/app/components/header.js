'use client'
import React, { useState } from 'react'
import Login from './auth/login';
import Signup from './auth/signup';
import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
  })
  

function Header() {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  const openSignupModal = () => setSignupModalOpen(true);
  const closeSignupModal = () => setSignupModalOpen(false);
  return (
    <header className={inter.className}>
  <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
       
      </div>

      <div className="md:flex md:items-center md:gap-12">
       

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <button
              className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
              
              onClick={openLoginModal}
            >
              Login
            </button>

            <div className="hidden sm:flex">
              <button
                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                onClick={openSignupModal}
              >
                Register
              </button>
            </div>
          </div>

          <div className="block md:hidden">
            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
             THis
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

   {/* Login Modal */}
   {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-md">
          <Login onClose={closeLoginModal} />
        </div>
      </div>
      )}

      {/* Signup Modal */}
      {isSignupModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md">
            <Signup onClose={closeSignupModal} />
          </div>
        </div>
      )}
</header>

  )
}

export default Header;
