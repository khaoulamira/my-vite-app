import UseCtxComponentD from "./UseCtxComponentD"

// import { useContext } from "react"
function UseCtxComponentC(props) {
    
    
return(<>
    <div className="box-cpt"><h1>Component:C</h1>
    <UseCtxComponentD user= {props.user}/>
    </div>
        </>) }
export default UseCtxComponentC