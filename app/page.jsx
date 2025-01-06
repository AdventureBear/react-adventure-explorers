'use client';

import { useReducer } from "react";

// Define the states and transitions for the state machine
const stateMachine = {
    IDLE: {
        HOME: "HOME",
        BARN: "BARN",
    },
    HOME: {
        RESET: "IDLE",
    },
    BARN: {
        RESET: "IDLE",
    },
};

// Initial state
const initialState = {
    currentState: "IDLE", // The current state of the state machine
    result: "", // The result or message to display
};

// Reducer function for state transitions
function reducer(state, action) {
    const nextState = stateMachine[state.currentState][action.type];
    if (!nextState) return state; // If no valid transition exists, return current state

    switch (action.type) {
        case "HOME":
            return {
                currentState: nextState,
                result: "He takes a bath.",
            };
        case "BARN":
            return {
                currentState: nextState,
                result: "He rolls in the mud.",
            };
        case "RESET":
            return {
                currentState: nextState,
                result: "",
            };
        default:
            return state;
    }
}

export default function Home() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    Choose Your Own Adventure
                </h1>
                <p className="text-gray-600 mb-6">
                    A farmer falls into a cow patty. What does he do next?
                </p>
                <div className="space-y-4">
                    {state.currentState === "IDLE" && (
                        <>
                            <button
                                onClick={() => dispatch({ type: "HOME" })}
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition"
                            >
                                Go Home
                            </button>
                            <button
                                onClick={() => dispatch({ type: "BARN" })}
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition"
                            >
                                Go to the Barn
                            </button>
                        </>
                    )}

                    {state.currentState !== "IDLE" && (
                        <div className="mt-6 p-4 bg-gray-200 rounded-lg shadow-md">
                            <p className="text-gray-700">{state.result}</p>
                        </div>
                    )}
                </div>
            </div>

            {state.currentState !== "IDLE" && (
                <button
                    onClick={() => dispatch({ type: "RESET" })}
                    className="mt-4 bg-red-300 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded-lg shadow transition"
                >
                    Reset Game
                </button>
            )}
        </div>
    );
}
