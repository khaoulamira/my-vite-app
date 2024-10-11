import { element } from "prop-types";
import { useState } from "react"
function ArrayState(){
   
 const [foods,setFoods]=useState(["Apple","Ananas","Strawbery"]);

function handlerAddFood(){
    const newFood = document.getElementById("food-input").value;
    document.getElementById("food-input").value="";
    setFoods(f=>[...f,newFood]);
}
function handlerRemovFood(index){
   setFoods(foods.filter((_, idx) => idx!==index) );
}

 return(<>
<div>
<h2>Liste of food:</h2>
<ul>
{foods.map((food,index)=> <li key={index} onClick={()=>handlerRemovFood(index)}
 >{food}</li>)}
</ul>
<input type="text" id="food-input" placeholder="inter food name" />
<button onClick={handlerAddFood}>Add Food</button>
</div>


 </>)
}
export default ArrayState