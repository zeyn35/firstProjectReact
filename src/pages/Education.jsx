import MyComponent from "../components/EduComponents/MyComponent"
import SampleBlock from "../components/EduComponents/SampleBlock"
import ComponentUseState from "../components/EduComponents/ComponentUseState"
import SampleBlockUseState from "../components/EduComponents/SampleBlockUseState"
import Counter from "../components/EduComponents/Counter"
import MyList from "../components/EduComponents/MyList"
import FirstConditional from "../components/EduComponents/FirstConditional"
import { use, useState } from "react"
import OnChangeComp from "../components/EduComponents/OnChangeComp"
import { useEffect } from "react"
import Users from "../components/EduComponents/Users"

function Education() {
    useEffect(()=>{
        console.log("Страница Education загрузилась")
    }, [])


    const [isVisible, setIsVisible] = useState(true)

    return (
        <div className="flex flex-col gap-10">
        <h1>Обучающая страница</h1>
        <Users/>
        <MyComponent/>
        <SampleBlock
            title={"Заголовок"}
            description={"Описание"}
        />
        <ComponentUseState/>
        <SampleBlockUseState/>
        <Counter/>
        <MyList/>
        <FirstConditional isVisible={isVisible} setIsVisible={setIsVisible}/>
        <button onClick={()=>setIsVisible(!isVisible)}>Изменить отображение</button>
        <OnChangeComp/>

        </div>
    )
}


export default Education