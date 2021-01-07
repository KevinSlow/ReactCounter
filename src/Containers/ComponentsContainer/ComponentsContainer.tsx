import React from "react";
import s from "../SettingCounter/SettingsCounterCountainer.module.css";
import {SettingCounter} from "../../Modules/SettingCounter/SettingCounter";
import {Counter} from "../../Modules/Counter/Counter";
import {incrementAC} from "../../redux/counterReducer";
import {connect} from "react-redux";

export function ComponentsContainer(props: { setMaxValueRender:(max: number) => void,setButtonHandler: () => void, maxValueRender: number,setStartValueRender: (start: number) => void, startValueRender: number, error: string, onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void, onChangeHandlerMinValue: (e: React.ChangeEvent<HTMLInputElement>) => void, maximumValue: () => (void), startValue: number, maxValue: number, increment: () => void, reset: () => void, count: number }) {
    return <div className={s.counterContainer}>
        <SettingCounter
            setButtonHandler={props.setButtonHandler}
            startValueRender={props.startValueRender}
            setStartValueRender={props.setStartValueRender}
            maxValueRender={props.maxValueRender}
            setMaxValueRender={props.setMaxValueRender}
            error={props.error}
            onChangeHandler={props.onChangeHandler}
            onChangeHandlerMinValue={props.onChangeHandlerMinValue}
            maximumValue={props.maximumValue}
            startValue={props.startValue}
            maxValue={props.maxValue}
            titleValue={"Settings"}
        />
        <Counter
            startValueRender={props.startValueRender}
            setStartValueRender={props.setStartValueRender}
            maxValueRender={props.maxValueRender}
            setMaxValueRender={props.setMaxValueRender}
            Increment={props.increment}
            Reset={props.reset}
            maxValue={props.maxValue}
            error={props.error}
            startValue={props.startValue}
            titleValue={"Counter"}
            Count={props.count}
        />
    </div>;
}
