'use client';

import { useState } from "react";

export default function Home() {
    const [choice, setChoice] = useState(null); // "HOME", "BARN", or null for reset

    function handleChoice(newChoice) {
        console.log(`Clicked ${newChoice}`);
        setChoice(newChoice);
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
                    <div className="space-y-4">
                        <button
                            onClick={() => handleChoice("HOME")}
                            className={`w-full ${
                                choice === "HOME"
                                    ? "bg-blue-300"
                                    : "bg-blue-500 hover:bg-blue-600"
                            } text-white font-semibold py-2 px-4 rounded-lg shadow transition`}
                        >
                            Go Home
                        </button>
                        <button
                            onClick={() => handleChoice("BARN")}
                            className={`w-full ${
                                choice === "BARN"
                                    ? "bg-green-300"
                                    : "bg-green-500 hover:bg-green-600"
                            } text-white font-semibold py-2 px-4 rounded-lg shadow transition`}
                        >
                            Go to the Barn
                        </button>
                    </div>

                    {/* Option display based on choice */}
                    {choice === "HOME" && (
                        <div className="mt-6 p-4 bg-gray-200 rounded-lg shadow-md">
                            <p className="text-gray-700">He takes a bath</p>
                        </div>
                    )}
                    {choice === "BARN" && (
                        <div className="mt-6 p-4 bg-gray-200 rounded-lg shadow-md">
                            <p className="text-gray-700">He rolls in the mud</p>
                        </div>
                    )}
                </div>
                <button
                    onClick={() => setChoice(null)}
                    className="mt-4 bg-red-300 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded-lg shadow transition"
                >
                    Reset Game
                </button>
            </div>

        </>
    );
}
