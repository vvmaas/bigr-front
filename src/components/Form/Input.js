import styled from 'styled-components';

export default function Input({ variant = 'outlined', value='', onChange = () => 0, ...props }) {
  return  (
    <Wrapper>
      {props.label ? <label>{props.label}</label> : <></>}
      <StyledInput {...props} value={value} onChange={onChange} variant={variant} />
    </Wrapper>
  );
}

const StyledInput = styled.input `
  border: 1px solid #1b1d1f70;
  background-color: #e8ebed70;
  border-radius: 8px;
  padding: 5px;
`

const Wrapper = styled.div `
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 7px;
  }

  label {
    margin-bottom: 4px;
  }
`