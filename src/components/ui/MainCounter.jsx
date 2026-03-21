import { useState } from "react"

export default function MainCounter() {
    const [count, setCount] = useState(1)

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