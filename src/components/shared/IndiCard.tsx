import React from "react";
import Image from "next/image";
import { FiClock, FiStar } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import { ICard } from "@/type/card.type";

interface ICardProps {
    card : ICard
} 

const IndiCard = ({ card }: ICardProps) => {
    return (
        <div className="bg-[#15171D] border border-[#292C33] rounded-2xl overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-lg">

            <Image src={card.image} alt={card.name} width={500} height={300} className="w-full h-[220px] object-cover" />

            <div className="p-6">
                <div className="flex gap-2 mb-4">
                    {card.muscleGroups.map((muscle: string, index: number) => (
                        <span key={index} className="bg-[#C7FF00] text-black px-3 py-1 rounded-full text-xs font-bold uppercase">{muscle}</span>
                    ))}
                </div>

                <h2 className="text-white text-xl font-bold uppercase">
                    {card.name}
                </h2>

                <p className="text-gray-400 mt-2">
                    {card.equipment}
                </p>

                <div className="border-t border-[#292C33] my-5"></div>

                <div className="flex items-center gap-4 text-gray-400 text-sm">

                    <div className="flex items-center gap-2">
                        <FiClock />
                        <span>{card.duration} min</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaFire />
                        <span>{card.caloriesBurned} kcal</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <FiStar />
                        <span>{card.rating}</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default IndiCard;