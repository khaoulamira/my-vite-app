import {useState} from "react"
function ColorPicker(){
const [color,setColor]=useState("#FFFFFF")

function handleColorChange(eve){
    setColor(eve.target.value);
}
return(
    <>
     <div className="color-picker-container">
          <h1>Color Picker</h1> 
          <div className="color-display"
            style={{
            backgroundColor: color,
            height: "100px",
            width: "100px",
            border: "1px solid black",
            
          }}> </div>
           
          <p>selected Color : {color}</p>
          <label>Select a Color</label>
          <input type="color" value={color} onChange={handleColorChange}/>
       
     </div>
       
    </>)

}
export default ColorPicker