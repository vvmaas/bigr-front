import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../Form/Input";
import Button from "../../Button";
import Link from "../../Link";

import useSignUp from "../../../hooks/api/useSignUp";

export default function SignUpContent() {
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
          <Content>
            <h1>Sign-Up</h1>
            <form onSubmit={submit}>
              <Input placeholder="e-mail" type="text" value={email} onChange={e => setEmail(e.target.value)} />
              <Input placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
              <Input placeholder="confirm password" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
              <Button type="submit" disabled={loadingSignUp}>signup</Button>
            </form>
          </Content>
          <ToSignIn>
            <Link to="/sign-in">Already have an account? Log-in!</Link>
          </ToSignIn>
        </>
      );
}

const ToSignIn = styled.div`
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