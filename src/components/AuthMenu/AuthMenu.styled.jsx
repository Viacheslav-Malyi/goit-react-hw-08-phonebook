import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthList = styled.ul`
  margin-left: auto;
  display: flex;
`;
export const AuthItem = styled.li`
  &:not(:last-child) {
    margin-right: 3px;
  }
`;
export const StyledLink = styled(NavLink)`
  display: block;
  padding: 5px;
  text-decoration: none;
  cursor: pointer;
  color: white;
  border-radius: 8px;
  &:hover {
    background-color: white;
    color: rgb(60, 60, 60);
  }
  &.active {
    background-color: white;
    color: rgb(60, 60, 60);
  }
`;
