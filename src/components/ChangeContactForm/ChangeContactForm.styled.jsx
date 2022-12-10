import styled from '@emotion/styled';

export const Form = styled.form`
  border: 2px solid silver;
  border-radius: 8px;
  margin-top: 10px;
  padding: 15px;
  width: 400px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  :not(:first-of-type) {
    margin-top: 10px;
  }
`;

export const Property = styled.span``;

export const Input = styled.input`
  margin-top: 10px;
  width: 200px;
`;

export const Submit = styled.button`
  display: block;
  margin-top: 20px;
  cursor: pointer;
  background-color: transparent;
  border-style: none;
  border-radius: 5px;
  outline: 1px solid silver;
`;
