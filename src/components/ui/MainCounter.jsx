import { useState } from "react"

export default function MainCounter({count, setCount}) {

    return (
        <div className="flex flex-wrap items-center justify-center">
            <button onClick={() => {
                if (count > 1) {
                    setCount(count - 1)
                }
            }}>
                -
            </button>
            <p className="p-6">{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}