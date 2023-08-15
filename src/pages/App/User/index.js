import styled from "styled-components";
import { useState, useEffect } from "react";

import UserInfo from "./UserInfo";
import UserUpdateInfo from "./UserUpdateInfo";
import Weight from "./Weight";

import useUser from "../../../hooks/api/useUser";
import useWeight from "../../../hooks/api/weight/useWeight";

export default function User() {
    const [edit, setEdit] = useState(false)
    const { user, userLoading } = useUser();
    const [userData, setUserData] = useState(false); 
    const { weights } = useWeight();
    const [weightData, setWeightData] = useState(false);
    useEffect(() => {
        if(user) {
            setUserData({
                name: user.name,
                height: user.height
            })
        }
        if(weights) {
          setWeightData(weights)
      }
    }, [user, weights])
    return (
      <Wrapper>
        <InfoWrapper>
          <ContentWrapper>
          {edit ? <UserUpdateInfo user={userData ? userData : user} setUserData={setUserData} userLoading={userLoading} setEdit={setEdit}/> : <UserInfo weightData={weightData} user={userData ? userData : user}/>}
          </ContentWrapper>
            {edit ? <></> : <SetEdit onClick={() => setEdit(true)}>...</SetEdit>}
        </InfoWrapper>
        <WeightWrapper>
            <Weight weightData={weightData} setWeightData={setWeightData}/>
        </WeightWrapper>
      </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 120%;
`

const InfoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid #1b1d1f50;
`

const SetEdit = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    padding-bottom: .25rem;
    border-radius: 8px;
    border: 1px solid #1b1d1f20;
    line-height: 1px;
    font-size: .6rem;
    font-weight: bold;
    background-color: #1b1d1f40;


  :hover {
    background-color: #1b1d1f50
  }
`

const ContentWrapper = styled.div`
  width: 100%;
  form {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
  }
`

const WeightWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    margin-top: 1rem;
  }
`