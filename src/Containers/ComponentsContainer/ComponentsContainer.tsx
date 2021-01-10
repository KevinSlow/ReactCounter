import React from "react";
import s from "../SettingCounter/SettingsCounterCountainer.module.css";
import {SettingCounter} from "../../Modules/SettingCounter/SettingCounter";
import {Counter} from "../../Modules/Counter/Counter";


export function ComponentsContainer(props: { setMaxValueRender:(max: number) => void,setButtonHandler: () => void, maxValueRender: number,setStartValueRender: (start: number) => void, startValueRender: number, error: string, onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void, onChangeHandlerMinValue: (e: React.ChangeEvent<HTMLInputElement>) => void, maximumValue: () => (void), startValue: number, maxValue: number, increment: () => void, reset: () => void, count: number }) {
    return <div className={s.counterContainer}>
    </div>;
}
