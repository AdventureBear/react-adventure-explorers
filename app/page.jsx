'use client';

import { useState } from "react";

const scenes = [
    {
        id: "start",
        description: "A farmer falls into a cow patty. What does he do next?",
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
            { text: "Get Back to Work", nextScene: "work" },
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
        id: "work",
        description: "The farmer gets back to work in the field.",
        result: "He finishes plowing the field just in time for sunset.",
        choices: [{ text: "Reset", nextScene: "start" }],
    },
    {
        id: "animals",
        description: "The farmer checks on the animals in the barn.",
        result: "The animals seem content, but the pigs laugh at him.",
        choices: [
            { text: "Feed the Animals", nextScene: "feed" },
            { text: "Reset", nextScene: "start" },
        ],
    },
    {
        id: "feed",
        description: "The farmer decides to feed the animals.",
        result: "The animals are grateful, and the farmer feels accomplished.",
        choices: [{ text: "Reset", nextScene: "start" }],
    },
];

export default function Home() {
    const [currentSceneId, setCurrentSceneId] = useState("start");
    const [showResult, setShowResult] = useState(false);

    const currentScene = scenes.find((scene) => scene.id === currentSceneId);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Choose Your Own Adventure</h1>
                <p className="text-gray-600 mb-6">{currentScene.description}</p>

                {showResult && currentScene.result && (
                    <div className="mt-6 p-4 bg-gray-200 rounded-lg shadow-md">
                        <p className="text-gray-700">{currentScene.result}</p>
                    </div>
                )}

                <div className="space-y-4">
                    {currentScene.choices.map((choice, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setCurrentSceneId(choice.nextScene);
                                setShowResult(true);
                            }}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition"
                        >
                            {choice.text}
                        </button>
                    ))}
                </div>
            </div>
            {currentSceneId !== "start" && (
                <button
                    onClick={() => {
                        setCurrentSceneId("start");
                        setShowResult(false);
                    }}
                    className="mt-4 bg-red-300 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded-lg shadow transition"
                >
                    Reset Game
                </button>
            )}
        </div>
    );
}
