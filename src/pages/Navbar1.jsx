import React from 'react';
import logo from './0.png';
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { MdOutlineContactMail } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <header className="absolute w-full top-0 flex justify-between px-5 py-4">
      <div>
      <Link to="/"><img src={logo} width="50px" height="50px" alt="Logo" /></Link>
      </div>
      
      <div className="hidden md:flex">
        <ul className="flex">
          <li><Link to="/" className='text-xl mr-3 hover:text-gray-400 font-medium text-gray-200  font-total-font flex '> <HiHome className='mr-2 mt-1' />Home</Link></li>
          <li><Link to="/about" className=' text-xl mr-3 hover:text-gray-400 font-medium text-gray-200  font-total-font flex'><CgProfile className='mr-2 mt-1' />About</Link></li>
          <li><Link to="/project" className='text-xl mr-3 hover:text-gray-400 font-medium text-gray-200  font-total-font flex'><FaRegListAlt className='mr-2 mt-1' />Projects</Link></li>
          <li><Link to="/contact" className='text-xl hover:text-gray-400 font-medium text-gray-200  font-total-font flex'><MdOutlineContactMail className='mr-2 mt-1'/>Contact</Link></li>
        </ul>
      </div>
      
      {toggleMenu && (
        <div className="z-10 mobile-nav flex justify-end md:hidden">
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[0] mt-3 w-40 p-2 shadow">
            <li><Link to="/" className="hover:bg-gray-400"><HiHome className='mr-1 mt-1' />Home</Link></li>
            <li><Link to="/about" className="hover:bg-gray-400"><CgProfile className='mr-1 mt-1' />About</Link></li>
            <li><Link to="/project" className="hover:bg-gray-400"><FaRegListAlt className='mr-1 mt-1'/>Project</Link></li>
            <li><Link to="/contact" className="hover:bg-gray-400"><MdOutlineContactMail />Contact</Link></li>
          </ul>
        </div>
      )}

      <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'>
        <Bars3BottomRightIcon className='text-black h-6 w-10px' />
      </button>
    </header>
  );
}

export default Navbar;
