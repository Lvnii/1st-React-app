import { useState } from "react"

const Main = () => {
    const [number, updateNumber] = useState(0)
    // const [value, updateValue] = useState('Hello you number is 0')

    // const handleClick = () => {
    //     update(number + 1)
    //     // updateValue(`Hello you number is ${value + 1}`)
    // }

    // const decrease = () => {
    //     updateNumber(number - 1)
    // }

    // const reset = () => {
    //     updateNumber(0)
    // }

    const handleClick = (action) => {
        if (action === 'increase') {
            updateNumber(number + 1);
        } else if (action === 'decrease') {
            updateNumber(number - 1)
        } else {
            updateNumber(0)
        }
    }

    return (
        <main>
            <div className="counter-container">
                {/* <h2>{value}</h2> */}
                <div className="count-value">{number}</div>
                <div className="buttons">
                    <button onClick={() => {handleClick('increase')}}>increase by 1</button>
                    <button onClick={() => {handleClick('decrease')}}>decrease by 1</button>
                    <button onClick={() => {handleClick('reset')}}>reset</button>
                </div>
            </div>
        </main>
    )
}

export default Main;