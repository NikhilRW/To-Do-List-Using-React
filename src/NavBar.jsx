import React, { useRef, useState } from 'react'
import './App.css'
import './MyStyle.css'
import webLogo from './assets/weblogo.png'
import { IoMdHome,IoIosInformationCircle,IoMdContact } from 'react-icons/io';
import "react-icons";
import NavItem from './NavItem';
import { IconContext } from 'react-icons';
function NavBar() {
    const [isHomeHovered, setIsHomeHovered] = useState(false);
    return (
        <IconContext.Provider value={{ size: "25px" }}>
            <nav className='w-full h-[15%] nikhil px-6 py-3  flex gap-2 items-center justify-between'>
                <span className='flex gap-2 items-center'>
                    <img src={webLogo} alt="" className='rounded-full transition-all duration-[.4s] outline-white outline-2 hover:shadow-[0_0_10px_#00bbff]' width={30} height={30} />
                    <h4 className='webTitle '>To Do Tracker</h4>
                </span>
                <ul className='flex gap-5 text-white text-lg font-semibold'>
                <NavItem icon={IoMdHome} label="Home" />
                <NavItem icon={IoIosInformationCircle} label="About" />
                <NavItem icon={IoMdContact} label="Contact" />
                </ul>
            </nav>
        </IconContext.Provider>
    )
}
export default NavBar