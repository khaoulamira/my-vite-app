import { useState,useEffect,useRef } from "react"
function Chrono (){
    const [isRunning,setIsRunning]=useState(false);
    const[timeElapsed,setTimeElapsed]=useState(0);
    const intervalIdRef=useRef(null);
    const startTimeRef=useRef(0);
useEffect(()=>{
if(isRunning){
   //create a place to move time forward so after every 10ms do set elapset time to new state  :
   //date now in ms - ellapsed time initially 0:
//in order to clean the interval we need to get acces by it s id and the id for each one is identified by current ReferenceInerval so  
   //intervalIdRef.current=...
//   intervalIdRef.current= setInterval(()=>{setTimeElapsed(Date ()-startTimeRef.current),10;}  )
    //-starttimeRef the time that i clicked start 
// Mistake here: you're calling setTimeElapsed immediately instead of using a function
      // This should use an arrow function to update state at intervals
      intervalIdRef.current = setInterval(() => {
        setTimeElapsed(Date.now() - startTimeRef.current); // Correct way to update elapsed time
      }, 10); 
}//clean up fct\
return()=>{
clearInterval(intervalIdRef.current);
}
},[isRunning]);


function start(){
    setIsRunning(true);
    startTimeRef.current = Date.now() - timeElapsed; 
}
function stop (){
    setIsRunning(false);


}
function reset(){
    setTimeElapsed(0);
    setIsRunning(false);


}
function formatTime(){
let hours=Math.floor(timeElapsed/(1000 * 60 * 60));
let minutes = Math.floor((timeElapsed / (1000 * 60)) % 60); //%60 give lba9i dl9issma 
let seconds=Math.floor(timeElapsed/(1000)%60);
let milliseconds=Math.floor((timeElapsed%1000)/10);//display all digits of millisec we use %1000 but to display just last 2digitd we /10

return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`

}

return(<>
<div className="stopwatch">
    <div className="display">{formatTime()}</div>
       <div className="controls">
           <button onClick={start} className="start-button">start</button>
           <button onClick={stop} className="stop-button">stop</button>
           <button onClick={reset} className="reset-button">reset</button>

       </div>


</div>

</>)
}
export default Chrono