import React, {ChangeEvent, useState} from "react";
import {ComponentsContainer} from "../ComponentsContainer/ComponentsContainer";
import s from "./SettingsCounterCountainer.module.css";
import {Counter} from "../../Modules/Counter/Counter";
import { connect } from "react-redux";
import { SettingCounter } from "../../Modules/SettingCounter/SettingCounter";


export const SettingCounterContainer = ({...props}: any) => {
    console.log(props)
    // const [startValue, setStartValue] = useState<number>(props.startValue)
    // const [maxValue, setMaxValue] = useState<number>(props.maxValue);
    // const [startValueRender, setStartValueRender] = useState<number>(props.startValue)
    // const [maxValueRender, setMaxValueRender] = useState<number>(props.maxValue)
    //


    function maximumValue() {
        if (props.startValue > props.maxValue) {
            return props.setError("The value cannot be higher than max value")
        } else {
            return props.setCount;
        }
    }

    const setButtonHandler = () => {
        if (!props.error) {
            props.setStartValue(props.startValue)
            props.setMaxValue(props.maxValue)
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
        props.setStartValue(e.currentTarget.valueAsNumber)
        check(e.currentTarget.valueAsNumber, props.maxValue)
    }
    const changeMaxValueRender = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(e.currentTarget.valueAsNumber)
        check(props.startValue, e.currentTarget.valueAsNumber)
    }


    return (
        <>
            <div className={s.counterContainer}>
                <SettingCounter
                    setButtonHandler={setButtonHandler}
                    startValueRender={props.startValueRender}
                    setStartValueRender={props.setStartValueRender}
                    maxValueRender={props.maxValueRender}
                    setMaxValueRender={props.setMaxValueRender}
                    error={props.error}
                    onChangeHandler={changeMaxValueRender}
                    onChangeHandlerMinValue={changeStartValueRender}
                    maximumValue={maximumValue}
                    startValue={props.startValue}
                    maxValue={props.maxValue}
                    titleValue={"Settings"}
                />
                <Counter
                    startValueRender={props.startValueRender}
                    setStartValueRender={props.setStartValueRender}
                    maxValueRender={props.maxValueRender}
                    setMaxValueRender={props.setMaxValueRender}
                    Increment={props.setCount}
                    Reset={props.reset}
                    maxValue={props.maxValue}
                    error={props.error}
                    startValue={props.startValue}
                    titleValue={"Counter"}
                    counter={props.counter}
                />
            </div>
        </>
    )
}

