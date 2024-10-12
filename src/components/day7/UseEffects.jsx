
import { useEffect,useState } from "react";
function UseEffects(){
const [count,setCount]=useState(0);
const [colors,setColors]=useState("green");
useEffect(()=>{
    document.title= `Count: ${count},${colors}`;
},[count,colors]);
function addCount(){
    setCount(c=>c+1);
}
function subtractCount(){
    setCount(c=>c-1);
}

function changeColor(){
    setColors(c=> c==="green"? "red":"green")
}
return(<>
<p style={{color:colors}}>count:{count}</p>
<button onClick={addCount}>Add</button>
<button onClick={subtractCount}>Sbtract</button>
<button onClick={changeColor}>Color Change</button>
</>)
}
export default UseEffects