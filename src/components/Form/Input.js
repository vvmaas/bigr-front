import styled from 'styled-components';

export default function Input({ variant = 'outlined', value='', onChange = () => 0, ...props }) {
  return  (
    <input {...props} value={value} onChange={onChange} variant={variant} />
  );
}
