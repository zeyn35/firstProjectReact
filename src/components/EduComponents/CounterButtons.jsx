import { useState } from "react"

    export default function CounterButtons({count, setCount}) {

    return (
        <div className="border p-3">
            <button className="border p-3" onClick={()=>setCount(count + 1)}>
                +1
            </button>
            <button className="border p-3" onClick={()=>setCount(count - 1)}>
                -1
            </button>
        </div>
    )
}