import styled from "styled-components";

export default function Button({ children, ...props }) {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: ${(props) => (props.disabled ? '#DDDDDD' : '#FFD800')};
  color: ${(props) => (props.disabled ? '#2626267e' : props.textColor)};
  font-weight: bold;
  padding: 3px;
  border-radius: 8px;
  border: ${(props) => (props.disabled && props.border ? '' : '1px solid #1b1d1f40')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.disabled ? '' : 'pointer')};
  :hover {
    background-color: ${(props) => (props.disabled ? '#DDDDDD' : props.hoverColor ? props.hoverColor : '#edc900')};
  }
`
