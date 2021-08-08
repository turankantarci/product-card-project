import { useContext } from "react";
import AppContext from "../../../contexts/AppContext/AppContext";
import LikedStatus from "../../atoms/LikedStatus/LikedStatus";
import MyLikes from "../../atoms/MyLikes/MyLikes";

const ControlBar = () => {
    const {state} = useContext(AppContext);
    
    return (
        <div>
            <LikedStatus likeCount={state.likedProducts.length} />
            <MyLikes />
        </div>
    )
}

export default ControlBar;
