import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledLink = styled(NavLink)`
  display: block;
  width: 200px;
  margin: 20px auto 0 auto;
  text-align: center;
  background-color: rgb(134, 233, 57);
  padding: 5px;
  text-decoration: none;
  cursor: pointer;
  color: white;
  border-radius: 8px;
`;
