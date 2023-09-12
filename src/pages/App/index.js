import { Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';

import NavBar from '../../components/NavBar';

export default function AppPage() {
  const { id } = useParams();

  return (
    <Container>
      {id ? '' : <NavBar />}
      <Wrapper>
        <Outlet />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f7f8f9;
  filter: opacity(0.84);
  height: 70vh;
  width: 50vw;
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 15vh;
  overflow: scroll;

  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    width: 90vw;
    padding-top: 12vh;
  }
`;

const Wrapper = styled.div`
  height: fit-content;
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    padding: 20px;
  }
`;
