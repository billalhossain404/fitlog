import Image from 'next/image';
import React from 'react';
import foot from "@/assets/logo.png"

const Footer = () => {
    return (
        <footer>
            <div>
                <hr className='text-gray-700 mt-10' />
                <hr className='text-gray-700 mt-10' />
            </div>
            <div className='text-white flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between items-start sm:items-center mt-10 mb-10 px-4 sm:px-6 lg:px-10 xl:px-16'>
            <div className='flex gap-3 items-center'>
                <Image className='h-7 w-7 rotate-135' src = {foot} alt = "FitLog logo" ></Image>
                <p className='font-bold'>FITLOG</p>
            </div>
            <p className='text-[#6B7280]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
        </footer>
    );
};

export default Footer;