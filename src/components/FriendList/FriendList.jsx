import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
const Friendlist=({friends})=>{
    return(
        <ul className="friend-list">
             <FriendListItem avatar={friends.avatar} name={friends.name} isOnline={friends.isOnline}/>
        </ul>
    )
}
Friendlist.propTypes={
    friends:PropTypes.array.isRequired
}
export default Friendlist