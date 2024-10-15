import UseCtxComponentC from "./UseCtxComponentC";

// import { useContext } from "react"
function UseCtxComponentB(props) {
    
   return(<>
<div className="box-cpt">
<h1>Component:B</h1>
<UseCtxComponentC user={props.user}/>
</div>
    </>) }
export default UseCtxComponentB;