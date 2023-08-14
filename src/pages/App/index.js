import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export default function AppPage() {
  return (
    <Container>
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
  flex-direction: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    padding: 20px;
  }
`;

const Wrapper = styled.div`
  height: fit-content;
  margin: auto;
  display: flex;
  flex-direction: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    padding: 20px;
  }
`;
