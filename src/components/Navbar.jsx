    import React from 'react';
    import { useState } from 'react';
    import logo from "../assets/logo.png"
    import { MdDarkMode, MdLightMode } from "react-icons/md";
    import useDarkMode from '../action/useDarkMode';

    const Navbar = () => {
        const navItem = [
            {link: "Giới thiệu", path: "overview"},
            {link: "Dịch vụ", path: "service"},
            {link: "Dành cho gia sư", path: "tutor"},
            {link: "Đăng kí thuê gia sư", path: "hiretutor"},
            {link: "Blog", path: "blog"},
            {link: "Liên hệ", path: "contact"},
        ]

        const { isDarkMode, toggleDarkMode } = useDarkMode();

        return (
            <nav className= 'w-full md:px-14 p-4 mx-auto'>
                <div className='text-lg container mx-auto flex justify-between items-center font-medium text-primary'>
                    <div className='flex space-x-14 items-center'>
                        <a href="/" className='text-4xl font-semibold flex items-center space-x-3 text-green-600'>
                            <img src={logo} alt="" className='w-12 h-15 inline-block items-center'/>
                            <span>GiaSuViet</span>
                        </a>
                        {/* nav item*/}
                        <ul className='md:flex space-x-12'>
                            {
                            navItem.map(
                                ({link, path}) => 
                                    <a key={link} href={path} className='block hover:text-gray-300'>
                                        {link}
                                    </a>)
                            }
                        </ul>
                    </div>

                    <div className='space-x-12 hiden md:flex items-center'>
                        <button onClick={toggleDarkMode} className=''>
                            {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
                        </button>
                        <button className='bg-green-600 py-2 px-4 transition-all duration-300 rounded
                        hover:text-white hover:bg-indigo-600'>
                            Sign up
                        </button>
                    </div>
                </div>
            </nav>
        );
    };

    export default Navbar;