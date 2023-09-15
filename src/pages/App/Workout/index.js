import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import useWorkout from "../../../hooks/api/workout/useWorkout";
import useWorkoutExercises from "../../../hooks/api/workoutExercise/useWorkoutExercises";

import Button from "../../../components/Button"
import PopUp from "../../../components/PopUp/PopUp"
import RemoveExercise from "../../../components/PopUp/RemoveExercise"

export default function Workout(){
    const { id } = useParams();
    const { getWorkout, workout } = useWorkout();
    const [workoutData, setWorkoutData] = useState({});
    const { getWorkoutExercise, workoutExercises } = useWorkoutExercises();
    const [workoutExerciseData, setWorkoutExerciseData] = useState([]);
    const [deleting, setDeleting] = useState(false);
    const [hasUpdate, setHasUpdate] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        if(id !== undefined){
            if(workoutExercises && !hasUpdate) {
                setWorkoutExerciseData(workoutExercises)
            } else {
                getWorkoutExercise(id);
                setHasUpdate(false)
            }
    
            if(workout) {
                setWorkoutData(workout)
            } else {
                getWorkout(id);
            }
        }
    }, [workout, getWorkout, workoutExercises, getWorkoutExercise, hasUpdate, id])

    return (
        <Container>
            <ReturnButton hoverColor="#1b1d1f50" onClick={() => navigate(`/app/workouts`)}> return </ReturnButton>
            <Title>
                <p>workout</p>
                <h1>{workoutData.name}</h1>
            </Title>
            <Exercises>
                <Button onClick={() => navigate(`/app/workouts/${workoutData.id}/add-exercise`)}> add exercises </Button>

                {workoutExerciseData[0] ? (
                    <WorkoutExerciseList>
                        {workoutExercises?.map(workoutExercise => {
                            return (
                                <div key={workoutExercise.id}>
                                    <WorkoutExerciseListing><p>{workoutExercise.Exercise.name}</p> <button onClick={() => setDeleting(true)}>x</button></WorkoutExerciseListing>
                                    <PopUp active={deleting}>
                                        <RemoveExercise id={workoutExercise.id} exerciseName={workoutExercise.Exercise.name} workoutName={workoutData.name} setHasUpdate={setHasUpdate} deleting={deleting} setDeleting={setDeleting} />
                                    </PopUp>
                                </div>
                            )    
                        })}
                    </WorkoutExerciseList>
                    ) : (
                        <h2>
                            You haven't added exercises yet
                        </h2>
                    )
                }
            </Exercises>
        </Container>
    );
}

const Container = styled.div`
  height: fit-content;
  width: 100%;
  margin-top: -4rem;
`

const Title = styled.div`
    width: 100%;
    h1{
        font-weight: bold;
        font-size: 25px;
        margin-bottom: 20px;
    }
    p{
        font-weight: lighter;
    }
`

const ReturnButton = styled(Button)`
    background-color: #1b1d1f40;
    margin-bottom: 0px;
`

const WorkoutExerciseList = styled.div`
    margin-top: 20px;
`

const WorkoutExerciseListing = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        cursor: pointer;
    }
`

const Exercises = styled.div`

`