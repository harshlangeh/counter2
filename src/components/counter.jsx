import { useContext } from "react";
import { CounterContext } from "./context/counter";



const Counter = () => {

    const CounterStat = useContext(CounterContext)
    // console.log("=>",CounterStat)

    return (
        <div>
            <button onClick={() => CounterStat.setCount(CounterStat.count + 1)}>Plus 1</button>
            <button onClick={()=> CounterStat.setCount(CounterStat.count - 1)}>Minus 1</button>
        </div>
    );
}

export default Counter;