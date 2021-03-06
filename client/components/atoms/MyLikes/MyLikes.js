import { useState, useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../../../contexts/AppContext/AppContext';

const $MyLikes = styled.div`
    display: inline;
    font-size: 1.3rem;
    padding: .5rem;
    border: 1px solid #e2e2e2;
    border-radius: 0.5rem;
    cursor: pointer;
    margin-left: .5rem;

    ${({ active }) => !active && `
        :hover{
            background-color: #e6e6e6;
        }
    `}

    ${({ active }) => active && `
        background-color: #c0392b;
        border-color: #c0392b;
        color: #fff;
    `}
`

const MyLikes = () => {
    const [myLikesToggle, setMyLikesToggle] = useState(false);
    const {dispatch} = useContext(AppContext);

    const myLikesHandler = () => {
        if(myLikesToggle)  {
            dispatch({
                type: 'SHOW_LIKED_PRODUCTS',
                payload: false
            })
            setMyLikesToggle(false)
        } else {
            dispatch({
                type: 'SHOW_LIKED_PRODUCTS',
                payload: true
            })
            setMyLikesToggle(true)
        }
    }

    return (
        <$MyLikes active={myLikesToggle} onClick={myLikesHandler} data-testid="myLikes">
            Beğendiklerim
        </$MyLikes>
    )
}

export default MyLikes;
