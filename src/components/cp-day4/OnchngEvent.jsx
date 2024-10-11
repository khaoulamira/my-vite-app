import {useState} from "react"
function OnchngEvent(){
const [name,setName]=useState("none");
const [qte,setQte]=useState(0);
const [commnt,setComent]=useState("");
const [payment,setPayment]=useState();
const [shipping,setShipping]=useState("Delivery");
/*function handleNameChange(e){
    setName(e.target.value);
}*/
const  handleNameChange =(e)=>{
    setName(e.target.value);
}
function handlerQteChnge (event){
    setQte(event.target.value);
}
function hadlerCommentChng(e){
    setComent(e.target.value);
}
const handleCheckPayments=(event)=>{
    setPayment(event.target.value);
  }
const handlerShippingMthd = (ev)=> {
    setShipping(ev.target.value);
}
    return(
        <>
            <div>
                <input value={name} onChange={handleNameChange}/>
                 <p>NAme:{name}</p>
            </div>
            <div>
                <input type="number" value={qte} onChange={handlerQteChnge}/>
                <p>The quantity is : {qte}</p>
            </div>
            <div>
                <textarea placeholder="Enter Dilevery instructions please!" value={commnt} onChange={hadlerCommentChng}/>
                <p>{name} Comment: {commnt} </p>
            </div>
            <div>
                <select value={payment} onChange={handleCheckPayments}>
                    <option value="">Select an option</option>
                    <option value="visa">Visa</option>
                    <option value="master-card">MasterCard</option>
                    <option value="giftCard">GiftCard</option>
                </select>
                <p>payment:{payment}</p> 
            </div>
            <div>
              <label>
              <input type="radio" value="Pick Up"
                checked={shipping=== "Pick Up"} onChange={handlerShippingMthd}
              />
              Pick Up
              </label>  
            <label> <br/>
            <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handlerShippingMthd}/>
            Delivery
            </label>
            <p> Shipping: {shipping}</p>
            </div>

        </>
    )
}
export default OnchngEvent
//<p>payment:{payment}</p> : display the value of the selected option 