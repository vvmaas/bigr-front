import styled from "styled-components";
import { useState } from "react";

import usePostWorkout from "../../../hooks/api/workout/usePostWorkout";

import WorkoutListing from "./WorkoutListing";

import Button from "../../../components/Button";
import Input from "../../../components/Form/Input";
import { Buttons, CancelButton } from "../User/AddWeight";


export default function RenderWorkouts(props) {
    const { workouts, setWorkoutsData, setHasUpdate } = props;
    const { postWorkoutAct, postWorkoutLoading } = usePostWorkout();

    const [create, setCreate] = useState(false);
    const [name, setName] = useState('')

    async function submit(event) {
        event.preventDefault();
    
        try {
          const body = {
            name,
          } 
          const newWorkout = await postWorkoutAct(body);
          newWorkout.name = body.name
          setWorkoutsData([newWorkout, ...workouts])
          setName('')
          setCreate(false);
          setHasUpdate(true);
        } catch (err) {
          alert("It was not possible to create workout")
        }
      }

    return (
        <Container>
            {
            create ? (
                <form onSubmit={submit}>
                    <div>
                        <h1>New workout</h1>
                        <Input 
                        placeholder="name" 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <Buttons>
                        <Button type="submit" color="primary" disabled={postWorkoutLoading}>
                            create
                        </Button>
                        <CancelButton hoverColor="#1b1d1f50" onClick={() => setCreate(false)}>
                            cancel
                        </CancelButton>
                    </Buttons>
                </form>
            )  : (
                <Button onClick={() => setCreate(true)}>
                    create new workout
                </Button>
                )
            }
            {workouts[0] ? (
            <WorkoutList>
                {workouts?.map(workout => {
                    return (
                            <WorkoutListing key={workout.id} workout={workout} setHasUpdate={props.setHasUpdate}><p>{workout.name}</p></WorkoutListing>
                    )    
                })}
            </WorkoutList>
            ) : (
                <h2>
                    You haven't created a workout yet
                </h2>
            )
        }
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        margin-top: 1.5rem;
        color: #1b1d1f99;
    }
`

const WorkoutList = styled.div`
    width: 150%;
    margin: 1.5rem 0;
`