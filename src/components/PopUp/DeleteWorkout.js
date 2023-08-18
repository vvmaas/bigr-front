import styled from "styled-components"

import useDeleteWorkout from "../../hooks/api/workout/useDeleteWorkout"

import Button from "../Button"

export default function DeleteWorkout({id, name, setDisplay, setDeleting}) {
    const { deleteWorkoutAct } = useDeleteWorkout();

    async function deleteWorkout() {
        await deleteWorkoutAct(id);

        setDisplay('none');
        setDeleting(false);
    }

    return (
        <Container>
            <p>Are you sure you want to delete workout <span>{name}</span>?</p>
            <Buttons>
                <Button onClick={() => setDeleting(false)}>
                    Cancel
                </Button>
                <Button onClick={() => deleteWorkout()}>
                    Delete
                </Button>
            </Buttons>
        </Container>
    )
}

const Container = styled.div`
    border-radius: inherit;
    padding: 25px;
    width: 100%;
    max-width: 700px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: end;
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