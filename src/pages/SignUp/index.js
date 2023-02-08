import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import Link from "../../components/Link";

import useSignUp from "../../hooks/api/useSignUp";

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { loadingSignUp, signUp } = useSignUp();

    const navigate = useNavigate();

    async function submit(event) {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert("Passwords do not match")
        } else {
            try {
                await signUp(email, password)
                navigate('/sign-in')
            } catch (error) {
                alert("It was not possible to sign up")
            }
        }
    }

    return (
        <>
          <div>
            <h1>Sign-Up</h1>
            <form onSubmit={submit}>
              <Input placeholder="e-mail" type="text" value={email} onChange={e => setEmail(e.target.value)} />
              <Input placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
              <Input placeholder="confirm password" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
              <Button type="submit" color="primary" disabled={loadingSignUp}>sign-up</Button>
            </form>
          </div>
          <div>
            <Link to="/sign-in">Already have an account? Sign-in!</Link>
          </div>
        </>
      );
}