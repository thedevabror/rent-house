import React, { useState } from 'react'
import map from '../../assets/map.png'
import { houseType, roomsNumber } from '../dara'

const Section = () => {
    const [ room, setRoom ] = useState({})
    const [ color, setColor ] = useState({})
    const handleChangeColor = (selected) => {
        setColor(selected)
    }
    const handleChangeRoom = (selected) => {
        setRoom(selected)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
      
        const formDataObject = {};
        formData.forEach((value, key) => {
          formDataObject[key] = value;
        });
      
        console.log(formDataObject);
      };
  return (
    <div className='flex items-center justify-center gap-20 px-10 h-[85.7vh] py-5 max-[756px]:flex-col max-[1050px]:mt-20'>
        <div className='w-[50%]'>
            <h1 className='capitalize text-[52px] max-[1050px]:text-[40px] font-inter font-bold text-[#fff]'>
                The most affortable place to stay in the san franciso bay area
            </h1>
        </div>
        <div className='w-[50%] flex flex-col items-center justify-center'>
            <img src={map} />
            <form className='w-[408px] h-[88px] bg-[#fff] rounded-[10px] flex justify-center items-center' onSubmit={handleSubmit} name='form'>
                <select name="homeType" id="homeType" className='border px-[15px] py-[10px] outline-none cursor-pointer'>
                    {houseType.map(home => (
                        <option value={home.value}>{home.label}</option>
                    )) }
                </select>
                <select name="rooms" defaultValue="rooms" id="rooms" className='border px-[15px] py-[10px] outline-none cursor-pointer'>
                    {roomsNumber.map(room => (
                        <option value={room.value}>{room.label}</option>
                    )) }
                </select>
                <button type="submit" className='px-[15px] py-[10px] bg-[#23A6F0] rounded-tr-lg rounded-br-lg flex'>
                    <a href="#" className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9901 12.3188L18.2939 16.6226C18.4452 16.7739 18.5301 16.9792 18.53 17.1932C18.53 17.4072 18.4449 17.6124 18.2935 17.7637C18.1421 17.915 17.9368 17.9999 17.7228 17.9998C17.5088 17.9998 17.3036 17.9147 17.1523 17.7633L12.8485 13.4595C11.562 14.456 9.9441 14.9249 8.32406 14.7709C6.70401 14.6169 5.20349 13.8515 4.12774 12.6304C3.05199 11.4094 2.48182 9.82433 2.53323 8.19779C2.58463 6.57125 3.25375 5.02539 4.40446 3.87468C5.55517 2.72397 7.10104 2.05485 8.72757 2.00344C10.3541 1.95203 11.9391 2.5222 13.1602 3.59795C14.3813 4.6737 15.1467 6.17423 15.3007 7.79427C15.4547 9.41432 14.9858 11.0322 13.9893 12.3188H13.9901ZM8.93033 13.1995C10.2033 13.1995 11.4241 12.6938 12.3243 11.7937C13.2244 10.8936 13.7301 9.67272 13.7301 8.39974C13.7301 7.12676 13.2244 5.90592 12.3243 5.00579C11.4241 4.10565 10.2033 3.59997 8.93033 3.59997C7.65735 3.59997 6.43651 4.10565 5.53637 5.00579C4.63624 5.90592 4.13055 7.12676 4.13055 8.39974C4.13055 9.67272 4.63624 10.8936 5.53637 11.7937C6.43651 12.6938 7.65735 13.1995 8.93033 13.1995Z" fill="white"/>
                        </svg>
                    </a>
                </button>
            </form>
        </div>
    </div>
  )
}

export default Section