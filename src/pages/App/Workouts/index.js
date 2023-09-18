import styled from "styled-components";
import { useState, useEffect } from "react";

import useWorkouts from "../../../hooks/api/workout/useWorkouts";
import RenderWorkouts from "./RenderWorkouts";

export default function Workouts() {
    const { workouts, getWorkouts } = useWorkouts();
    const [workoutsData, setWorkoutsData] = useState([]);
    const [hasUpdate, setHasUpdate] = useState(false);

    useEffect(() => {
        if(workouts && !hasUpdate) {
            setWorkoutsData(workouts)
        } else {
            getWorkouts();
            setHasUpdate(false);
        }
    }, [workouts, hasUpdate, getWorkouts])

    return (
        <Wrapper>
        { workouts ? (
            <RenderWorkouts workouts={workouts ? workoutsData : workouts} setHasUpdate={setHasUpdate} setWorkoutsData={setWorkoutsData}/>
        ) : (
            'Loading...'
            )
        }
        </Wrapper>
    )
}

const Wrapper = styled.div`
  height: fit-content;
  margin-top: -2.2rem;
`