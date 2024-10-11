import {useState} from "react"
function UpdaterFunction(){
 const [count,setCount]=useState(0);

 const increment =()=>{
    //the updaterfunction based on the previous state not of the current state
    //it s common that we use the first letter of the statefull var for the updater var fct
        setCount(c=>c+1);
        setCount(c=>c+1);
        //le contenue de c change et on l utilise comme nouvelle var chaque fois 
    }

    const decrement =()=> {
    setCount(c=>c-1);
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
export default UpdaterFunction