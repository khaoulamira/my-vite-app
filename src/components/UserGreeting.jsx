import PropTypes from "prop-types";

function UserGreeting(props){
const welcomeMsg=<h2 className="welome-msg">welcome {props.userName}</h2>;
const loginPrompt =     <h2 className="welcome-prompt">Log in to move on </h2>;

return(props.isLoggedIn ? welcomeMsg :loginPrompt
) 

}
UserGreeting.proptypes={
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string,
}
UserGreeting.defaultProps={
isLoggedIn : false,
userName : "Guest"

}
export default UserGreeting