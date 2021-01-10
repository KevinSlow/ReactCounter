import React, {ChangeEvent, useState} from "react";
import {ComponentsContainer} from "../ComponentsContainer/ComponentsContainer";
import s from "./SettingsCounterCountainer.module.css";
import {SettingCounter} from "../../Modules/SettingCounter/SettingCounter";
import {Counter} from "../../Modules/Counter/Counter";


export const SettingCounterContainer = ({...restProps}: any) => {
    console.log(restProps)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0);
    const [error, setError] = useState<string>("")

    const [startValueRender, setStartValueRender] = useState<number>(0)
    const [maxValueRender, setMaxValueRender] = useState<number>(0)



    function Reset() {
        restProps.setCount(startValueRender);
    }

    function maximumValue() {
        if (startValue > maxValue) {
            return setError("The value cannot be higher than max value")
        } else {
            return restProps.setCount;
        }
    }

    const setButtonHandler = () => {
        if (!error) {
            setStartValue(startValue)
            setMaxValue(maxValue)
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
        check(startValue, e.currentTarget.valueAsNumber)
    }


    return (
        <>
            <div className={s.counterContainer}>
                <SettingCounter
                    setButtonHandler={setButtonHandler}
                    startValueRender={startValueRender}
                    setStartValueRender={setStartValueRender}
                    maxValueRender={maxValueRender}
                    setMaxValueRender={setMaxValueRender}
                    error={error}
                    onChangeHandler={changeMaxValueRender}
                    onChangeHandlerMinValue={changeStartValueRender}
                    maximumValue={maximumValue}
                    startValue={restProps.startValue}
                    maxValue={restProps.maxValue}
                    titleValue={"Settings"}
                />
                <Counter
                    startValueRender={startValueRender}
                    setStartValueRender={setStartValueRender}
                    maxValueRender={maxValueRender}
                    setMaxValueRender={setMaxValueRender}
                    Increment={restProps.setCount}
                    Reset={Reset}
                    maxValue={restProps.maxValue}
                    error={error}
                    startValue={restProps.startValue}
                    titleValue={"Counter"}
                    Count={restProps.counter}
                />
            </div>
        </>
    )
}