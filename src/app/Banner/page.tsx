import Image from 'next/image';
import React from 'react';
import BannerImg from '@/assets/banner.png'
import Link from 'next/link';

const Banner = () => {
    return (
        <div className='bg-[#15171D] mt-12 py-10 text-white flex items-center justify-between rounded-2xl w-[80%] mx-auto'>
            <div className='items-center justify-center px-15'>
                <h1 className='text-[#C2F800]'>WORKOUT LIBRARY</h1>
                <h1 className='text-5xl font-bold mt-8'>TRAIN WITH INTENT. LOG <br />EVERY SET.</h1>
                <p className='text-[#9CA3AF] mt-6'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br /> into today's plan, and watch the week's work add up.</p>
                <Link href="/" className='bg-[#C2F800] text-black px-8 py-2 rounded-xl font-bold mt-8 inline-block' > BROWSE WORKOUTS </Link>
            </div>
            <div className='mb-10 px-15'>
                <Image src = {BannerImg} alt = "" />
            </div>
        </div>
    );
};

export default Banner;