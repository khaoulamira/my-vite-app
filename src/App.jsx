

//import News from './components/News.j
import Button from './components/Button';
import Counter from './components/cp-day4/Counter';
import MyCpntUsestate from './components/cp-day4/MyCpntUsestate';
import OnchngEvent from './components/cp-day4/OnchngEvent';
import ColorPicker from './components/day5/ColorPicker';
import UpdateObject from './components/day5/UpdateObject';
import UpdaterFunction from './components/day5/UpdaterFunctiom';
import ArrayOfOject from './components/day6/ArrayOfObjects';
import ArrayState from './components/day6/ArrayStat';
import Fruits from './components/Fruits';
import List from './components/list';
import Listdistructering from './components/listdistructerng';
import ProfilePic from './components/ProfilePic';
import Student from './components/Student';
import UserGreeting from './components/userGreeting';

function App() {
  // Déclare le tableau des fruits ici
  const fruitList = ['strawberry', 'lemon', 'kiwi', 'mango'];
  const dramati =[
    {id:1,name:"lee jung suk",drama:"two worlds",award:20}
    ,{id:2,name:"park jae hoon",drama:"radio romance",award:8},
    {id:3,name:"lee joon ho",drama:"red sleeve",award:5},
    {id:4,name:"kim san il",drama:"secret garden",award:13},
    {id:5,name:"ahn bo hyun",drama:"my name",award:15},
     ];
     const momatilat =[
      {id:6,name:"kang so ra",drama:"two worlds",award:20}
      ,{id:7,name:"park shin hay",drama:"radio romance",award:8},
      {id:8,name:"lee mi jae",drama:"red sleeve",award:5},
      {id:9,name:"kim so hyun",drama:"secret garden",award:13},
      {id:10,name:"ahn mi rae",drama:"my name",award:15},
       ];
  return (
    <>
    <div>
      <h1>Bienvenue dans notre fruiterie</h1>
      {/* Passe le tableau des fruits en prop au composant Fruits */}
  <Fruits fruitss={fruitList} /> 
    </div>
    <div>
    <Student name="John" age="2" isStudent ={true}  />
    <Student name="jannet" age={23} isStudent={false}/>
    <Student name="Estes" age={28} isStudent={true}/>
    <Student name="Aurora" age={32} isStudent={false}/>
    <Student name="Granger"/></div>
    <div>
    <UserGreeting isLoggedIn={true} userName="henry lee"/>
    <UserGreeting userName=" lee"/>
    </div>
    <List/>
    <div>
  {dramati.length>0 ? <Listdistructering items ={dramati} categoy="Drama-Action Awards " /> : null} 
  {momatilat.length>0 && <Listdistructering items={momatilat} categoy= "best Actress-Romantic-Drama Awards"/> }
    </div>
    <h2>liste de List</h2>
    <List/>
    <Button/>
    <ProfilePic/>
    <MyCpntUsestate/>
    <Counter/>
    <div> <OnchngEvent/></div>
   <ColorPicker/>
   <div>
    <UpdaterFunction/>
    <UpdateObject/>
   
   </div>
   <br/>
   <ArrayState/>
  
   <ArrayOfOject/>
    </>
    

  );

}
//using in listdistructering ? or && its same the && ila t79a9 condition lwl ok sinon dakchi li wrah mghydouzch 

export default App;


