import React, {ChangeEvent, useState} from "react";
import {ComponentsContainer} from "../ComponentsContainer/ComponentsContainer";


export const SettingCounterContainer = () => {

    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0);
    const [error, setError] = useState<string>("")
    let [count, setCount] = useState(startValue);

    function Increment() {
        setError("")
        let inc = count + 1
        setCount(inc);
    }

    function Reset() {
        setCount(startValue);
    }
    function maximumValue() {
        if(startValue > maxValue){
            return setError("The value cannot be higher than max value")
        }else{
            return setCount(startValue);
        }
    }

    const check = (begin: number, end: number) => {
        if (begin >= end) {
            setError("start Value >= max Value")
        } else if (begin && end < 0) {
            setError(" max Value < 0")
        } else if (begin < 0) {
            setError(" start Value < 0")
        } else {
            setError("")
        }
    }
    const changeStartValueRender = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.valueAsNumber)
        check(e.currentTarget.valueAsNumber, maxValue)
    }
    const changeMaxValueRender = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.valueAsNumber)
        check(startValue,e.currentTarget.valueAsNumber)
    }



    return (
        <ComponentsContainer error={error}
                             onChangeHandler={changeMaxValueRender}
                             onChangeHandlerMinValue={changeStartValueRender}
                             maximumValue={maximumValue}
                             startValue={startValue} maxValue={maxValue}
                             increment={Increment}
                             reset={Reset}
                             count={count}
        />
    )
}