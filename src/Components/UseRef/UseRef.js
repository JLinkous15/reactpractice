import { useRef, useState } from "react"

export const UseRef = () => {
    //useRef() is only needed when you need data to persist between renders. Do not use it to access particular 
    //values, that is the role of state in React. Keep thinking in a Reactful way!
    const [randomInput, setRandomInput] = useState('')
    const [seconds, setSeconds] = useState(0)
    const renders = useRef(0)
    const inputRef = useRef()
    const timerId = useRef()

    const handleChange = (e) => {
        setRandomInput(e.target.value)
        renders.current++
    }

    const focusOnInput = (e) => {
        e.preventDefault()
        inputRef.current.focus()
    }

    const startTimer = (e) => {
        e.preventDefault()
        timerId.current = setInterval(() => {
            renders.current++
            setSeconds(prev => prev + 1)
        }, 1000);
    }

    const stopTimer = (e) => {
        e.preventDefault()
        clearInterval(timerId.current)
        timerId.current = 0
    }

    const resetTimer = (e) => {
        e.preventDefault()
        stopTimer(e)
        if(seconds){
            renders.current++
            setSeconds(0)
        }
    }


    return <section className="useref-section">
        <form>
            <input 
            ref={inputRef}
            type="text"
            value={randomInput}
            onChange={handleChange}/>
            <p>{randomInput}</p>
            <p>{renders.current}</p>
            <button
            onClick={focusOnInput}>Focus</button>
        </form>

        <form>
            <input
            type="text"
            value={randomInput}
            onChange={handleChange}/>
            <br /><br />
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
            <br /><br />
            <>
                <p>Renders: {renders.current}</p>
                <p>Seconds: {seconds}</p>
            </>
        </form>
    </section>
}