import React, {ChangeEvent, useState} from "react";
import {ComponentsContainer} from "../ComponentsContainer/ComponentsContainer";
import s from "./SettingsCounterCountainer.module.css";
import {Counter} from "../../Modules/Counter/Counter";
import {MaxValueRenderAC, StartValueRenderAC} from "../../redux/settingCounterReducer";
import { connect } from "react-redux";
import { SettingCounter } from "../../Modules/SettingCounter/SettingCounter";


export const SettingCounterContainer = ({...props}: any) => {
    console.log(props)
    const [startValue, setStartValue] = useState<number>(props.startValue)
    const [maxValue, setMaxValue] = useState<number>(props.maxValue);
    const [startValueRender, setStartValueRender] = useState<number>(props.startValue)
    const [maxValueRender, setMaxValueRender] = useState<number>(props.maxValue)



    function maximumValue() {
        if (startValue > maxValue) {
            return props.setError("The value cannot be higher than max value")
        } else {
            return props.setCount;
        }
    }

    const setButtonHandler = () => {
        if (!props.error) {
            props.setStartValue(startValue)
            props.setMaxValue(maxValue)
            props.reset()
        }
    }

    const check = (begin: number, end: number) => {
        if (begin >= end) {
            props.setError("start Value >= max Value")
        } else if (begin && end < 0) {
            props.setError(" max Value < 0")
        } else if (begin < 0) {
            props.setError(" start Value < 0")
        } else {
            props.setError("")
        }
    }
    const changeStartValueRender = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.valueAsNumber)
        check(e.currentTarget.valueAsNumber, props.maxValue)
    }
    const changeMaxValueRender = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.valueAsNumber)
        check(props.startValue, e.currentTarget.valueAsNumber)
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
                    error={props.error}
                    onChangeHandler={changeMaxValueRender}
                    onChangeHandlerMinValue={changeStartValueRender}
                    maximumValue={maximumValue}
                    startValue={startValue}
                    maxValue={maxValue}
                    titleValue={"Settings"}
                />
                <Counter
                    startValueRender={startValueRender}
                    setStartValueRender={props.setStartValueRender}
                    maxValueRender={maxValueRender}
                    setMaxValueRender={props.setMaxValueRender}
                    Increment={props.setCount}
                    Reset={props.reset}
                    maxValue={maxValue}
                    error={props.error}
                    startValue={startValue}
                    titleValue={"Counter"}
                    counter={props.counter}
                />
            </div>
        </>
    )
}

