import React from "react";
import s from "../SettingCounter/SettingsCounterCountainer.module.css";
import {SettingCounter} from "../../Modules/SettingCounter/SettingCounter";
import {Counter} from "../../Modules/Counter/Counter";

export function ComponentsContainer(props: { error: string, onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void, onChangeHandlerMinValue: (e: React.ChangeEvent<HTMLInputElement>) => void, maximumValue: () => (void), startValue: number, maxValue: number, increment: () => void, reset: () => void, count: number }) {
    return <div className={s.counterContainer}>
        <SettingCounter
            error={props.error}
            onChangeHandler={props.onChangeHandler}
            onChangeHandlerMinValue={props.onChangeHandlerMinValue}
            maximumValue={props.maximumValue}
            startValue={props.startValue}
            maxValue={props.maxValue}
            titleValue={"Settings"}
        />
        <Counter
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