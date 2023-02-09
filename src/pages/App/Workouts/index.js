import { useState, useEffect } from "react";

import useWorkouts from "../../../hooks/api/useWorkouts";

export default function Workouts() {
    const { workouts } = useWorkouts();

    return (
        <>
        { workouts ? (
            <RenderWorkouts workouts={workouts}/>
        ) : (
            'Loading...'
            )
        }
        </>
    )
}

function RenderWorkouts(props) {
    const { workouts } = props;

    return (
        <>
            {workouts[0] ? (<div>
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