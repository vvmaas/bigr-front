import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import useWorkout from "../../../hooks/api/workout/useWorkout";
import useWorkoutExercises from "../../../hooks/api/workoutExercise/useWorkoutExercises";

import Button from "../../../components/Button"

export default function Workout(){
    const { id } = useParams();
    const { getWorkout, workout } = useWorkout();
    const [workoutData, setWorkoutData] = useState({});
    const { getWorkoutExercise, workoutExercises } = useWorkoutExercises();
    const [workoutExerciseData, setWorkoutExerciseData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if(id !== undefined){
            if(workoutExercises) {
                setWorkoutExerciseData(workoutExercises)
            } else {
                getWorkoutExercise(id);
            }
    
            if(workout) {
                setWorkoutData(workout)
            } else {
                getWorkout(id);
            }
        }
    }, [workout, getWorkout, workoutExercises, getWorkoutExercise, id])

    return (
        <Container>
            <ReturnButton hoverColor="#1b1d1f50" onClick={() => navigate(`/app/workouts`)}> voltar </ReturnButton>
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
                                    <WorkoutExerciseListing key={workoutExercise.id}><p>{workoutExercise.name}</p></WorkoutExerciseListing>
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

`

const WorkoutExerciseListing = styled.div`

`

const Exercises = styled.div`

`