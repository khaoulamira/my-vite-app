function List (){
    const actors =[
        "lee jung suk",
       "park jae hoon",
        "kim san il",
       "ahn bo hyun",
         ];
    //adding {} to array means that s an object not an normal value
    const drama =[
   {id:1,name:"lee jung suk",drama:"two worlds",award:20}
   ,{id:2,name:"park jae hoon",drama:"radio romance",award:8},
   {id:3,name:"lee joon ho",drama:"red sleeve",award:5},
   {id:4,name:"kim san il",drama:"secret garden",award:13},
   {id:5,name:"ahn bo hyun",drama:"my name",award:15},
    ];
    //trier numerique de 1 -...:
    //fruits.sort((a,b)=> a.calorries-b.callories);
    //trie numerique inverser:
    // fruits.sort((a,b)=>b.callories-a.callories);
    //drama.sort((a,b)=> a.name.localeCompare(b.name)); avec ordre alpha de A-Z
    //trie de A-Z
drama.sort((a,b)=> b.name.localeCompare(a.name));
//trier drama liste avec ordre alphab de Z a A but just with names in table drama
    actors.sort();
    //sort trie automatically a table with order A-Z
    const lisItems = actors.map(actor =>  <li>{actor}</li>);
   //map mean for each actor from actors list do an li with the cariable after => can be a or b or actor or x as i want 
  
   const  lowNumbAward=drama.filter(drm =>drm.award>10);
    //filter object with a sertain creteria c est d afficher juste les award>10
    //dans map demplacer drama avec   lowNumbAward:
  const listDrama = lowNumbAward.map(dramas => <li key={dramas.id}>
     {dramas.name} his drama is: &nbsp;
     <b> {dramas.drama}</b></li>) ;
/** const listDrama = drama.map(dramas => <li key={drama.id}>
     {dramas.name} his drama is: &nbsp;
     <b> {dramas.drama}</b></li>) ;
 */
     List.defaultProps={
        categoy:"No Category",
        items:[],
    }
return(
<>
    <ol>
        {lisItems}
    </ol>
    <ul> {listDrama}</ul>
</>
)

} 
export default List;