import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 xl:px-16 mt-6 sm:mt-8 lg:mt-10'>

            <div className='flex gap-3 items-center'>
                <Image className='h-8 w-8 object-contain' src = {logo} alt = "FitLog logo" />
                <h1 className='text-white font-semibold text-2xl'>FITLOG</h1>
            </div>

            <div className='gap-2 sm:gap-5 flex order-3 sm:order-2 w-full sm:w-auto'>
                <Link href= "/WorkOuts" className="text-[#C2F800] bg-[#1A2312] rounded-3xl px-4 sm:px-5 py-2 items-center flex">Workouts</Link>
                <Link href="/MyPlan" className="text-[#9CA3AF] rounded-3xl px-4 sm:px-5 py-2 items-center flex">My Plan</Link>
            </div>

            <div className='gap-3 sm:gap-4 flex items-center order-2 sm:order-3'>
                <Link href="/MyPlan" className='text-white text-sm sm:text-base'>Plan <span className="bg-[#C2F800] text-[#1A2312] rounded-full w-6 h-6 inline-flex items-center justify-center ml-1 sm:ml-2">0</span></Link>
                <Link href="/MyPlan" className='text-[#9CA3AF] text-sm sm:text-base'>Saved <span className="text-[#1A2312] rounded-full border w-6 h-6 inline-flex items-center justify-center ml-1 sm:ml-2 text-white">0</span></Link>
            </div>
        </div>
        
    );
};

export default Navbar;