import styled from 'styled-components';

const $Title = styled.h2`
    margin: .6rem 0;
    padding: 0 .5rem;
`

const Title = ({ text }) => {
    return (
        <$Title>{text}</$Title>
    )
}

export default Title;
