'use client';
import React from 'react';
import logo from '../public/logo.svg';


export default function Header(){
    return (
        <header
        className='fixed
        top-0
        z-50
        flex
        w-full
        items-center
        justify-between
        bg-black
        px-4
        py-4
        
        lg:px-10
        lg:py-6'>

            <div className='
            flex
            items-center
            space-x-2
            md:space-x-4'>


        <img src = "https://rb.gy/ulxxee"
            alt = "netflix"
            width={120}
            height={120}
            />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
            </ul>

            </div>
            </header>
    )
}