import Image from 'next/image';
import React from 'react';
import BannerImg from '@/assets/banner.png'
import Link from 'next/link';

const Banner = () => {
    return (
        <div className='bg-[#15171D] mt-8 sm:mt-12 py-8 sm:py-10 text-white flex flex-col lg:flex-row items-center justify-between rounded-2xl w-[calc(100%-2rem)] sm:w-[90%] max-w-7xl mx-auto overflow-hidden'>
            <div className='w-full lg:w-1/2 px-6 sm:px-10 lg:px-12 xl:px-15'>
                <h1 className='text-[#C2F800]'>WORKOUT LIBRARY</h1>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 sm:mt-8'>TRAIN WITH INTENT. LOG <br className='hidden sm:block' />EVERY SET.</h1>
                <p className='text-[#9CA3AF] mt-4 sm:mt-6 max-w-xl'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.</p>
                <Link href="/WorkOuts" className='bg-[#C2F800] text-black px-6 sm:px-8 py-2 rounded-xl font-bold mt-6 sm:mt-8 inline-block' > BROWSE WORKOUTS </Link>
            </div>
            <div className='w-full lg:w-1/2 mt-8 lg:mt-0 px-6 sm:px-10 lg:px-12 xl:px-15'>
                <Image className='w-full max-w-lg mx-auto h-auto' src = {BannerImg} alt = "Workout equipment" />
            </div>
        </div>
    );
};

export default Banner;