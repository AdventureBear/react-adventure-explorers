'use client'

import {useState} from "react";

export default function Home() {

    const [showOption1, setShowOption1] = useState(false)
    const [showOption2, setShowOption2] = useState(false)
    const [goHome, setGoHome] = useState(true)
    const [goBarn, setGoBarn] = useState(true)

    function handleGoHome() {
        console.log("clicked home")
        setGoBarn(false)
        setGoHome(true)
    }


    function handleGoBarn() {
        console.log("clicked barn")
        setGoHome(false)
        setGoBarn(true)
    }

    function handleChoice1() {
        console.log("clicked choice 1")
        setShowOption1(true)
        setShowOption2(false)
    }

    function handleChoice2() {
        console.log("clicked choice 2")
        setShowOption2(true)
        setShowOption1(false)
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
                            onClick={() => {
                                handleChoice1()
                                handleGoHome()
                            }}
                            className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition ${goHome ? `` : `bg-gray-300 hover:bg-gray-300`}`}>
                            Go Home
                        </button>

                        <button
                            onClick={() => {
                                handleChoice2()
                                handleGoBarn()
                            }}
                            className={`w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition ${goBarn ? `` : `bg-gray-300 hover:bg-gray-300`}`}>
                            Go to the Barn

                        </button>


                    </div>

                    {/*//go home*/}
                    {showOption1 &&
                        (<>
                                <div className="mt-6 p-4 bg-gray-200 rounded-lg shadow-md">
                                    <p className="text-gray-700">He takes a bath</p>
                                </div>
                            </>
                        )

                    }


                    {showOption2 &&
                        <div className="mt-6 p-4 bg-gray-200 rounded-lg shadow-md">
                            <p className="text-gray-700">He rolls in the mud</p>
                        </div>
                    }


                </div>
            </div>
                <button
                    onClick={() => {
                        setGoHome(true)
                        setGoBarn(true)
                        setShowOption1(false)
                        setShowOption2(false)
                    }}
                    className={`w-full bg-red-300 hover:bg-red-300 text-white font-semibold py-2 px-4 rounded-lg shadow transition ${goBarn ? `` : `bg-gray-300 hover:bg-gray-300`}`}>
                    Reset Game

                </button>

        </>
    );


}
