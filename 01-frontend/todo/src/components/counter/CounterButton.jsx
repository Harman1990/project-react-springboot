
import './Counter.css'

import {PropTypes} from 'prop-types'



export default function CounterButton({by,incrementMainCounterFunction,decrementMainCounterFunction}){

    

    // function incrementCounterFunction(){

    //         setCount(count+by)
    //         incrementMainCounterFunction(by)

    // }

    // function decrementCounterFunction(){

    //     setCount(count-by)
    //     decrementMainCounterFunction(by)

    // }

    return (

        <div className="Counter">
           
            <div>
                <button className="counterButton" onClick={() => incrementMainCounterFunction(by)}>+{by}</button>
                <button className="counterButton" onClick={()=>decrementMainCounterFunction(by)}>-{by}</button>
            </div>
            


        </div>

    )

}

CounterButton.propTypes = {
    by: PropTypes.number
}