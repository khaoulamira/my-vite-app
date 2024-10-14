import { useState,useEffect } from "react"
function UseEffectheightwidth(){
const [height,setHeight]=useState(window.innerHeight);
const [width,setWidth]=useState(window.innerWidth);
useEffect(()=>{window.addEventListener("resize",handleResize);
    console.log("event Listener added");
  //if no dependencies either befor the next re render or when the components anmounts
  //when we done with the component free up any ressources
    return()=>{
    window.removeEventListener("resize",handleResize);
  console.log("enevt listener Removed")}
},[]);


function handleResize(){
    //adding a listener : window.addEventListener(event,function);
   
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
}
return(<>
<p>the height is {height}px and the width is {width}</p>
</>)
}export default UseEffectheightwidth