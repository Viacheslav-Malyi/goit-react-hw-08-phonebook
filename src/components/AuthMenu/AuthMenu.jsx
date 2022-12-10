import { AuthList, AuthItem, StyledLink } from './AuthMenu.styled';

const AuthMenu = () => {
  return (
    <AuthList>
      <AuthItem>
        <StyledLink to="/register">
          <em>Sign up</em>
        </StyledLink>
      </AuthItem>
      <AuthItem>
        <StyledLink to="/login">
          <em>Log in</em>
        </StyledLink>
      </AuthItem>
    </AuthList>
  );
};
export default AuthMenu;
