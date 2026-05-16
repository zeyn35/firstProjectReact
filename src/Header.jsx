import { useState } from "react"
import Login from "./components/MainComponents/Login"
import AdminPanel from "./components/MainComponents/AdminPanel"


function Header() {
    const [isVisible, setIsVisible] = useState(false)

    return (

        <header className="flex justify-between items-center p-4">
            <p className="flex-1">Интернет магазин</p>
            <Login isVisible={isVisible} setIsVisible={setIsVisible}/>
            <AdminPanel/>


        </header>
    )
}

export default Header