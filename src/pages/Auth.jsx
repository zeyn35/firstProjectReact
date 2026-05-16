import Header from "../Header"
import { useState } from "react"

function Auth() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()

        if (!email.includes("@")) {
            setError("Введите корректный email")
            return
        }
        
        if (password.length < 6) {
            setError("Пароль должен содержать больше 6 символов")
            return
        }
        
        console.log("Форма отправлена")
        setError("")
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Header/>
            <div className="flex flex-col items-center justify-center px-4 pt-24 pb-12">
                <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                        Авторизация
                    </h1>
                    
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="text"
                                placeholder="example@mail.com"
                                value={email}
                                onChange={(event)=>setEmail(event.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white text-gray-900"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Пароль
                            </label>
                            <div className="flex gap-2">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Минимум 6 символов"
                                    value={password}
                                    onChange={(event)=>setPassword(event.target.value)}
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white text-gray-900"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{ color: 'white', backgroundColor: '#6b7280' }}
                                    className="px-4 py-2 hover:bg-gray-600 font-medium rounded-lg transition duration-200 whitespace-nowrap"
                                >
                                    {showPassword ? "Скрыть" : "Показать"}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        <button 
                            type="submit"
                            style={{ color: 'white', backgroundColor: '#2563eb' }}
                            className="w-full hover:bg-blue-700 font-bold py-3 px-4 rounded-lg text-base cursor-pointer transition duration-200 mt-2 shadow-md"
                        >
                            Войти
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Auth