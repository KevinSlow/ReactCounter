import React, {ChangeEvent, useState} from "react";
import s from "./SettingsCounterCountainer.module.css"
import {SettingCounter} from "../../Components/SettingCounter/SettingCounter";
import {Counter} from "../../Components/Counter/Counter";


export const SettingCounterContainer = () => {

    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0);
    const [error, setError] = useState<string>("")
    let [count, setCount] = useState(startValue);

    function Increment() {
        setError("")
        let inc = count + 1
        setCount(inc);
    }

    function Reset() {
        setCount(startValue);
    }



    function maximumValue() {
        if(startValue > maxValue){
          return setError("The value cannot be higher than max value")
        }else{
            return setCount(startValue);
        }
    }

    const onChangeHandlerMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let tt = +e.currentTarget.value
        if(maxValue > tt || tt < 0) {
            setError("Invalid value")
            setMaxValue(tt);
        } else {
            setMaxValue(tt);
        }
    };

    const onChangeHandlerMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        let tt = +e.currentTarget.value
        if(startValue > 0  || tt < 0) {
            setError("Invalid value");
            setStartValue(tt);
        } else  {
            setStartValue(tt);
        }
    };


    return (
        <div className={s.counterContainer}>
            <SettingCounter
                error={error}
                onChangeHandler={onChangeHandlerMaxValue}
                onChangeHandlerMinValue={onChangeHandlerMinValue}
                maximumValue={maximumValue}
                startValue={startValue}
                maxValue={maxValue}
                titleValue={"Settings"}
            />
            <Counter
                Increment={Increment}
                Reset={Reset}
                maxValue={maxValue}
                error={error}
                startValue={startValue}
                titleValue={"Counter"}
                Count={count}
            />
        </div>
    )
}