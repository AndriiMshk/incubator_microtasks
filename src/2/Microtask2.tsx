import React from 'react';
import {NewComponent} from "./NewComponent";

function Microtask2() {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <div className="App">
            <NewComponent topCars={topCars}/>
        </div>
    );
}

export default Microtask2;
