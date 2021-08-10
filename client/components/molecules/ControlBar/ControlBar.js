import { useContext } from "react";
import styled from 'styled-components';
import AppContext from "../../../contexts/AppContext/AppContext";
import LikedStatus from "../../atoms/LikedStatus/LikedStatus";
import MyLikes from "../../atoms/MyLikes/MyLikes";

const $ControlBar = styled.div`
    display: flex;
`

const ControlBar = () => {
    const {state} = useContext(AppContext);
    
    return (
        <$ControlBar>
            <LikedStatus likeCount={state.likedProducts.length} />
            <MyLikes />
        </$ControlBar>
    )
}

export default ControlBar;
