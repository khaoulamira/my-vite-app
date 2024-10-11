function ProfilePic(){
    const imgUrl ='./src/assets/sanji1.jpg';
// mthd 1 const handlClik4 = () => console.log("you clicked on img");
const handlClik4=(e) => e.target.style.display="none";
return(
<>

    <img onClick={(e)=> {handlClik4(e)}} src={imgUrl}></img>
</>
)
}
//mtd 1 return <img onClick={handlClik4}src={imgUrl}></img>
export default ProfilePic