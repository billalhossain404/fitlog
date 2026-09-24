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
            <div className='text-white flex justify-between mt-10 mb-10 px-38'>
            <div className='flex gap-3'>
                <Image className='rotate-135' src = {foot} alt = "" ></Image>
                <p className='font-bold'>FITLOG</p>
            </div>
            <p className='text-[#6B7280]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
        </footer>
    );
};

export default Footer;