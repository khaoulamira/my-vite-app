import { useState,useEffect, useRef } from "react"

function UseRefernce(){

// let [number,setNumber]=useState(0);
// useEffect(()=>{console.log("componentRender")
//for here we used useeffect witouht [] the component will render each time we pressed the buttion 
// that s why we will use useRef now  })

const number =useRef(0);
const inputRef=useRef(null);
const inputRef2=useRef(null);
const inputRef3=useRef(null);
//if the compenent re render :afficher console.log
useEffect(()=>{console.log("componentRender")

})
function handleClick1(){
    // setNumber(n => n+1);
    number.current=number.current+1;
    //or number.current++;
    console.log(number.current);
}
function handleClick2(){
inputRef.current.focus();
inputRef.current.style.backgroundColor ="#FB28Aa";
inputRef2.current.style.backgroundColor ="";
inputRef3.current.style.backgroundColor ="";
}
function handleClick3(){
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor ="#FB28";
    inputRef.current.style.backgroundColor ="";
    inputRef3.current.style.backgroundColor ="";
    }
    function handleClick4(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor ="#B2Fa";
        inputRef2.current.style.backgroundColor ="";
        inputRef.current.style.backgroundColor ="";
        }
    return(
    <>
<div>
<button onClick={handleClick1}>Click Here!</button>
<br/>
<input ref={inputRef}/>
<button onClick={handleClick2}>Click Here!</button>
<input ref={inputRef2}/>
<button onClick={handleClick3}>Click Here!</button>
<input ref={inputRef3}/>
<button onClick={handleClick4}>Click Here!</button>


</div>
    </>
)
}export default UseRefernce
//using the useState in the button change color to input program causes re render to the componet
//every time i clicked in the input but useRef render the component just once even i clicked on input