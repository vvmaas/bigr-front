import styled from "styled-components"

export default function PopUp({children, ...props}) {
    return (
        <Container {...props}>
            <Wrapper>
                {children}
            </Wrapper>
        </Container>
    )
}

const Wrapper = styled.div`
    z-index: 2;
    height: fit-content;
    width: 100%;
    max-width: 650px;
    background-color: white;
    border: 1px solid #CCCCCC;
    border-radius: 16px;
    display: flex;
    justify-content: center;

    @media(max-width: 700px){
        width: 95%;
    }
`

const Container = styled.div`
    display: ${(props) => (props.active ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    top: 0%;
    right: 0%;
    position: fixed;
    height: 80vh;
    width: 100%;
    background-color: #63636351;
`