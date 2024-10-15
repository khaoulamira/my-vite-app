import { useState,createContext } from "react";
import UseCtxComponentB from "./UseCtxComponentB";
export const UserNameContext=createContext();


function UseCtxComponentA() {
   const [user,setUser]=useState("khaoula"); 
    return(<>
<div className="box-cpt"><h1>Component:A</h1>
<h2>{`Hello ${user}`}</h2>
<UserNameContext.Provider value ={user}>
<UseCtxComponentB />
</UserNameContext.Provider>





</div>

    </>)
}
export default UseCtxComponentA;