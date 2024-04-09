import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useContext } from 'react';
import { DarkThemeContext } from './context/context';
import "./MyStyle.css"
function DarkModeButton() {
    const {isDark,SetIsDark} = useContext(DarkThemeContext);
  return (
    <>
        <li className='mt-0.5 mr-2'>
            <button onClick={()=>{SetIsDark(!isDark)}} className={`w-14 h-7 flex justify-start transition-all duration-500 items-center rounded-3xl nikhi4 "bg-white" bg-white shadow-[0px_0px_5px_black]`}>
                <span className={`rounded-full  w-7 h-7 ${isDark?"translate-x-0 bg-white":"translate-x-7 bg-black "} transition-all duration-500 flex justify-center items-center  shadow-[0px_0px_5px_black] p-1 `}>
                { isDark ?<MdLightMode className={` transition-all duration-[2s] fill-[#ffdd00] ${isDark?"opacity-1 ":" opcaity-0"}`} width="22px" />:<MdDarkMode  className={`transition-all duration-500 ${isDark?"opacity-0":"opcaity-1"}`}width="22px" fill='white'/>}
                </span>
            </button>
        </li>
    </>
  )
}

export default DarkModeButton