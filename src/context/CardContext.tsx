"use client";

import React, { createContext, ReactNode, useState } from "react";
import { ICard } from "@/type/card.type";

interface CardContextType {
    plan: ICard[];
    saved: ICard[];

    addToPlan: (card: ICard) => boolean;
    saveForLater: (card: ICard) => boolean;

    removeFromPlan: (id: number) => void;
    removeFromSaved: (id: number) => void;
}

export const cardContext = createContext<CardContextType>({
    plan: [],
    saved: [],

    addToPlan: () => false,
    saveForLater: () => false,

    removeFromPlan: () => {},
    removeFromSaved: () => {},
});

const CardProvider = ({ children }: { children: ReactNode }) => {

    const [plan, setPlan] = useState<ICard[]>([]);
    const [saved, setSaved] = useState<ICard[]>([]);


    const addToPlan = (card: ICard) => {

        const alreadyExists = plan.some(
            (item) => item.id === card.id
        );

        if (alreadyExists) {
            return false;
        }

        if (plan.length >= 5) {
            return false;
        }

        setPlan((previous) => [...previous, card]);

        return true;
    };


    const saveForLater = (card: ICard) => {


        const alreadyExists = saved.some(
            (item) => item.id === card.id
        );

        if (alreadyExists) {
            return false;
        }

        setSaved((previous) => [...previous, card]);

        return true;
    };

    const removeFromPlan = (id: number) => {
        setPlan((previous) =>
            previous.filter((card) => card.id !== id)
        );
    };

    const removeFromSaved = (id: number) => {
        setSaved((previous) =>
            previous.filter((card) => card.id !== id)
        );
    };

    const sharedData = {
        plan,
        saved,
        addToPlan,
        saveForLater,
        removeFromPlan,
        removeFromSaved,
    };

    return (
        <cardContext.Provider value={sharedData}>
            {children}
        </cardContext.Provider>
    );
};

export default CardProvider;