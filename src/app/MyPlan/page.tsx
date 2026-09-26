"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiClock, FiStar, FiX } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import { cardContext } from "@/context/CardContext";
import { ICard } from "@/type/card.type";


const MyPlan = () => {

    const {plan,saved, removeFromPlan, removeFromSaved,} = useContext(cardContext);

    const [sortBy, setSortBy] = useState<"duration" | "difficulty" | "rating" >("duration");

    const sortCards = (cards: ICard[]) => {
         const sortedCards = [...cards];

        if (sortBy === "duration") {

            sortedCards.sort((a, b) => { return a.duration - b.duration;  }); 
        }
             else if (sortBy === "difficulty") {

            sortedCards.sort((a, b) => {
                return a.difficulty.localeCompare(b.difficulty);
            });

        } else if (sortBy === "rating") {

            sortedCards.sort((a, b) => {
                return b.rating - a.rating;
            });

        }
        return sortedCards;
    };
    const sortedPlan = sortCards(plan);
    const sortedSaved = sortCards(saved);

    let totalMinutes = 0;

    for (const card of plan) {
        totalMinutes = totalMinutes + card.duration;
    }
    let totalCalories = 0;

    for (const card of plan) {
        totalCalories = totalCalories + card.caloriesBurned;
    }

    return (
        <div>

            <hr className="text-gray-800 mt-6" />
            <div className="text-white px-4 sm:px-6 lg:px-10 xl:px-16 mt-8 sm:mt-10">
                <h1 className="text-2xl font-bold">  MY PLAN  </h1>
                <p className="text-[#8A92A0]">  Cap of five lifts for today. Finish them, then load more.</p>

            </div>


            <div className="bg-[#13161d] mt-5 w-[calc(100%-2rem)] sm:w-[90%] max-w-7xl min-h-[130px] mx-auto text-white grid grid-cols-3 gap-3 p-4 sm:p-5 rounded-2xl">
                <div>

                    <p className="text-gray-400"> Exercises </p>

                    <h2 className="text-3xl font-bold text-[#C7FF00] mt-2"> {plan.length} </h2>

                </div>


                <div>

                    <p className="text-gray-400">   Minutes </p>
                    <h2 className="text-3xl font-bold mt-2">  {totalMinutes}</h2>

                </div>

                <div>

                    <p className="text-gray-400">  Calories </p>
                    <h2 className="text-3xl font-bold mt-2">  {totalCalories}</h2>

                </div>
            </div>

            <div className="w-[calc(100%-2rem)] sm:w-[90%] max-w-7xl mx-auto mt-5">

                <div className="flex justify-end items-center gap-3">

                    <span className="text-sm text-gray-500"> Sort By </span>


                    <select  value={sortBy}  onChange={(e) =>   setSortBy(   e.target.value as  | "duration"  | "difficulty"   | "rating" )    }
                        className="bg-[#15171D] border border-[#292C33] text-white text-sm rounded-lg px-3 py-2 outline-none"
                    >

                        <option value="duration">  Duration </option>
                        <option value="difficulty"> Difficulty </option>
                        <option value="rating">Rating</option>

                    </select>

                </div>


                <div className="tabs tabs-lift mt-5">


                    <input  type="radio"  name="my_plan_tabs" className="tab"  aria-label={`Today's Plan (${plan.length})`} defaultChecked   />

                    <div className="tab-content bg-[#0F1116] border-[#292C33] p-4 sm:p-6 space-y-3">

                        {sortedPlan.length > 0 ? (sortedPlan.map((card: ICard) => {  return (

                                    <div
                                        key={card.id}
                                        className="bg-[#15171D] border border-[#292C33] rounded-xl p-3 flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4"
                                    >

                                        <Image src={card.image}   alt={card.name} width={90}  height={65}
                                            className="w-20 sm:w-[90px] h-16 object-cover rounded-lg"
                                        />
                                        <div className="flex-1">

                                            <Link   href={`/WorkOuts/${card.id}`}      className="text-white font-bold hover:text-[#C7FF00]"  >  {card.name}   </Link>


                                            <p className="text-gray-500 text-xs mt-1">   {card.equipment}   </p>
                                            <div className="flex items-center gap-4 text-gray-400 text-xs mt-2">

                                                <span className="flex items-center gap-1">
                                                    <FiClock />  {card.duration} min
                                                </span>

                                                <span className="flex items-center gap-1">
                                                    <FaFire />    {card.caloriesBurned} kcal
                                                </span>

                                                <span className="flex items-center gap-1">
                                                    <FiStar /> {card.rating}
                                                </span>

                                            </div>

                                        </div>

                                        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto sm:ml-auto">

                                            <Link   href={`/WorkOuts/${card.id}`}
                                                className="border border-[#292C33] text-gray-300 text-xs px-3 sm:px-4 py-2 rounded-full hover:bg-[#20242c]"
                                            >
                                                View Details
                                            </Link>

                                            <button
                                                onClick={() =>
                                                    removeFromPlan(card.id)
                                                }
                                                className="bg-[#C7FF00] text-black text-xs px-3 sm:px-4 py-2 rounded-full font-semibold hover:bg-[#b8ed00]">  Mark as Done  </button>

                                            <button
                                                onClick={() =>
                                                    removeFromPlan(card.id)
                                                }
                                                className="text-gray-500 hover:text-white"
                                            >
                                                <FiX />
                                            </button>
                                        </div>
                                    </div>
                                );   })  ) : (

                            <div className="rounded-2xl border border-dashed border-gray-800 text-white min-h-[280px] flex flex-col justify-center items-center text-center">

                                <h1 className="text-xl font-bold tracking-wide"> NOTHING HERE YET </h1>

                                <p className="text-gray-500 text-sm mt-2">   Browse the library and add a lift to get today moving.  </p>


                                <Link    href="/WorkOuts"    className="bg-lime-400 text-black font-medium text-sm px-6 py-2 rounded-full mt-5 hover:bg-lime-300 transition" >
                                    Go to workouts
                                </Link>

                            </div>

                        )}

                    </div>


                    <input    type="radio"    name="my_plan_tabs"    className="tab"   aria-label={`Saved (${saved.length})`}   />

                    <div className="tab-content bg-[#0F1116] border-[#292C33] p-4 sm:p-6 space-y-3">


                        {sortedSaved.length > 0 ? (    sortedSaved.map((card: ICard) => {

                                return (
                                    <div    key={card.id}
                                        className="bg-[#15171D] border border-[#292C33] rounded-xl p-3 flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4"
                                    >

                                        <Image    src={card.image}    alt={card.name}     width={90}      height={65}     className="w-20 sm:w-[90px] h-16 object-cover rounded-lg"        />

                                        <div className="flex-1">

                                            <Link   href={`/WorkOuts/${card.id}`}  className="text-white font-bold hover:text-[#C7FF00]" >   {card.name}   </Link>

                                            <p className="text-gray-500 text-xs mt-1">  {card.equipment}  </p>
                                            <div className="flex items-center gap-4 text-gray-400 text-xs mt-2">

                                                <span className="flex items-center gap-1">
                                                    <FiClock />  {card.duration} min
                                                </span>

                                                <span className="flex items-center gap-1">
                                                    <FaFire />  {card.caloriesBurned} kcal
                                                </span>

                                                <span className="flex items-center gap-1">
                                                    <FiStar />    {card.rating}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto sm:ml-auto">

                                            <Link  href={`/WorkOuts/${card.id}`}   className="border border-[#292C33] text-gray-300 text-xs px-3 sm:px-4 py-2 rounded-full hover:bg-[#20242c]" >
                                                View Details
                                            </Link>

                                            <button
                                                onClick={() =>
                                                    removeFromSaved(card.id)
                                                }
                                                className="border border-[#292C33] text-gray-300 text-xs px-4 py-2 rounded-full hover:bg-[#20242c]">  Remove
                                            </button>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (

                            <div className="rounded-2xl border border-dashed border-gray-800 text-white min-h-[280px] flex flex-col justify-center items-center text-center">

                                <h1 className="text-xl font-bold tracking-wide">  NOTHING HERE YET </h1>
                                <p className="text-gray-500 text-sm mt-2"> Save workouts to find them here later.  </p>
                                <Link     href="/WorkOuts" className="bg-lime-400 text-black font-medium text-sm px-6 py-2 rounded-full mt-5 hover:bg-lime-300 transition"  >  Go to workouts  </Link>

                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPlan;