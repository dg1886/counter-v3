import React from "react"

import s from "./Counter.module.css"

type CounterPropsType = {
    count: number
    error: boolean
    resetCount: () => void
    inc: () => void
    startCountValue: number
    maxCountValue: number
}

function Counter(props: CounterPropsType) {

    let count = props.count >= props.maxCountValue

    return (
        <div className={s.coutBlock} >
            <div><span className={props.error ? `${s.display} ${s.error}` : ''}>{props.count} </span></div>

            <button
                className={s.buttons}
                onClick={props.inc}
                disabled={props.error}
            >inc
            </button>

            <button
                className={s.buttons}
                onClick={props.resetCount}
            >reset
            </button>

        </div>
    )
}

export default Counter