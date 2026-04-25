import { useState, useEffect } from "react"

    function Users() {
        const [users, setUsers] = useState([])

        useEffect(()=>{
            console.log("Страница загружена")

            fetch("https://69ec8be8af4ff533142b135e.mockapi.io/users")
            .then((res)=>res.json())
            .then((data)=>{
                setUsers(data)
            })
        }, [])

        return(
            <div>
                <h2>Список пользователей</h2>
                {users.map((user)=>(
                    <div>
                        <img width={150} src={user.avatar} alt="avatar"/>
                        <p>Имя {user.name}</p>
                        <p>Возраст {user.age}</p>
                        <br></br>
                    </div>
                ))}
            </div>
        )
    }

    export default Users