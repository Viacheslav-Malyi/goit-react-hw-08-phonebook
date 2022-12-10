import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  width: 100%;

  padding: 10px 15px;
  background-color: rgb(25, 118, 210);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 420px) {
    flex-direction: column;
    width: auto;
    margin: 0 auto;
  }
`;
export const Navigation = styled.nav`
  @media screen and (max-width: 420px) {
    display: flex;
    justify-content: center;
  }
`;
export const NavList = styled.ul`
  display: flex;
`;
export const NavListItem = styled.li`
  &:not(:first-child) {
    margin-left: 3px;
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
