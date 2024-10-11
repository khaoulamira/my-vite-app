//import by distractering just what we need 
import  {useState} from "react";
//using useState fct we ll create a stateful variable and setter function to update this var
function MyCpntUsestate(){
    const [name,setName]=useState("anonym");
    const [age,setAge]=useState(0);
    const [isEmployed,setIsEmployed]=useState(false);
   

       const updateName = () =>{
      setName("khaouLa");  
      }
      const upgradeAge =()=>{
        setAge(age+1);
      }
      const toggleEmployedStatus =()=>{
        setIsEmployed(!isEmployed);
      }
      
    return(
        <>
            <div>
               <p> Name: {name} </p> 
               <button onClick={updateName}>Set Name</button>

            </div>
            <div>
                <p> Age: {age}</p>
                <button onClick={upgradeAge}>Update age</button>
            </div>
            <div>
                <p> Employed: {isEmployed? "Yes":"No"}</p>
                <button onClick={toggleEmployedStatus}>status</button>
            </div>
        </>

    )
}
export default MyCpntUsestate