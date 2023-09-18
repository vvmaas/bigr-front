import styled from "styled-components"
import { useEffect } from "react";

import useDeleteWorkout from "../../hooks/api/workout/useDeleteWorkout"

import Button from "../Button"
import { CancelButton } from "../../pages/App/User/AddWeight";

export default function DeleteWorkout({id, name, setHasUpdate, deleting, setDeleting}) {
    const { deleteWorkoutAct } = useDeleteWorkout();

    async function deleteWorkout() {
        await deleteWorkoutAct(id);

        setHasUpdate(true);
        setDeleting(false);
    }


    return (
        <Container>
            <p>Are you sure you want to delete workout <span>{name}</span>?</p>
            <Buttons>
                <CancelButton hoverColor="#1b1d1f50" onClick={() => setDeleting(false)}>
                    cancel
                </CancelButton>
                <Button onClick={() => deleteWorkout()}>
                    delete
                </Button>
            </Buttons>
        </Container>
    )
}

const Container = styled.div`
    border-radius: inherit;
    padding: 25px;
    width: 80%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    h1 {
        width: 100%;
    }

    @media(max-width: 700px){
        padding: 20px;
    }
`

const Buttons = styled.div`
    display: flex;
    margin-top: 25px;
    button {
        width: 110px;
        margin: 0 10px
    }

    @media(max-width: 700px){
        margin-top: 18px;

        button {
        width: 95px;
        margin: 0 9px
        }
    }
`