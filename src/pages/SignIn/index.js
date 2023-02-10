import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../../components/Form/Input';
import Button from '../../components/Button';
import Link from '../../components/Link';

import useSignIn from '../../hooks/api/useSignIn';

import UserContext from '../../contexts/UserContext';

export default function SignIn() {
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
      <div>
        <h1>Entrar</h1>
        <form onSubmit={submit}>
          <Input placeholder="e-mail" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" color="primary" disabled={loadingSignIn}>
            sign-in
          </Button>
        </form>
      </div>
      <div>
        <Link to="/sign-up">Don't have an account? Sign Up!</Link>
      </div>
    </>
  );
}
