import styled from "styled-components"
import { useState, useEffect } from "react"

import useGetLog from "../../../hooks/api/workoutExerciseLogs/useGetLog";
import usePostLog from "../../../hooks/api/workoutExerciseLogs/usePostLog";

import Input from "../../../components/Form/Input"
import Button from "../../../components/Button";

export default function LogForm ({id}) {
    const [sets, setSets] = useState('00');
    const [reps, setReps] = useState('00');
    const [weight, setWeight] = useState('00');
    const [formUpdated, setFormUpdated] = useState(false);
    const [logLoaded, setLogLoaded] = useState(false);
    const { getLog, log } = useGetLog();
    const { postLog } = usePostLog();

    useEffect(() => {
        if(log && !logLoaded) {
            setSets(log.sets);
            setReps(log.repetitions);
            setWeight(log.weight);
            setLogLoaded(true);
        } else {
            getLog(id);
        }

        if((sets !== '00' && sets != log.sets) || (reps !== '00' && reps != log.repetitions) || (weight !== '00' && weight != log.weight)){
            setFormUpdated(true);
        } else {
            setFormUpdated(false);
        }
    }, [id, log, getLog, reps, sets, weight, logLoaded])

    async function submit(event){
        event.preventDefault();

        try{
            const body = {
                sets: Number(sets), 
                repetitions: Number(reps),
                weight: Number(weight)
            }
            await postLog(id, body);
        } catch {
            alert("It was not possible to save data")
        }
    }

    return (
        <Form onSubmit={submit}>
            <Input 
            label="sets"
            placeholder={sets}
            type="number"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
            />
            <Input 
            label="reps"
            placeholder={reps}
            type="number"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            />
            <Input 
            label="weight"
            placeholder={weight}
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            />

            {formUpdated ? 
            <Button type="submit">
                save
            </Button>
            :
            <Button>
                bake
            </Button>
            }
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    align-items: center;

    input {
        width: 40px;
        height: 25px;
        font-size: 80%;
        margin-bottom: 0;
        margin-right: 8px;
        text-align: center;
    }

    input[type="number"] {
        -moz-appearance: textfield;
        appearance: textfield;
    }

    label {
        font-size: 11px;
        margin-right: 7px;
        height: 10px;
    }
    button {
        width: 40px;
        height: 25px;
        font-size: 80%;
        margin-top: 12px;
        margin-bottom: 0;
        margin-right: 8px;
        text-align: center;
    }
`