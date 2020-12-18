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
        <div className={"counter-blocks"}>
            <div className={"counter-blocks_block"}>
                <div className={s.counter}>
                    <div className={s.title}>{props.titleValue}</div>
                    <span>{(props.startValue < 0 || props.maxValue < 0 ? props.error : props.Count) || (props.startValue > props.maxValue ? props.error : props.Count)}</span>
                </div>
            </div>
            <div className={"counter-blocks_block"}>
                <div className={s.buttonsBlocks}>
                    <div className={s.buttonsBlock}>
                        <button disabled={props.Count === props.maxValue}
                                className={props.Count === props.maxValue ? s.error : ""} onClick={Inc}>Inc
                        </button>
                    </div>
                    <div className={s.buttonsBlock}>
                        <button disabled={props.Count === 0} onClick={Rst}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}