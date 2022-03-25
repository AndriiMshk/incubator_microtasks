import React, {useState} from 'react';
import {Button} from "./Button";

const money = [
    {banknots: 'Dollars', value: 100, number: ' a1234567890'},
    {banknots: 'Dollars', value: 50, number: ' z1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
    {banknots: 'Dollars', value: 100, number: ' e1234567890'},
    {banknots: 'Dollars', value: 50, number: ' c1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
    {banknots: 'Dollars', value: 50, number: ' x1234567890'},
    {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
]

export type ValutaType = 'ALL' | 'RUBLS' | 'Dollars'

function Microtask5() {

    const [valuta, setValuta] = useState<ValutaType>('ALL')

    let currentMoney = money

    if (valuta === 'RUBLS') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
    } else if (valuta === 'Dollars') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    } else  if (valuta === 'ALL') {
        let currentMoney = money
    }

    const filterMoney = (valuta: ValutaType) => {
        setValuta(valuta)
    }

    return (
        <>
            <Button money={currentMoney} onClick={filterMoney}/>
        </>
    )
}

export default Microtask5;
