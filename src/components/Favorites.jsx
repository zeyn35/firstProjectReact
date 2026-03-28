

    function Favorites({isVisible, setIsVisible}) {


        return(
            <div>
            {isVisible == true
             ? <button onClick={()=>setIsVisible(false)}>🤍</button>
             : <button onClick={()=>setIsVisible(true)}>❤️</button> 
            }
            </div>
        )
    }

    export default Favorites

