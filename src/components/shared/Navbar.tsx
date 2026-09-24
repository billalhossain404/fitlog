import logo from '@/assets/logo.png';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between px-10 mt-10'>

            <div className='flex gap-3'>
                <Image className='h-full w-full' src = {logo} alt = "" />
                <h1 className='text-white font-semibold text-2xl'>FITLOG</h1>
            </div>

            <div className='gap-5 flex'>
                <button className="text-[#C2F800] bg-[#1A2312] rounded-3xl px-5">Workouts</button>
                <button className="text-[#9CA3AF] rounded-3xl px-5">My Plan</button>
            </div>

            <div className='gap-4 flex'>
                <button className='text-white'>Plan <span className="bg-[#C2F800] text-[#1A2312] rounded-full w-6 h-6 inline-flex items-center justify-center ml-2">0</span></button>
                <button className='text-[#9CA3AF]'>Saved <span className=" text-[#1A2312] rounded-full border w-6 h-6 inline-flex items-center justify-center ml-2 text-white">0</span></button>
            </div>
        </div>
        
    );
};

export default Navbar;