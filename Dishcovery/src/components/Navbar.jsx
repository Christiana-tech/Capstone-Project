import React, { useState } from 'react'
import Logo from '../images/logo.png'


const Navbar = () => {
    const [open] = useState(false)

    return (
        <header className='w-full fixed z-10 bg-black opacity-90'>
            <nav className='flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between'>
                <a href="/" className=' font-bold flex items-center justify-center text-white text-lg cursor-pointer'>
                    <img src={Logo} alt="Logo" className='hidden md:block w-8 h-8 lg:w-14 lg:h-14' />
                    Dish<span className='text-green-600 font-bold'>Covery</span>
                </a>

                <ul className='hidden md:flex gap-10 font-bold text-green-600'>
                    <li className='hover:text-white hover:font-extrabold'>
                        <a href="/">Home</a>
                    </li>
                    <li className='hover:text-white hover:font-extrabold'>
                        <a href="/#recipes">Recipes</a>
                    </li>
                    <li className='hover:text-white hover:font-extrabold'>
                        <a href="/favorites">Favorites</a>
                    </li>
                </ul>

                
            </nav>
            <div className={`${open ? "flex" : "hidden"} bg-black flex-col w-full px-4 pt-16 pb-10 text-white gap-6 text-[14px]`}>
                <a href="/">Home</a>
                <a href="/#recipes">Recipes</a>
                <a href="/">Favorites</a>
            </div>
        </header>
    )
}

export default Navbar