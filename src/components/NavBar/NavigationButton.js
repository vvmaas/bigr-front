import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function NavigationButton({ value, children }) {
    const navigate = useNavigate();
    function navigation(value) {
      navigate(`/app/${value}`);
    }
    return <Button onClick={() => navigation(value)}>{children}</Button>;
  }

const Button = styled.button`
    width: 45%;
    height: 5rem;
    cursor: pointer;
    background-color: #FFD80070;
    border-radius: 0 0 20px 20px;
    border: 1px solid #1b1d1f70;

    :hover {
      background-color: #FFD80099;
      border: 1px solid #1b1d1f99;
      height: 6rem;
    }
`