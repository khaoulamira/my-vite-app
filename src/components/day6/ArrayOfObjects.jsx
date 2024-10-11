import { useState } from "react";
function ArrayOfOject (){
const [cars,setCars]=useState([]);
const [carYear,setCarYear]=useState(new Date().getFullYear());
const [carMake,setCarMake]=useState("");
const [carModel,setCarModel]=useState("");

function handelAddCar(){
const newCar= {year:carYear,
               model:carModel,
               make:carMake};
setCars(c=>[...c,newCar]);
setCarYear(new Date().getFullYear());
setCarModel("");
setCarMake("");



}
function handelRemoveCar(index){
setCars(c=>c.filter((_, ind)=>ind!==index));
}
function handelChangeYears(e){
    setCarYear(e.target.value);
}
 function handelMakeChange(e){
    setCarMake(e.target.value);
 }

 function handleModelsChange(e){
    setCarModel(e.target.value);
 }
return (<>
<br/>
<div>
<h2> List of an Array oF Object: </h2>
<ul>
{cars.map((ca,index)=><li onClick={()=>handelRemoveCar(index)} key={index}>{ca.year} {ca.make} {ca.model}</li>)}

</ul>
<input type="number" value={carYear} onChange={handelChangeYears}/><br/>
<input type="text" value={carMake} onChange={handelMakeChange} placeholder="maker of the car"/><br/>
<input type="text" value={carModel} onChange={handleModelsChange} placeholder="model of the car"/><br/>
<button onClick={handelAddCar}>Add Car</button>
</div>

</>)
}
export default ArrayOfOject