import React from 'react'
import Nav from './Nav'
import Section from './Section'

const index = () => {
  return (
    <div className='bg-home h-[100vh]'>
        <div className='bg-gradient-to-l from-transparent via-[#0000006d] to-[#000000c2]'>
            <Nav />
            <Section />
        </div>
    </div>
  )
}

export default index