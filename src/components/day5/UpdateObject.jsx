import { useState } from "react"
function UpdateObject(){
    //object of car
    const [car,setCar]=useState({model:"G-class" ,
                                make:"Mercedes",
                                year:2024 });

function handleYearChange(e){
    setCar(c=>({...c,year:e.target.value}));

}
//using spred operator : ...X:like   setCar({...car,year:2025});
//it s like ...car:{model:"G-class" ,make:"Mercedes",year:2024,year:2025 } so we have 2 property year
//2 proprery year with the same name so we will use just the first and forget about the last
//java script don t allow dupplicate keys thats why we have to use spred operator

const handlMakeChange=(e)=>{
    setCar(c=>({...c,make:e.target.value}));
}
function handlModelChange(event){
    setCar(c=>({...c,model:event.target.value}));
}
    
    return(<>
<div>
    <p> your favorite car is : {car.year} {car.make} {car.model}</p>
    <input type="text" value={car.model} onChange={handlModelChange}/>
    <input type="text" value={car.make} onChange={handlMakeChange}/>
    <input type="number" value={car.year} onChange={handleYearChange}/>
</div>

    </>)
}
export default UpdateObject
