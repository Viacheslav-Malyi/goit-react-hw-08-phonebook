import styled from '@emotion/styled';

export const Form = styled.form`
  display: block;
  width: 500px;
  margin: 0 auto;
  padding-top: 50px;
  @media screen and (max-width: 420px) {
    width: 300px;
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  width: 300px;
  margin: 0 auto;
`;
export const Submit = styled.button`
  display: block;
  margin: 10px auto 0 auto;
`;
export const Span = styled.span`
  text-align: center;
  padding: 5px;
`;
