import React, {ChangeEvent, useState} from "react";
import s from "./Counter.module.css"



type CounterPropsType = {
    titleValue: string,
    Reset: () => void,
    Increment: (e: ChangeEvent<HTMLInputElement>) => void
    Count: number
    error: string
    maxValue: number
    startValue: number
}

export const Counter = (props: CounterPropsType) => {

    const Rst = () => {
        props.Reset()
    }
    const Inc = () => {
        // @ts-ignore
        props.Increment()
    }

    return (
        <div className={"CounterBody"}>
            <div className="Counter">
                <div>{props.titleValue}</div>
                <span>{(props.startValue < 0 || props.maxValue < 0 ? props.error : props.Count) || (props.startValue > props.maxValue ? props.error : props.Count)}</span>
            </div>
            <div className={"CounterBlocks"}>
                <div className={"CounterBlock"}>
                    <button disabled={props.Count === props.maxValue } className={props.Count === props.maxValue ? s.error : ""} onClick={Inc}>Inc</button>
            </div>
            <div className={"CounterBlock"}>
                <button disabled={props.Count === 0} onClick={Rst}>Reset</button>
            </div>
        </div>
</div>
)
}