import PropTypes from "prop-types"
function Student(props) {
  console.log(props)
    return(
<>
<div className="student">
  <p> le nom: {props.name}</p>
  <p> l age : {props.age}</p>
  <p> Student : {props.isStudent ? "yes" : "No"}</p>
</div>

</>

    )
  }
  Student.proptypes={
    name: PropTypes.string,
    age : PropTypes.number,
    isStudent : PropTypes.bool,
    }
    Student.defaultProps ={
      name: "Unkown",
      age: 0,
      isStudent : false,
    }
  
export default Student