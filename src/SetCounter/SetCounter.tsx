import React, {ChangeEvent, useState} from "react"
import s from "./SetCounter.module.css"


type setCounterValueType = {
    error: boolean
    setError: (error: boolean) => void
    startCountValue: number
    maxCountValue: number
    setStartCountValue: (startCountValue: number) => void
    setMaxCountValue: (maxCountValue: number) => void
    setStateCount: () => void
    // setUseCountValue: ()
}


function SetCounter(props: setCounterValueType) {
    const {
        error,
        setError,
        startCountValue,
        maxCountValue,
        setStartCountValue,
        setMaxCountValue,
        setStateCount
    } = props

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newStartValue = parseInt(e.currentTarget.value, 10)

        if (newStartValue === maxCountValue || newStartValue > maxCountValue || newStartValue < 0) {
            setError(true)
        } else {
            setError(false)
        }

        setStartCountValue(newStartValue)
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxCountValue = parseInt(e.currentTarget.value, 10)
        if (newMaxCountValue === startCountValue || newMaxCountValue < startCountValue || newMaxCountValue < 0) {
            setError(true)
        } else {
            setError(false)
        }
        setMaxCountValue(newMaxCountValue)
    }


    return (
        <div className={s.box}>

            <div className={s.valueBlock}>
                <div>
                    <span>max value: </span>
                    <input type='number' className={props.error ? `${s.error}` : ""} value={props.maxCountValue}
                           onChange={(e) => onChangeMaxValue(e)}/>
                </div>

                <div>
                    <span>start value:</span>
                    <input type='number' className={props.error ? `${s.error}` : ""} value={props.startCountValue}
                           onChange={(e) => onChangeStartValue(e)}/>
                </div>
            </div>


            <div>
                <button disabled={props.error} onClick={setStateCount} className={s.button}>set</button>
            </div>
        </div>


    )

}

export default SetCounter