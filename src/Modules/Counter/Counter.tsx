import React, {ChangeEvent, useEffect, useState} from "react";
import s from "./Counter.module.css"


type CounterPropsType = {
    titleValue: string,
    Reset: () => void,
    Increment: (e: ChangeEvent<HTMLInputElement>) => void
    Count: number
    error: string
    maxValue: number
    startValue: number
    startValueRender: number
    setStartValueRender: (start: number) => void
    maxValueRender: number
    setMaxValueRender: (max: number) => void
}

export const Counter = ({Count, Increment, Reset, maxValue, startValue, titleValue, error,startValueRender,setStartValueRender,maxValueRender,setMaxValueRender}: CounterPropsType) => {

    const Rst = () => Reset()

    return (
        <div className={"counter-blocks"}>
            <div className={"counter-blocks_block"}>
                <div className={s.counter}>
                    <div className={s.title}>{titleValue}</div>
                    <span>{(startValueRender < 0 || maxValue < 0 ? error : Count) || (startValueRender > maxValue ? error : Count) }</span>
                </div>
            </div>
            <div className={"counter-blocks_block"}>
                <div className={s.buttonsBlocks}>
                    <div className={s.buttonsBlock}>
                        <button disabled={Count === maxValue}
                                className={Count === maxValue ? s.error : ""} onClick={() => Increment}>Inc
                        </button>
                    </div>
                    <div className={s.buttonsBlock}>
                        <button disabled={Count === 0} onClick={Rst}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}