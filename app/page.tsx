"use client";

import { useState } from "react";

export default function Home() {
    // null means no option selected, 'home' or 'barn' for the selected option
    const [selected, setSelected] = useState(null);
    // null means both buttons active, 'home' or 'barn' for the active button
    // const [activeButton, setActiveButton] = useState(null);

    function handleChoice(option) {
        console.log(`clicked ${option}`);
        setSelected(option);
        // setActiveButton(option);
    }

    function handleReset() {
        setSelected(null);
        // setActiveButton(null);
    }

    return (
        <>
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-md text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">
                        Choose Your Own Adventure
                    </h1>
                    <p className="text-gray-600 mb-6">
                        A farmer falls into a cow patty. What does he do next?
                    </p>
                    <div className="space-y-4 ">
                        <button
                            onClick={() => handleChoice("home")}
                            className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition ${
                                selected && selected !== "home"
                                    ? "bg-gray-300 hover:bg-gray-300"
                                    : ""
                            }`}
                        >
                            Go Home
                        </button>

                        <button
                            onClick={() => handleChoice("barn")}
                            className={`w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition ${
                                selected && selected !== "barn"
                                    ? "bg-gray-300 hover:bg-gray-300"
                                    : ""
                            }`}
                        >
                            Go to the Barn
                        </button>
                    </div>

                    {selected === "home" && (
                        <div className="mt-6 p-4 bg-gray-200 rounded-lg shadow-md">
                            <p className="text-gray-700">He takes a bath</p>
                        </div>
                    )}

                    {selected === "barn" && (
                        <div className="mt-6 p-4 bg-gray-200 rounded-lg shadow-md">
                            <p className="text-gray-700">He rolls in the mud</p>
                        </div>
                    )}
                </div>
            </div>
            <button
                onClick={handleReset}
                className="w-full bg-red-300 hover:bg-red-300 text-white font-semibold py-2 px-4 rounded-lg shadow transition"
            >
                Reset Game
            </button>
        </>
    );
}
