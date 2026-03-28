

    function Login({isVisible, setIsVisible}) {


        return(
            <div>
            {isVisible == true
             ? <button onClick={()=>setIsVisible(false)} className="!bg-red-500 hover:!bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium flex flex-start">Выйти</button>
             : <button onClick={()=>setIsVisible(true)} className="!bg-red-500 hover:!bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium flex flex-start">Войти</button> 
            }
            </div>
        )
    }

    export default Login