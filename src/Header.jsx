import Login from "./components/login"
import { useState } from "react"


function Header() {
    const [isVisible, setIsVisible] = useState(true)

    return (

        <header className="flex justify-between items-center p-4">
            <p className="flex-1">Интернет магазин</p>
            <Login isVisible={isVisible} setIsVisible={setIsVisible}/>           
        </header>
    )
}

export default Header