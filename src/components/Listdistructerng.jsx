import PropTypes, { string } from "prop-types";
function Listdistructering(props){
    //recuperer la liste des drama from App()
    const itemList=props.items;
    const categoy=props.categoy;
    //prend item list et la trier par numero award du grand a petit

    const sortedListbyNumAward= itemList.sort((a,b)=> b.award-a.award);
    
    const listDramati = sortedListbyNumAward.map(dr => 
    <li key={dr.id}>{dr.name} : &nbsp;
    {dr.drama} he wins &nbsp; {dr.award} awards
    </li>)
    Listdistructering.PropTypes={
        categoy:string,
        items :PropTypes.arrayOf(PropTypes.shape({
            id:PropTypes.number,name:PropTypes.string,
            drama:PropTypes.string,award:PropTypes.number})
        )
    }
    Listdistructering.defaultProps={
        categoy:"No Category",
        items:[],
    }
    return(
<>
<h2>{categoy}</h2>
    <ol>{listDramati}</ol>
</>
    )
    
}
export default Listdistructering