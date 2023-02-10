import { useState, useEffect } from "react";

import useWorkouts from "../../../hooks/api/useWorkouts";
import usePostWorkout from "../../../hooks/api/usePostWorkout";

import Button from "../../../components/Button";
import Input from "../../../components/Form/Input";

export default function Workouts() {
    const { workouts } = useWorkouts();
    const [workoutsData, setWorkoutsData] = useState([]);

    useEffect(() => {
        if(workouts) {
            setWorkoutsData(workouts)
        }
    }, [workouts])

    return (
        <>
        { workouts ? (
            <RenderWorkouts workouts={workouts ? workoutsData : workouts} setWorkoutsData={setWorkoutsData}/>
        ) : (
            'Loading...'
            )
        }
        </>
    )
}

function RenderWorkouts(props) {
    const { workouts, setWorkoutsData } = props;
    const { postWorkoutAct, postWorkoutLoading } = usePostWorkout();

    const [create, setCreate] = useState(false);
    const [name, setName] = useState('')

    async function submit(event) {
        event.preventDefault();
    
        try {
          const body = {
            name,
          } 
          setWorkoutsData([...workouts, body])
          await postWorkoutAct(body);
          setName('')
          setCreate(false);
        } catch (err) {
          alert("It was not possible to create workout")
        }
      }

    return (
        <>
            {
            create ? (
                <form onSubmit={submit}>
                    <Input 
                    placeholder="name" 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}/>

                    <Button type="submit" color="primary" disabled={postWorkoutLoading}>
                        create
                    </Button>
                </form>
            )  : (
                <Button onClick={() => setCreate(true)}>
                    create new workout
                </Button>
                )
            }
            {workouts[0] ? (
            <div>
                {workouts?.map(workout => {
                    return (
                        <>
                            <h1>{workout.name}</h1>
                        </>
                    )    
                })}
            </div>
            ) : (
                'You have not created a workout yet'
            )
        }
        </>
    )
}