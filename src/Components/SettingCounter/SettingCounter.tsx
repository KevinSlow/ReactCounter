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

export const SettingCounter = (props:CounterPropsType) => {

    return(
        <div className={"CounterBody"}>
            <div>{props.titleValue}</div>
            <div className="MaxValue">
                <div>Max Value</div>
                <p>{props.onChangeHandler}</p>
                <input className={props.maxValue <= 0 && s.error || s.success} type='number' value={props.maxValue} onChange={props.onChangeHandler}/>
            </div>
          <div>
              <div>Start Value</div>
              <input className={props.startValue <= 0 && s.error || s.success} type='number' value={props.startValue} onChange={props.onChangeHandlerMinValue}/>
          </div>
            <div>
                <button onClick={()=>props.maximumValue()}>Set</button>
            </div>
        </div>
    )
}