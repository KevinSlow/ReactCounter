import React from "react";
import s from "../../Modules/SettingCounter/SettingCounter.module.css";

export function StartValue(props: { startValue: number, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    return <div className={"settings-counter-block"}>
        <div className={s.inputTitle}>Start Value</div>
        <input  className={props.startValue < 0 && s.error || s.success} type='number'
               value={props.startValue} onChange={props.onChange}
        />
    </div>;
}