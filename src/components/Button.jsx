function Button(){
const handlClik3 = (e)=>e.target.textContent = "well done" ;


    //let i =0;
    //const handlerClick =() => alert("Hello! I am an alert box!!");
    /*const handlerClick2 = (name) => 
       {
          if (i<3){
            i++;
            console.log(`${name} you clicked me ${i}times`);
          }
        else{
            console.log(`${name} stop clicking OMG`);
        }
       }
        */
    return (
  <button onClick={(e)=> handlClik3(e)}>Log in </button>  
)
}
// onClick={()=>fctname(parametre) on utiliste empty fct call pour etre sure que la fct atn3yto liha ghir une fois n diro click This ensures that handlerClick2 is only called when the button is clicked, not immediately during rendering.







export default Button