import React, { useState } from 'react'
import "react-icons/io"
function NavItem({icon,label}) {
    const [isHomeHovered, setIsHomeHovered] = useState(false);
    let imgHoverClasses= `absolute transition-all duration-[.4s] top-0 ${isHomeHovered?"translate-y-[-100%] opacity-0" : ""} right-0`
    let textTransformClasses= ` text-[13px] text-[#712488] shadow-[0_0_10px_#8b00ad] px-1 bg-white rounded-lg  absolute transition-all duration-[.4s] font-["Rubik"]  ${isHomeHovered?" opacity-1 translate-y-[-50%]" : "translate-y-[100%] opacity-0 "} left-[-40%]`
  return (
    <li className='sm:hidden transition-all duration-[.5s] p-3 relative w-full h-full mr-2' 
        onMouseOver={()=>setIsHomeHovered(true)} 
        onMouseOut={()=>setIsHomeHovered(false)}>
    {React.createElement(icon,{className:imgHoverClasses})}
    <p className={textTransformClasses}>{label}</p>
    </li>
  )
}

export default NavItem