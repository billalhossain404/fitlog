import React from 'react';

const MyPlan = () => {
    return (
        <div>
            <hr className='text-gray-800 mt-6' />
            <div className='text-white px-38 mt-10'>
                <h1 className='text-2xl font-bold'>MY PLAN</h1>
                <p className='text-[#8A92A0]'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>

            <div className='bg-[#13161d] mt-5 w-[80%] h-[130px] mx-auto text-white flex justify-between p-5 rounded-2xl'>
                <div>
                    <p>Exercises</p>

                </div>
                <div>
                    <p>Minutes</p>
                </div>
                <div>
                    <p>Calories</p>
                </div>
            </div>

            <div className='justify-between'>
                <div className='text-white px-38'>
                    <button>Today's Plan</button>
                    <button>Saved</button>
                </div>
            </div>


            <div className="w-[80%] mx-auto mt-6">

                <div className="flex justify-end items-center gap-3 mb-6">
                    <span className="text-sm text-gray-500">
                        Sort By
                    </span>

                    <select className="bg-[#15171D] border border-[#292C33] text-white text-sm rounded-lg px-3 py-2 outline-none">
                        <option>Duration</option>
                        <option>Difficulty</option>
                        <option>Rating</option>
                    </select>
                </div>

                <div className="rounded-2xl border border-dashed border-gray-800 text-white min-h-[280px] flex flex-col justify-center items-center text-center">

                    <h1 className="text-xl font-bold tracking-wide">
                        NOTHING HERE YET
                    </h1>

                    <p className="text-gray-500 text-sm mt-2">
                        Browse the library and add a lift to get today moving.
                    </p>

                    <button className="bg-lime-400 text-black font-medium text-sm px-6 py-2 rounded-full mt-5 hover:bg-lime-300 transition">
                        Go to workouts
                    </button>

                </div>

            </div>
        </div>
    );
};

export default MyPlan;