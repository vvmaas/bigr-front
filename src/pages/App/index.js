import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from "../../components/App/Navbar";

export default function AppPage() {
  return (
    <>
      <Container>
        <Outlet />
      </Container>

      <Navbar />
    </>
  );
}

const Container = styled.div`
  padding: 30px;
  height: 100%;
  width: 100%;
  overflow-y: auto;

  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    padding: 20px;
  }
`;
