import styled from "styled-components";

export default function AuthWrapper({children}) {
    return (
        <Container>
            <Wrapper>
                {children}
            </Wrapper>
        </Container>
    )
}

const Wrapper = styled.div`
    height: fit-content;
    margin: auto;
    display: flex;
    flex-direction: center;
    align-items: center;
    flex-direction: column;
`

const Container = styled.div`
    background-color: #f7f8f9;
    filter: opacity(0.84);
    height: 55vh;
    width: 35vw;
    border-radius: 8px;
    display: flex;
    flex-direction: center;
    align-items: center;
    flex-direction: column;
`