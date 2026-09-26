"use client";

import React, { useContext } from "react";
import { FiBookmark } from "react-icons/fi";
import { toast } from "react-toastify";
import { cardContext } from "@/context/CardContext";
import { ICard } from "@/type/card.type";

const SaveButton = ({ singleCard }: { singleCard: ICard }) => {
    const { saved, saveForLater } = useContext(cardContext);

    const alreadySaved = saved.find((card) => card.id === singleCard.id
    );

    const handleSave = () => {
        if (alreadySaved) {
            toast.info(`${singleCard.name} is already saved.`);
        }

        const success = saveForLater(singleCard);

        if (success) {
            toast.success(`${singleCard.name} saved for later!`);
        }
    };

    return (
        <button
            onClick={handleSave}
            disabled={!!alreadySaved}
            className={`flex items-center gap-2 border px-5 py-3 rounded-lg text-sm transition ${
                alreadySaved
                    ? "border-gray-700 text-gray-500 cursor-not-allowed"
                    : "border-[#292C33] text-white hover:bg-[#15181E]"
            }`}
        >
            <FiBookmark />

            {alreadySaved ? "Saved" : "Save for later"}
        </button>
    );
};

export default SaveButton;