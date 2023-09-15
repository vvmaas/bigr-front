import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import useWorkout from "../../../hooks/api/workout/useWorkout";
import usePostWorkoutExercise from "../../../hooks/api/workoutExercise/usePostWorkoutExercise";
import useExercisesByKeyword from "../../../hooks/api/exercise/useExerciseKeyword";
import useWorkoutExercises from "../../../hooks/api/workoutExercise/useWorkoutExercises";

import Input from "../../../components/Form/Input";
import Button from "../../../components/Button";

export default function AddExercise(){
    const { id } = useParams();
    const [input, setInput] = useState('');
    const [fetchedInput, setFetchedInput] = useState('');
    const [selected, setSelected] = useState([]);
    const [exercises, setExercises] = useState([]);
    const { exercise, getExercise } = useExercisesByKeyword();
    const { getWorkout, workout } = useWorkout();
    const [workoutData, setWorkoutData] = useState({});
    const { postWorkoutExerciseAct } = usePostWorkoutExercise();
    const { getWorkoutExercise, workoutExercises } = useWorkoutExercises();
    const [workoutExerciseData, setWorkoutExerciseData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if(id !== undefined){
            if(workout) {
                setWorkoutData(workout)
            } else {
                getWorkout(id);
            }

            if(workoutExercises) {
                setWorkoutExerciseData(workoutExercises)
            } else {
                getWorkoutExercise(id);
            }
        }
        
        if(exercise && fetchedInput === input) {
            setExercises(exercise)
        } else {
            getExercise(input);
            setFetchedInput(input)
        }
    }, [workout, getWorkout, getExercise, exercise, selected, input, id])

    function select(selectedExercise) {
        setSelected([...selected, selectedExercise]);

        setInput('');
    }

    function unselect(unselectedExercise) {
        const arr = removeExercise(unselectedExercise.id)
        setSelected(arr);
    }

    function removeExercise(id) {
        let arr = [...selected];
        for (let i = 0; i < arr.length; i++) {
            if(selected[i].id == id){
                arr.splice(i, 1)
                return arr
            }
            }
        }

    function checkSelected(id) {
        let value = 0;
        selected.forEach(item => {
            if(item.id === id){
                value = 1
            }
        })
        workoutExerciseData.forEach(item => {
            if(item.exerciseId === id){
                value = 1
            }
        })
        return value;
    }

    async function addSelected() {
        const body = {
            workoutId: id,
            exercises: selected
        }
        await postWorkoutExerciseAct(body);

        navigate(`/app/workouts/${id}`);
    }

    return (
        <Container>
            <ReturnButton hoverColor="#1b1d1f50" onClick={() => navigate(`/app/workouts/${id}`)}> return </ReturnButton>
            <Title>Adding exercises to workout {workoutData.name}</Title>
            {
            selected.length > 0 ? 
                <SelectedExercises>
                    <h2>selected exercises:</h2>
                    <ExerciseList>
                        {selected?.map(exercise => {
                            return (
                                <SelectedExercise key={exercise.id}>{exercise.name}<button onClick={() => unselect(exercise)}>x</button></SelectedExercise>
                            )
                        })}
                    </ExerciseList>
                    <Button onClick={() => addSelected()}>add</Button>
                </SelectedExercises>
                :
                ''
                }
            <Input 
                placeholder="exercise name"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            {exercises?.map(exercise => {
                    if(checkSelected(exercise.id)){
                        return ''
                    }
                    return (
                            <ExerciseOption key={exercise.id} onClick={() => select(exercise)}><p>{exercise.name}</p></ExerciseOption>
                    )    
                })}
        </Container>
    );
}

const Container = styled.div`
    height: fit-content;
    width: 100%;
    margin-top: -4rem;
`

const ExerciseOption = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    border: 1px solid #1b1d1f40;
    margin-bottom: 1px;
    cursor: pointer;

    p{
        margin-left: 5px;
    }

    :hover {
        background-color: #e8ebed80;
    }
`

const ReturnButton = styled(Button)`
    background-color: #1b1d1f40;
    margin-bottom: 0px;
`

const Title = styled.div`
    margin-bottom: 20px;
`

const SelectedExercises = styled.div`

`

const SelectedExercise = styled.div`

`

const ExerciseList = styled.div`

`