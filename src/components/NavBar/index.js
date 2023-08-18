import styled from "styled-components";

import NavigationButton from "./NavigationButton";

export default function NavBar() {
    return (
        <Container>
            <NavigationButton value="user">
                <span> user </span>
            </NavigationButton>
            <NavigationButton value="workouts">
                <span> workouts </span>
            </NavigationButton>
        </Container>
    )
}

const Container = styled.div`
    width: 33%;
    position: fixed;
    top: 0;
    left: -50;
    display: flex;
    justify-content: space-between;
`