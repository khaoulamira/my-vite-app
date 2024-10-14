//import { useEffect, useState } from "react"

import { useEffect,useState } from "react";

function DigitalClock(){
const [time,setTime]=useState(new Date());
useEffect(()=>{
    const intervalId=setInterval(()=>{setTime(new Date())},1000 )
return()=>{
clearInterval(intervalId);
}
},[]);
function formatTime(){
    let hours=time.getHours();
    let minutes=time.getMinutes();
    let seconds =time.getSeconds();
    const meridiem = hours >=12 ? "PM" :"AM"
         hours=hours%12 ||12  //||12 in case of 12%12=0 but we neet to dispay 12     }
    return`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}: ${meridiem} `;

} 
//if one digit there is no zero before:
function padZero(number){
return (number<10 ? "0":"" ) +number;
}
    return(<>
    <div className="div clock-body">
        <div className="clock-container">
           <div className="clock">
            <span>{formatTime()}</span>
           </div> 
        </div>
        </div>
    </>)
}
export default DigitalClock