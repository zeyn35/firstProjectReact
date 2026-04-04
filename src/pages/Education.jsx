import MyComponent from "../components/MyComponent"
import SampleBlock from "../components/SampleBlock"
import ComponentUseState from "../components/ComponentUseState"
import SampleBlockUseState from "../components/SampleBlockUseState"
import Counter from "../components/Counter"
import MyList from "../components/MyList"
import FirstConditional from "../components/EduComponents/FirstConditional"
import { use, useState } from "react"
import OnChangeComp from "../components/OnChangeComp"
import { useEffect } from "react"

function Education() {
    useEffect(()=>{
        console.log("Страница Education загрузилась")
    }, [])


    const [isVisible, setIsVisible] = useState(true)

    return (
        <div className="flex flex-col gap-10">
        <h1>Обучающая страница</h1>
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