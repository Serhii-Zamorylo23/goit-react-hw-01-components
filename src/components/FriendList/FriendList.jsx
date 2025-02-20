import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
const Friendlist=({friends})=>{
    return(
        <ul className="friend-list">
            {friends.map(({avatar,name,isOnline})=>{
                <FriendListItem avatar={avatar} name={name} isOnline={isOnline}/>
            })}
        </ul>
    )
}
Friendlist.propTypes={
    friends:PropTypes.array.isRequired
}
export default Friendlist