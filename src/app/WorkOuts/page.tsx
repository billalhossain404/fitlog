import React from "react";
import { ICard } from "@/type/card.type";
import IndiCard from "@/components/shared/IndiCard";
import Banner from "../Banner/page";

const getCards = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
};

const WorkOuts = async () => {
    const cardData = await getCards();

    return (

        <div>
            <Banner></Banner>
            <div className="text-white px-4 sm:px-6 lg:px-10 xl:px-16 mt-12 sm:mt-20">
                <h1 className="text-3xl font-bold">THE LIBRARY</h1>
                <p className="text-[#9CA3AF]">Twelve lifts covering every major muscle group.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-10 xl:px-16 mt-8 sm:mt-10">

                {cardData.map((card: ICard, idx: number) => {
                    return (
                        <IndiCard key={idx} card={card}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default WorkOuts;