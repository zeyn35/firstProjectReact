import { useState } from "react"

    function FirstConditional({isVisible, setIsVisible}) {


        return(
            <div>
            {isVisible == true
             ? <button onClick={()=>setIsVisible(false)}>Выйти</button>
             : <button onClick={()=>setIsVisible(true)}>Войти</button> 
            }
            </div>
        )
    }

    export default FirstConditional