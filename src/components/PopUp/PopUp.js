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
    z-index: 10;
    height: fit-content;
    width: 85%;
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
    bottom: 0%;
    right: 0%;
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: #63636351;
`