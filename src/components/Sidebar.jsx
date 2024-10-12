'use client';

import Link from 'next/link';
import { HiUserGroup } from "react-icons/hi2";
import { FaFileAlt } from "react-icons/fa";
import { MdOutlinePhotoCameraFront, MdOutlineVideoLibrary, MdContacts } from "react-icons/md";
import { usePathname } from 'next/navigation';

export default function Sidebar({isVisible}) {
  const pathName = usePathname();

  
  const isActive = (path) => {
    
    return path === '/'
      ? pathName === path 
      : pathName.startsWith(path); 
  };

  const activeClass = 'bg-slate-900 active_btn hover:bg-slate-800'; 
  const inactiveClass = 'text-gray-600'; 

  return (
    <aside className={`h-[100vh] p-4 ${isVisible ? 'block' : 'hidden'} md:block md:fixed`}>
      <div className="mb-4">
        <img src="/logo.png" alt="Logo" className="w-28 h-auto mx-auto" />
      </div>
      <nav>
        <p className='text-sm text-gray-400 font-bold w-full duration-200 my-2'>Overview</p>
        <ul className='overflow-hidden transition-all duration-500 ease-in-out navbar pr-5'>
          <li>
            <Link href='/'>
              <button className={`btn_style flex gap-2 items-center pl-3 ${isActive('/') ? activeClass : inactiveClass}`}>
                <span className='icon'><HiUserGroup /></span> <span>Home</span>
              </button>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <button className={`btn_style flex gap-2 items-center pl-3 ${isActive('/about') ? activeClass : inactiveClass}`}>
                <span className='icon'><FaFileAlt /></span> <span>About</span>
              </button>
            </Link>
          </li>
          <li>
            <Link href='/photos'>
              <button className={`btn_style flex gap-2 items-center pl-3 ${isActive('/photos') ? activeClass : inactiveClass}`}>
                <span className='icon'><MdOutlinePhotoCameraFront /></span> <span>Photos</span>
              </button>
            </Link>
          </li>
          <li>
            <Link href='/videos'>
              <button className={`btn_style flex gap-2 items-center pl-3 ${isActive('/videos') ? activeClass : inactiveClass}`}>
                <span className='icon'><MdOutlineVideoLibrary /></span> <span>Videos</span>
              </button>
            </Link>
          </li>
          <li>
            <Link href='/contacts'>
              <button className={`btn_style flex gap-2 items-center pl-3 ${isActive('/contacts') ? activeClass : inactiveClass}`}>
                <span className='icon'><MdContacts /></span> <span>Contacts</span>
              </button>
            </Link>
          </li>
          <li>
            <Link href='/profile'>
              <button className={`btn_style flex gap-2 items-center pl-3 ${isActive('/profile') ? activeClass : inactiveClass}`}>
                <span className='icon'><MdContacts /></span> <span>Profile</span>
              </button>
            </Link>
          </li>
          <li>
            <Link href='/courseList'>
              <button className={`btn_style flex gap-2 items-center pl-3 ${isActive('/courseList') ? activeClass : inactiveClass}`}>
                <span className='icon'><MdContacts /></span> <span>Course List</span>
              </button>
            </Link>
          </li>
        </ul>
        <p className='text-sm text-gray-400 font-bold w-full duration-200 my-2'>Registration</p>
        <ul className='overflow-hidden transition-all duration-500 ease-in-out'>
          <li>
            <Link href='/mejban'>
              <button className={`btn_style flex gap-2 items-center pl-3 ${isActive('/mejban') ? activeClass : inactiveClass}`}>
                <span className='icon'><MdContacts /></span> <span>Registration For Mejban</span>
              </button>
            </Link>
          </li>
          <li>
            <Link href='/memberShip'>
              <button className={`btn_style flex gap-2 items-center pl-3 ${isActive('/memberShip') ? activeClass : inactiveClass}`}>
                <span className='icon'><MdContacts /></span> <span>Become a member</span>
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
