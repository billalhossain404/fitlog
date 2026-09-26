"use client";

import { cardContext } from "@/context/CardContext";
import { ICard } from "@/type/card.type";
import React, { useContext } from "react";
import { BsFillCalendarRangeFill } from "react-icons/bs";
import { toast } from "react-toastify";

const PlanButton = ({ singleCard }: { singleCard: ICard }) => {
    const { plan, addToPlan } = useContext(cardContext);

    const alreadyAdded = plan.find((card) => card.id === singleCard.id);

    const handlePlan = () => {
        if (alreadyAdded) {
            toast.info(`${singleCard.name} is already in today's plan.`);
        }

        const success = addToPlan(singleCard);

        if (success) {
            toast.success(`${singleCard.name} added to today's plan!`);
        }
    };

    return (
        <button
            onClick={handlePlan}
            disabled={!!alreadyAdded}
            className={`flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold transition ${
                alreadyAdded
                    ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                    : "bg-[#C7FF00] text-black hover:bg-[#b8ed00]"
            }`}
        >
            <BsFillCalendarRangeFill />

            {alreadyAdded
                ? "Added to today's plan"
                : "Add to today's plan"}
        </button>
    );
};

export default PlanButton;