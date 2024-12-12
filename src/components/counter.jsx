"use client"

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="space-y-4 text-center w-full">
            <h1 className="font-bold text-3xl">{count}</h1>

            <div className="space-x-4">
                <button
                    onClick={() => setCount(count - 1)}
                    className="text-lg"
                >
                    Decrement
                </button>

                <button
                    onClick={() => setCount(count + 1)}
                    className="text-lg"
                >
                    Increment
                </button>
            </div>
        </div>
    );
}