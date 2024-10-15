import { useContext } from "react";
import { UserNameContext } from "./UseCtxComponentA";
function UseCtxComponentD() {
    
  const user = useContext(UserNameContext); 
    return(<>
<div className="box-cpt"><h1>Component:D</h1>
<h2>{`Take care ${user}`} </h2>
</div>
    
    </>)
}
export default UseCtxComponentD