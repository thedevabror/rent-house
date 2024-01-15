import React from 'react'
import logo from '../../assets/logo.png'

const Nav = () => {
  return (
    <div className='h-[91px] flex justify-between px-10 items-center'>
        <div>
          <a href='#'><img src={logo} /></a>
        </div>
        <div className='text-[18px] text-[#fff] font-medium flex justify-between gap-20'>
          <a href='#home'>Home</a>
          <a href='#landloard'>Landloard</a>
          <a href='#tenants'>Tenants</a>
          <a href='#contactus'>Contact Us</a>
        </div>
        <div className='flex gap-5 text-[#fff] text-[18px]'>
          <a href='#signIn' className='rounded-md border px-6 py-2 transition-all duration-3000 hover:bg-[#23A6F0] hover:border-[#23A6F0]'>Sign In</a>
          <a href='#signUp' className='rounded-md px-6 py-2 transition-all duration-3000 bg-[#23A6F0] border border-[#23A6F0] hover:bg-transparent hover:border-[#fff]'>Sign Up</a>
        </div>
    </div>
  )
}

export default Nav