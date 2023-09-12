import styled from "styled-components";
import { useState } from "react";

import PopUp from "../../../components/PopUp/PopUp";
import DeleteWorkout from "../../../components/PopUp/DeleteWorkout";

import { RiDeleteBin5Line } from "react-icons/ri"
import { useNavigate } from "react-router-dom";

export default function WorkoutListing({children, ...props}) {
    const [deleting, setDeleting] = useState(false)
    const [display, setDisplay] = useState('flex')
    const navigate = useNavigate()

    return(
        <>
            <Container display={display} {...props}>
                <Wrapper>
                    <Content onClick={() => navigate(`/app/workouts/${props.workout.id}`)}>
                        {children}
                    </Content>
                    <Delete onClick={() => setDeleting(true)}/>
                </Wrapper>
            </Container>
            <PopUp active={deleting}>
                <DeleteWorkout id={props.workout.id} name={props.workout.name} setDisplay={setDisplay} deleting={deleting} setDeleting={setDeleting} />
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
`

const Wrapper = styled.div`
    width: 100%;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
`

const Content = styled.div`
    overflow: hidden;
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 5%;
    cursor: pointer;

    p {
        line-height: 1.5rem;
    }

    :hover{
        background-color: #00000005;
    }
`

const Delete = styled(RiDeleteBin5Line)`
    font-size: 1.2rem;
    margin-right: 5%;
    cursor: pointer;

    :hover {
        color: red;
    }
`