import React,{useState} from "react"
function Counter(){
    const [count,setCount]=useState(0);
    const increment =()=>{
        setCount(count+1);
    }
    const decrement =()=> {
    setCount(count-1);
    }
    const resetcnt =()=>{
        setCount(0);
    }
return(
   
        <div className="conter-container"><p className="count-display">this is a counter: {count}</p>
        <button className="btn-counter" onClick={increment}>Increment</button>
        <button className="btn-counter" onClick={decrement}>Decrement</button>
        <button className="btn-counter" onClick={resetcnt}>Reset</button>
        </div>
   

)
}
export default Counter