import styled from 'styled-components';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../../Form/Input';
import Button from '../../Button';
import Link from '../../Link';

import useSignIn from '../../../hooks/api/useSignIn';

import UserContext from '../../../contexts/UserContext';

export default function SignInContent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loadingSignIn, signIn } = useSignIn();

  const { setUserData } = useContext(UserContext)

  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();

    try {
      const userData = await signIn(email, password);
      setUserData(userData);
      navigate('/app');
    } catch (err) {
      alert("It was not possible to sign-in")
    }
  }

  return (
    <>
      <Content>
        <h1>Login</h1>
        <form onSubmit={submit}>
          <Input placeholder="e-mail" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" disabled={loadingSignIn}>
            login
          </Button>
        </form>
      </Content>
      <ToSignUp>
        <Link to="/sign-up">Don't have an account? Sign-up!</Link>
      </ToSignUp>
    </>
  );
}

const ToSignUp = styled.div`
    margin-top: 1rem;
`

const Content = styled.div`
    width: 100%;

    h1 {
        margin-bottom: 2rem;
        font-size: 2.5rem;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    input {
      margin-bottom: .5rem;
    }

    button {
        width: 100%;
        margin-top: .2rem;
    }
`
