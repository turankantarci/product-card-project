import styled from 'styled-components';
import Image from 'next/image';

const $LikedStatus = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    padding: .5rem;
    border: 1px solid #e2e2e2;
    border-radius: 0.5rem;
    user-select: none;

    > span {
        margin-left: .5rem;
    }
`

const LikedStatus = ({ likeCount }) => {
    return (
        <$LikedStatus>
            <Image src={'/assets/images/heart-fill.svg'} width="18" height="18" />
            <span>{`${likeCount} ürün`}</span>
        </$LikedStatus>
    )
}

export default LikedStatus;
