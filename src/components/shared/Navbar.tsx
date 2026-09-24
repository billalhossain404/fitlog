import logo from '@/assets/logo.png';
import MyPlan from '@/app/MyPlan/page';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between px-38 mt-10'>

            <div className='flex gap-3 items-center flex'>
                <Image className='h-full w-full' src = {logo} alt = "" />
                <h1 className='text-white font-semibold text-2xl'>FITLOG</h1>
            </div>

            <div className='gap-5 flex'>
                <Link href= "../../WorkOuts" className="text-[#C2F800] bg-[#1A2312] rounded-3xl px-5 items-center flex">Workouts</Link>
                <Link href="../../MyPlan" className="text-[#9CA3AF] rounded-3xl px-5 items-center flex">My Plan</Link>
            </div>

            <div className='gap-4 flex items-center'>
                <Link href="../../MyPlan" className='text-white'>Plan <span className="bg-[#C2F800] text-[#1A2312] rounded-full w-6 h-6 inline-flex items-center justify-center ml-2">0</span></Link>
                <Link href="../../MyPlan" className='text-[#9CA3AF]'>Saved <span className=" text-[#1A2312] rounded-full border w-6 h-6 inline-flex items-center justify-center ml-2 text-white">0</span></Link>
            </div>
        </div>
        
    );
};

export default Navbar;