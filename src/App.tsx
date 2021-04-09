import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import s from "./wrapper.module.css"
import SetCounter from "./SetCounter/SetCounter";
import Counter from "./counter/Counter";

function App() {

    let [count, setCount] = useState<number>(0)
    let [startCountValue, setStartCountValue] = useState<number>(0)
    let [maxCountValue, setMaxCountValue] = useState<number>(1)
    let [useCountValue, setUseCountValue] = useState<number>()
    let [error, setError] = useState(false)

    const inc = () => {
        if (count !== maxCountValue) {
            setCount(count + 1)
        }
    }

    useEffect( () => {
        let startValueAsString = localStorage.getItem('start value')
        let maxValueAsString = localStorage.getItem('max value')

        if (startValueAsString) {
            let newStartValue = JSON.parse(startValueAsString)
            setStartCountValue(newStartValue)
        } if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxCountValue(newMaxValue)
        }
    }, [])

    useEffect( () => {
        localStorage.setItem('start value', JSON.stringify(startCountValue))
        localStorage.setItem('max value', JSON.stringify(maxCountValue))
    }, [startCountValue, maxCountValue])

    const resetCount = () => {
        setCount(startCountValue)
    }

    const setStateCount = () => {
        setCount(startCountValue)
    }

    return (
        <div className="App">

            <div className={s.wrapper}>
                <SetCounter
                    maxCountValue={maxCountValue}
                    startCountValue={startCountValue}
                    setStartCountValue={setStartCountValue}
                    setMaxCountValue={setMaxCountValue}
                    error={error}
                    setError={setError}
                    setStateCount={setStateCount}
                />

                <Counter
                    count={count}
                    resetCount={resetCount}
                    inc={inc}
                    startCountValue={startCountValue}
                    maxCountValue={maxCountValue}
                    error={error}
                />
            </div>

        </div>
    );
}

export default App;
