import styled from "styled-components";

import { useState } from "react";

import usePostWeight from "../../../hooks/api/weight/usePostWeight";
import Button from "../../../components/Button";
import Input from "../../../components/Form/Input";

export default function AddWeight(props) {
    const { weight, weightData, setWeightData, setEditWeight } = props;

    const { postWeights } = usePostWeight();

    const [value, setValue] = useState(weight);

    async function submit(event) {
        event.preventDefault();
    
        try {
          const body = {
            value: Number(value)
          } 
          const newWeight = await postWeights(body);
          setWeightData([...weightData, newWeight])
          setEditWeight(false);
        } catch (err) {
          alert("It was not possible to add data")
        }
      }
     
    return (
      <>
        <form onSubmit={submit}>
          <Inputs>
            <Input
              label="weight"
              placeholder={weight}
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Inputs>
          <Buttons>
            <Button type="submit">
              add
            </Button>
            <CancelButton hoverColor="#1b1d1f50" onClick={() => setEditWeight(false)}>
              cancel
            </CancelButton>
          </Buttons>
        </form>
      </>
    )
}

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    margin-bottom: 5px;
    margin-left: 10px;
  }
`

const Inputs = styled.div`
    input {
        margin-bottom: 0px;
    }
`

const CancelButton = styled(Button)`
    background-color: #1b1d1f40;
    margin-bottom: 0px;
`