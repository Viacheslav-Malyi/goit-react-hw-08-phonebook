import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Text } from '@chakra-ui/react';
import {
  Header,
  NavList,
  NavListItem,
  Navigation,
  StyledLink,
  Container,
} from './Layout.styled';
import { useSelector } from 'react-redux';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';

const Layout = () => {
  const loggIn = useSelector(state => state.user.isLoggedIn);
  return (
    <>
      <Header>
        <Container>
          <Navigation>
            <NavList>
              <NavListItem>
                <StyledLink to="/">
                  <Text as="em">Home</Text>
                </StyledLink>
              </NavListItem>
              {loggIn && (
                <NavListItem>
                  <StyledLink to="/contacts">
                    <Text as="em">Contacts</Text>
                  </StyledLink>
                </NavListItem>
              )}
            </NavList>
          </Navigation>
          {loggIn ? <UserMenu /> : <AuthMenu />}
        </Container>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
