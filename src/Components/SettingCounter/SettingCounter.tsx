import React, {ChangeEvent, useState} from "react";
import s from "./SettingCounter.module.css"


type CounterPropsType = {
    titleValue: string,
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    error: string,
    maxValue: number,
    maximumValue: () => void,
    startValue: number,
    onChangeHandlerMinValue: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const SettingCounter = (props: CounterPropsType) => {

    return (
        <div className={"settings-counter-blocks"}>
            <div className={"settings-counter-block"}>
                <div className={s.title}>{props.titleValue}</div>
                <div className="MaxValue">
                    <div className={s.inputTitle}>Max Value</div>
                    <input className={props.maxValue <= 0 && s.error || s.success} type='number' value={props.maxValue}
                           onChange={props.onChangeHandler}/>
                </div>
                <div>
                </div>
                <div className={"settings-counter-block"}>
                    <div className={s.inputTitle}>Start Value</div>
                    <input className={props.startValue <= 0 && s.error || s.success} type='number'
                           value={props.startValue} onChange={props.onChangeHandlerMinValue}/>
                    </div>
                    <div className={s.setValue}>
                        <button onClick={() => props.maximumValue()}>Set</button>
                    </div>
            </div>

        </div>
    )
}