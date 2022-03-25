import React from 'react';
import {Button} from "./Buttom";

function Microtask3() {

    const click = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('click')
    }
    const click2 = (name: string) => {
        console.log(name)
    }

    // ВНИМАНИЕ Важно!!!
    const ButtonClick = (title: string, num: number) => {
        console.log(title, num)
    }

    // контрольная кнопка
    const Push = () => {
        console.log('нажата контрольная кнопка')
    }

    return (
        <div className="App">

            <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                console.log(1)}}>1</button>

            <button onClick={click}>click</button>

            <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => click2('PEREDANUE DANNUE')}>click</button>

            <Button  name='New component' callBack={() => ButtonClick('передали пропсом функцию колбэк', 14)}/>

            <Button name={"Контрольная кнопка"} callBack={Push}/>
        </div>
    )
}

export default Microtask3;
