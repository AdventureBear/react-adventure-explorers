'use client';

import { useState } from "react";
// import Confetti from "react-confetti";

const scenes = [
    {
        id: "start",
        description: "A farmer falls into a cow patty. What does he do next?",
        objective: "Objective: Feed the animals and finish the chores before sunset.",
        choices: [
            { text: "Go to the House", nextScene: "home" },
            { text: "Go to the Barn", nextScene: "barn" },
        ],
    },
    {
        id: "home",
        description: "The farmer heads home to clean up.",
        result: "He takes a long bath and reflects on the day.",
        choices: [
            { text: "Start Chores", nextScene: "chores", condition: (state) => !state.choresDone },
            { text: "Return to the Barn", nextScene: "barn" },
        ],
    },
    {
        id: "barn",
        description: "The farmer decides to head to the barn.",
        result: "He rolls in the mud but finds it strangely relaxing.",
        choices: [
            { text: "Check on the Animals", nextScene: "animals" },
            { text: "Return to the House", nextScene: "home" },
        ],
    },
    {
        id: "animals",
        description: "The farmer checks on the animals in the barn.",
        result: "The animals seem content, but the pigs laugh at him.",
        choices: [
            { text: "Feed the Animals", nextScene: "feed", condition: (state) => !state.fedAnimals },
            { text: "Return to the Barn", nextScene: "barn" },
        ],
    },
    {
        id: "chores",
        description: "The farmer works hard to finish the chores.",
        result: "The chores are done! The fields are ready for planting.",
        choices: [
            { text: "Return to the House", nextScene: "home" },
        ],
    },
    {
        id: "feed",
        description: "The farmer decides to feed the animals.",
        result: "The animals are grateful, and the farmer feels accomplished.",
        choices: [
            { text: "Return to the Barn", nextScene: "barn" },
        ],
    },
    {
        id: "win",
        description: "Congratulations! You've completed all your tasks for the day.",
        result: "The farmer heads to bed feeling satisfied and ready for tomorrow.",
        choices: [],
    },
];

export default function Home() {
    const [currentSceneId, setCurrentSceneId] = useState("start");
    const [gameState, setGameState] = useState(
        {
            fedAnimals: false,
            choresDone: false
        }
    );

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

    const isWin = currentSceneId === "win";

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <div className="w-1/4 bg-gray-800 text-white p-4 flex flex-col items-center">
                <h2 className="text-xl font-bold mb-4">Progress</h2>
                <div className="flex flex-col items-start space-y-2">
                    <div className="flex items-center space-x-2">
            <span className={`text-2xl ${gameState.fedAnimals ? "text-green-400" : "text-gray-400"}`}>
              {gameState.fedAnimals ? "✅" : "❌"}
            </span>
                        <span>Feed the Animals</span>
                    </div>
                    <div className="flex items-center space-x-2">
            <span className={`text-2xl ${gameState.choresDone ? "text-green-400" : "text-gray-400"}`}>
              {gameState.choresDone ? "✅" : "❌"}
            </span>
                        <span>Finish the Chores</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-3/4 flex flex-col items-center justify-center px-4">
                {/*{isWin && <Confetti width={window.innerWidth} height={window.innerHeight} />}*/}
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-md text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Choose Your Own Adventure</h1>

                    {currentScene.objective && (
                        <p className="text-gray-500 mb-4">{currentScene.objective}</p>
                    )}

                    {/*{currentScene.id === "start" && (*/}
                    {/*    <p className="text-gray-500 mb-4">{currentScene.objective}</p>*/}
                    {/*)}*/}
                    <p className="text-gray-600 mb-6">{currentScene.description}</p>

                    {currentScene.result && (
                        <div className="mt-6 mb-6 p-4 bg-gray-200 rounded-lg shadow-md">
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

                {/* Reset Button */}
                <button
                    onClick={() => {
                        setCurrentSceneId("start");
                        setGameState({ fedAnimals: false, choresDone: false }); // Reset game state
                    }}
                    className="mt-6 bg-red-300 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded-lg shadow transition"
                >
                    Reset Game
                </button>
            </div>
        </div>
    );
}
