import Image from 'next/image';
import React from 'react';
import BannerImg from '@/assets/banner.png'

const Banner = () => {
    return (
        <div className='bg-[#15171D] mt-20 px-10 text-white flex items-center justify-between rounded-2xl w-[95%] mx-auto'>
            <div className='items-center justify-center px-25'>
                <h1 className='text-[#C2F800]'>WORKOUT LIBRARY</h1>
                <h1 className='text-5xl font-bold mt-5'>TRAIN WITH INTENT. LOG <br />EVERY SET.</h1>
                <p className='text-[#9CA3AF] mt-4'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br /> into today's plan, and watch the week's work add up.</p>
                <button className='bg-[#C2F800] text-black px-8 py-2 rounded-xl font-bold mt-4'>BROWSE WORKOUTS</button>
            </div>
            <div className='mt-10 mb-10 px-25 '>
                <Image src = {BannerImg} alt = "" />
            </div>
        </div>
    );
};

export default Banner;