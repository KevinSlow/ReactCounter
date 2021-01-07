import React from "react";
import s from "../../Modules/SettingCounter/SettingCounter.module.css";

export function MaxValue(props: { maxValue: number, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    return <div className="MaxValue">
        <div className={s.inputTitle}>Max Value</div>
        <input className={props.maxValue < 0 && s.error || s.success} type='number' value={props.maxValue}
               onChange={props.onChange}
        />
    </div>;
}