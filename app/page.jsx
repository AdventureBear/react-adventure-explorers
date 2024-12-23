'use client';

import { useState } from "react";

const scenes = [
    {
        id: "start",
        description: "A farmer falls into a cow patty. What does he do next?",
        objective: "Objective: Feed the animals and finish the chores before sunset.",
        choices: [
            { text: "Go Home", nextScene: "home" },
            { text: "Go to the Barn", nextScene: "barn" },
        ],
    },
    {
        id: "home",
        description: "The farmer heads home to clean up.",
        result: "He takes a long bath and reflects on the day.",
        choices: [
            { text: "Start Chores", nextScene: "chores", condition: (state) => !state.choresDone },
            { text: "Reset", nextScene: "start" },
        ],
    },
    {
        id: "barn",
        description: "The farmer decides to head to the barn.",
        result: "He rolls in the mud but finds it strangely relaxing.",
        choices: [
            { text: "Check on the Animals", nextScene: "animals" },
            { text: "Reset", nextScene: "start" },
        ],
    },
    {
        id: "animals",
        description: "The farmer checks on the animals in the barn.",
        result: "The animals seem content, but the pigs laugh at him.",
        choices: [
            { text: "Feed the Animals", nextScene: "feed", condition: (state) => !state.fedAnimals },
            { text: "Reset", nextScene: "start" },
        ],
    },
    {
        id: "chores",
        description: "The farmer works hard to finish the chores.",
        result: "The chores are done! The fields are ready for planting.",
        choices: [{ text: "Reset", nextScene: "start" }],
    },
    {
        id: "feed",
        description: "The farmer decides to feed the animals.",
        result: "The animals are grateful, and the farmer feels accomplished.",
        choices: [{ text: "Reset", nextScene: "start" }],
    },
    {
        id: "win",
        description: "Congratulations! You've completed all your tasks for the day.",
        result: "The farmer heads to bed feeling satisfied and ready for tomorrow.",
        choices: [{ text: "Reset", nextScene: "start" }],
    },
];

export default function Home() {
    const [currentSceneId, setCurrentSceneId] = useState("start");
    const [gameState, setGameState] = useState({ fedAnimals: false, choresDone: false });

    const currentScene = scenes.find((scene) => scene.id === currentSceneId);

    const handleChoice = (nextScene) => {
        if (nextScene === "feed") {
            setGameState({ ...gameState, fedAnimals: true });
        }
        if (nextScene === "chores") {
            setGameState({ ...gameState, choresDone: true });
        }
        if (gameState.fedAnimals && gameState.choresDone) {
            setCurrentSceneId("win");
        } else {
            setCurrentSceneId(nextScene);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Choose Your Own Adventure</h1>
                {currentScene.id === "start" && (
                    <p className="text-gray-500 mb-4">{currentScene.objective}</p>
                )}
                <p className="text-gray-600 mb-6">{currentScene.description}</p>

                {currentScene.result && (
                    <div className="mt-6 p-4 bg-gray-200 rounded-lg shadow-md">
                        <p className="text-gray-700">{currentScene.result}</p>
                    </div>
                )}

                <div className="space-y-4">
                    {currentScene.choices.map((choice, index) => {
                        const isAvailable = choice.condition ? choice.condition(gameState) : true;
                        return (
                            <button
                                key={index}
                                onClick={() => isAvailable && handleChoice(choice.nextScene)}
                                className={`w-full ${
                                    isAvailable ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300"
                                } text-white font-semibold py-2 px-4 rounded-lg shadow transition`}
                                disabled={!isAvailable}
                            >
                                {choice.text}
                            </button>
                        );
                    })}
                </div>
            </div>
            {currentSceneId !== "start" && (
                <button
                    onClick={() => {
                        setCurrentSceneId("start");
                        setGameState({ fedAnimals: false, choresDone: false }); // Reset game state
                    }}
                    className="mt-4 bg-red-300 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded-lg shadow transition"
                >
                    Reset Game
                </button>
            )}
        </div>
    );
}
