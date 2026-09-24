import React from "react";
import IndiCard from "../shared/IndiCard";
import { ICard } from "@/type/card.type";

const getCards = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
};

const Cards = async () => {
    const cardData = await getCards();

    return (

        <div>
            <div className="text-white px-10 mt-20">
                <h1 className="text-3xl font-bold">THE LIBRARY</h1>
                <p className="text-[#9CA3AF]">Twelve lifts covering every major muscle group.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">

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

export default Cards;