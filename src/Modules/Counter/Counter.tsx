import React, {ChangeEvent, useEffect, useState} from "react";
import s from "./Counter.module.css"


type CounterPropsType = {
    titleValue: string,
    Reset: () => void,
    Increment: () => void
    counter: number
    error: string
    maxValue: number
    startValue: number
    startValueRender: number
    setStartValueRender: (start: number) => void
    maxValueRender: number
    setMaxValueRender: (max: number) => void
}

export const Counter = ({...restProps}: CounterPropsType) => {

    const Rst = () => restProps.Reset()


    return (
        <div className={"counter-blocks"}>
            <div className={"counter-blocks_block"}>
                <div className={s.counter}>
                    <div className={s.title}>{restProps.titleValue}</div>
                    <span>{restProps.counter}</span>
                </div>
            </div>
            <div className={"counter-blocks_block"}>
                <div className={s.buttonsBlocks}>
                    <div className={s.buttonsBlock}>
                        <button disabled={restProps.counter === restProps.maxValue} className={restProps.counter === restProps.maxValue ? s.error : ""} onClick={restProps.Increment}>Inc
                        </button>
                    </div>
                    <div className={s.buttonsBlock}>
                        <button disabled={restProps.counter === 0} onClick={Rst}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}