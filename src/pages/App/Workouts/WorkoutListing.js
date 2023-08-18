import styled from "styled-components";
import { useState } from "react";

import PopUp from "../../../components/PopUp/PopUp";
import DeleteWorkout from "../../../components/PopUp/DeleteWorkout";

import { RiDeleteBin5Line } from "react-icons/ri"

export default function WorkoutListing({children, ...props}) {
    const [deleting, setDeleting] = useState(false)
    const [display, setDisplay] = useState('flex')

    return(
        <>
            <Container display={display} {...props} onClick={() => console.log('item')}>
                <Wrapper>
                    <Content>
                        {children}
                    </Content>
                    <Delete onClick={() => setDeleting(true)}/>
                </Wrapper>
            </Container>
            <PopUp active={deleting}>
                <DeleteWorkout id={props.workout.id} name={props.workout.name} setDisplay={setDisplay} setDeleting={setDeleting} />
            </PopUp>
        </>
    )
}

const Container = styled.div`
    height: 6rem;
    width: 100%;
    border-top: 1px solid #1b1d1f25;
    border-bottom: 1px solid #1b1d1f25;
    display: ${(props) => (props.display)};
    align-items: center;
    cursor: pointer;

    :hover{
        background-color: #00000005;
    }
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 5%;
    overflow: hidden;
`

const Content = styled.div`
    overflow: hidden;
    max-width: 75%;

    p {
        line-height: 1.5rem;
    }
`

const Delete = styled(RiDeleteBin5Line)`
    font-size: 1.2rem;
    cursor: pointer;

    :hover {
        color: red;
    }
`