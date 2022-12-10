import { useSelector } from 'react-redux';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { StyledLink } from './Home.styled';

const Home = () => {
  const isLoggIn = useSelector(state => state.user.isLoggedIn);
  return (
    <>
      <Box as="main">
        {isLoggIn ? (
          <Container maxW="container.lg" pt="100px">
            <Heading color="black" as="em">
              Welcome to the Phonebook! In this app, you can store and manage
              your contacts.
            </Heading>
            <StyledLink to="/contacts">
              <Text fontSize="xl">Your contacts</Text>
            </StyledLink>
          </Container>
        ) : (
          <Container maxW="container.lg" pt="100px">
            <Heading color="black" as="em">
              Welcome to the Phonebook! In this app, you can store and manage
              your contacts. To get started, you need to create an account or
              log in if you already have one.
            </Heading>
            <StyledLink to="/login">
              <Text fontSize="xl">Log In</Text>{' '}
            </StyledLink>
          </Container>
        )}
      </Box>
    </>
  );
};

export default Home;
