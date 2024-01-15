import React from 'react'
import map from '../../assets/map.png'

const Section = () => {
  return (
    <div className='flex items-center justify-center gap-20 px-10 h-[85.7vh] py-5'>
        <div className='w-[50%]'>
            <h1 className='capitalize text-[52px] font-inter font-bold text-[#fff]'>
                The most affortable place to stay in the san franciso bay area
            </h1>
        </div>
        <div className='w-[50%] flex flex-col items-center justify-center'>
            <img src={map} />
            <div className='w-[408px] h-[88px] bg-[#fff] rounded-[10px]'>

            </div>
        </div>
    </div>
  )
}

export default Section