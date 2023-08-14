import styled from "styled-components";

import { useState } from "react";

import useUpdateUser from "../../../hooks/api/useUpdateUser";
import Button from "../../../components/Button";
import Input from "../../../components/Form/Input";

export default function UserUpdateInfo(props) {
    const { user, setUserData, userLoading, setEdit } = props;

    const { updateUserAct } = useUpdateUser();

    const [name, setName] = useState(user.name);
    const [height, setHeight] = useState(user.height);

    async function submit(event) {
        event.preventDefault();
    
        try {
          const body = {
            name,
            height: Number(height)
          } 
          setUserData(body)
          await updateUserAct(body);
          setEdit(false);
        } catch (err) {
          alert("It was not possible to update data")
        }
      }
     
    return (
      <>
        <form onSubmit={submit}>
          <Inputs>
            <Input 
              label="username"
              placeholder="name" 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} />
            <Input
              label="height"
              placeholder="height"
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </Inputs>
          <Buttons>
            <Button type="submit" disabled={userLoading}>
              save changes
            </Button>
            <CancelButton hoverColor="#1b1d1f50" onClick={() => setEdit(false)}>
              cancel
            </CancelButton>
          </Buttons>
        </form>
      </>
    )
}

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  button {
    margin-bottom: 5px;
  }
`

const Inputs = styled.div`
`

const CancelButton = styled(Button)`
    background-color: #1b1d1f40;
    margin-bottom: 0px;
`