import styled from 'styled-components';

const $Container = styled.div`
    width: 100%;

    @media screen and (min-width: 1230px) {
        width: 1200px;
        margin: 0 auto;
    }
`

const Container = ({ children }) => {
    return (
        <$Container data-testid="container">
            {children}
        </$Container>
    )
}

export default Container;
