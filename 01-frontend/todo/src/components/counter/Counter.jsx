import { useState } from 'react'
import './Counter.css'

import CounterButton from './CounterButton';



export default function Counter(){

    const [count,setCount]=useState(0);

    function incrementMainCounterFunction(by){

        setCount(count+by)

    }

    function decrementMainCounterFunction(by){

        setCount(count-by)

    }

    function resetCounter(){

        setCount(0)

    }

    return (

        <>
            <span className="count">{count}</span>
            <CounterButton by={1} incrementMainCounterFunction={incrementMainCounterFunction} decrementMainCounterFunction={decrementMainCounterFunction}></CounterButton>
            <CounterButton by={2} incrementMainCounterFunction={incrementMainCounterFunction} decrementMainCounterFunction={decrementMainCounterFunction}></CounterButton>
            <CounterButton by={5} incrementMainCounterFunction={incrementMainCounterFunction} decrementMainCounterFunction={decrementMainCounterFunction}></CounterButton>
            <button className="resetButton" onClick={resetCounter}>Reset</button>
        </>
        

    )

}


// function CounterButton({by,incrementMainCounterFunction,decrementMainCounterFunction}){

//     const [count,setCount]=useState(0);

//     function incrementCounterFunction(){

//             setCount(count+by)
//             incrementMainCounterFunction(by)

//     }

//     function decrementCounterFunction(){

//         setCount(count-by)
//         decrementMainCounterFunction(by)

//     }

//     return (

//         <div className="Counter">
           
//             <div>
//                 <button className="counterButton" onClick={incrementCounterFunction}>+{by}</button>
//                 <button className="counterButton" onClick={decrementCounterFunction}>-{by}</button>
//             </div>
            


//         </div>

//     )

// }


// CounterButton.propTypes = {
//     by: PropTypes.number
// }

