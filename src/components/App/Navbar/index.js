import styled from 'styled-components';

import NavigationButton from './NavigationButton';

export default function Navbar() {

  return (
    <Container>
      <NavigationButton value="user">
        <span>user</span>
      </NavigationButton>
      <NavigationButton value="diary">
        <span>diary</span>
      </NavigationButton>
      <NavigationButton value="workouts">
        <span>workouts</span>
      </NavigationButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #ddd;
  box-shadow: 2px 0 10px 0 rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  justify-content: flex-start;

  > a {
    text-decoration: none;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 80px;
    flex-direction: row;
  }
`;
