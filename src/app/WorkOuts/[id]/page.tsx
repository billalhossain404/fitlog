import React from "react";
import { ICard } from "@/type/card.type";
import Image from "next/image";
import PlanButton from "@/components/cardDetails/PlanButton";
import SaveButton from "@/components/cardDetails/SaveButton";

interface PageDetailsProps {
    params: Promise<{
        id: string;
    }>;
}

const getCards = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
};

const PageDetails = async ({ params }: PageDetailsProps) => {
    const { id } = await params;
    const cardData = await getCards();
    const singleCard = cardData.find(
        (singleCard: ICard) => singleCard.id === Number(id),
    ) as ICard;

    return (
        <div className="min-h-screen bg-[#0D0F13] text-white px-4 sm:px-6 lg:px-10 xl:px-16 mt-8 sm:mt-10 pb-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <Image
                            src={singleCard.image}
                            alt={singleCard.name}
                            width={600}
                            height={700}
                            className="w-full h-[300px] sm:h-[440px] lg:h-[620px] object-cover rounded-xl"
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-extrabold uppercase mb-2">
                            {singleCard.name}
                        </h1>

                        <p className="text-gray-400 text-sm leading-6 mb-4">
                            {singleCard.description}
                        </p>

                        <div className="flex gap-2 mb-5 flex-wrap">
                            {singleCard.muscleGroups.map((muscle: string, index: number) => (
                                <span
                                    key={index}
                                    className="bg-[#C7FF00] text-black px-3 py-1 rounded-full text-xs font-bold"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        <div className="bg-[#15181E] border border-[#292C33] rounded-xl overflow-hidden">
                            <div className="flex justify-between items-center px-4 py-4 border-b border-[#292C33]">
                                <span className="text-gray-400 text-xs uppercase">
                                    Equipment
                                </span>

                                <span className="text-sm">{singleCard.equipment}</span>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4 border-b border-[#292C33]">
                                <span className="text-gray-400 text-xs uppercase">
                                    Difficulty
                                </span>

                                <span className="text-sm">{singleCard.difficulty}</span>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4 border-b border-[#292C33]">
                                <span className="text-gray-400 text-xs uppercase">Sets</span>

                                <span className="text-sm">{singleCard.sets}</span>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4 border-b border-[#292C33]">
                                <span className="text-gray-400 text-xs uppercase">Reps</span>

                                <span className="text-sm">{singleCard.reps}</span>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4 border-b border-[#292C33]">
                                <span className="text-gray-400 text-xs uppercase">
                                    Duration
                                </span>

                                <span className="text-sm">{singleCard.duration} min</span>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4 border-b border-[#292C33]">
                                <span className="text-gray-400 text-xs uppercase">
                                    Calories
                                </span>

                                <span className="text-sm">
                                    {singleCard.caloriesBurned} kcal
                                </span>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4">
                                <span className="text-gray-400 text-xs uppercase">Rating</span>

                                <span className="text-sm">{singleCard.rating}</span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h2 className="text-sm font-bold uppercase mb-4">Instructions</h2>

                            <ol className="space-y-3">
                                {singleCard.instructions.map(
                                    (instruction: string, index: number) => (
                                        <li
                                            key={index}
                                            className="flex gap-3 text-gray-400 text-sm"
                                        >
                                            <span className="text-gray-500">{index + 1}.</span>

                                            <span>{instruction}</span>
                                        </li>
                                    ),
                                )}
                            </ol>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 mt-7">
                            <PlanButton singleCard = {singleCard} />

                            <SaveButton singleCard={singleCard} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageDetails;
