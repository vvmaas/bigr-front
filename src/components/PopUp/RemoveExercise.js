import styled from "styled-components"

import useDeleteWorkoutExercise from "../../hooks/api/workoutExercise/useDeleteWorkoutExercise";

import Button from "../Button"

export default function RemoveExercise({id, exerciseName, workoutName, setHasUpdate, setDeleting}) {
    const { deleteWorkoutExercise } = useDeleteWorkoutExercise()


    async function remove() {
        await deleteWorkoutExercise(id);

        setHasUpdate(true);
        setDeleting(false);
    }


    return (
        <Container>
            <p>Are you sure you want to remove <span>{exerciseName}</span> from workout <span>{workoutName}</span>?</p>
            <Buttons>
                <Button onClick={() => setDeleting(false)}>
                    Cancel
                </Button>
                <Button onClick={() => remove()}>
                    Remove
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