import { useState, useEffect } from "react";

import useUser from "../../../hooks/api/useUser";
import useUpdateUser from "../../../hooks/api/useUpdateUser";
import Button from "../../../components/Button";
import Input from "../../../components/Form/Input";

export default function User() {
    const [edit, setEdit] = useState(false)
    const { user, userLoading } = useUser();
    const [userData, setUserData] = useState(false); 

    useEffect(() => {
        if(user) {
            setUserData({
                name: user.name,
                weight: user.weight,
                height: user.height
            })
        }
    }, [user])

    return (
        <>
            {edit ? <UserUpdateInfo user={userData ? userData : user} setUserData={setUserData} userLoading={userLoading} setEdit={setEdit}/> : <UserInfo user={userData ? userData : user}/>}
            {edit ? <></> : <h1 onClick={() => setEdit(true)}>edit</h1>}
        </>
    )
}

function UserInfo(props) {
    const {user} = props;

    return (
        <>
            <div>
                {user?.name ? user?.name : 'Insert your name'}
            </div>

            <div>
                weight : {user?.weight} kg
            </div>
            <div>
                height : {user?.height} cm
            </div>
        </>
    )
}

function UserUpdateInfo(props) {
    const { user, setUserData, userLoading, setEdit } = props;

    const { updateUserAct } = useUpdateUser();

    const [name, setName] = useState(user.name);
    const [weight, setWeight] = useState(user.weight);
    const [height, setHeight] = useState(user.height);

    async function submit(event) {
        event.preventDefault();
    
        try {
          const body = {
            name,
            weight: Number(weight),
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
          <Input 
            placeholder="name" 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} />
          <Input
            placeholder="weight"
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <Input
            placeholder="height"
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <Button type="submit" color="primary" disabled={userLoading}>
            save changes
          </Button>
          <button onClick={() => setEdit(false)}>
            cancel
          </button>
        </form>
        </>
    )
}