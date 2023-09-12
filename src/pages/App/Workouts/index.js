import styled from "styled-components";
import { useState, useEffect } from "react";

import useWorkouts from "../../../hooks/api/workout/useWorkouts";
import RenderWorkouts from "./RenderWorkouts";

export default function Workouts() {
    const { workouts } = useWorkouts();
    const [workoutsData, setWorkoutsData] = useState([]);

    useEffect(() => {
        if(workouts) {
            setWorkoutsData(workouts)
        }
    }, [workouts])

    return (
        <Wrapper>
        { workouts ? (
            <RenderWorkouts workouts={workouts ? workoutsData : workouts} setWorkoutsData={setWorkoutsData}/>
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