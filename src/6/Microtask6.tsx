import React, {useState} from 'react';
import {FullInput} from "./Components/FullInput";
import {Input} from "./Components/Input";
import {Button} from "./Components/Button";

function Microtask6() {

    // Full input

    let [message1, setMessage1] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    const addMessage1 = (title: string) => {
        let newMessage = [{message: title}, ...message1]
        setMessage1(newMessage)
    }

    // input + button

    let [message2, setMessage2] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    let [title, setTitle] = useState('')

    const addMessage2 = () => {
        let newMessage = [{message: title}, ...message2]
        setMessage2(newMessage)
        setTitle('')
    }

    return (
        <div>

            {/*full input*/}

            <div>
                <FullInput addMessage={addMessage1}/>
                {message1.map((el: { message: string }, index: number) => {
                    return (
                        <div key={index}>{el.message}</div>
                    )
                })}
            </div>

            {/*input + button*/}

            <div>
                <Input
                    title={title}
                    setTitle={setTitle}/>
                <Button
                    name={'+'}
                    callBack={addMessage2}
                />
                {message2.map((el: { message: string }, index: number) => {
                    return (
                        <div key={index}>{el.message}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default Microtask6;
