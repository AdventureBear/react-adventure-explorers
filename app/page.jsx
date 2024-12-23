'use client';

import { useState } from "react";

export default function Home() {
    const [state, setState] = useState({
        currentChoice: null, // "home" or "barn"
        showResult: false,
        result: "",
    });

    const handleChoice = (choice) => {
        if (choice === "home") {
            setState({
                currentChoice: "home",
                showResult: true,
                result: "He takes a bath",
            });
        } else if (choice === "barn") {
            setState({
                currentChoice: "barn",
                showResult: true,
                result: "He rolls in the mud",
            });
        }
    };

    const resetGame = () => {
        setState({
            currentChoice: null,
            showResult: false,
            result: "",
        });
    };

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
                            onClick={() => handleChoice("home")}
                            className={`w-full ${
                                state.currentChoice === "home"
                                    ? "bg-blue-300"
                                    : "bg-blue-500 hover:bg-blue-600"
                            } text-white font-semibold py-2 px-4 rounded-lg shadow transition`}
                        >
                            Go Home
                        </button>
                        <button
                            onClick={() => handleChoice("barn")}
                            className={`w-full ${
                                state.currentChoice === "barn"
                                    ? "bg-green-300"
                                    : "bg-green-500 hover:bg-green-600"
                            } text-white font-semibold py-2 px-4 rounded-lg shadow transition`}
                        >
                            Go to the Barn
                        </button>
                    </div>

                    {state.showResult && (
                        <div className="mt-6 p-4 bg-gray-200 rounded-lg shadow-md">
                            <p className="text-gray-700">{state.result}</p>
                        </div>
                    )}
                </div>
                <button
                    onClick={resetGame}
                    className="mt-4 bg-red-300 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded-lg shadow transition"
                >
                    Reset Game
                </button>
            </div>
        </>
    );
}
