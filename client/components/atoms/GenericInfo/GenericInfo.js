import styled from 'styled-components';

const $GenericInfo = styled.div`
    margin: 1rem 0;
    flex-basis: 100%;

    ${({ align }) => `text-align: ${align}`}
`

const GenericInfo = ({ text, align }) => {
    return (
        <$GenericInfo align={align}>
            {text}
        </$GenericInfo>
    )
}

export default GenericInfo
