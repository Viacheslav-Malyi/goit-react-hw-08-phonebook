import { Form } from './LoginForm.styled';
import { useState } from 'react';
import {
  Box,
  Container,
  Input,
  InputRightElement,
  Button,
  InputGroup,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import authOperations from '../../redux/store/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { resetError } from 'redux/store/auth';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userError = useSelector(state => state.user.error);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const dispatch = useDispatch();
  const isDisabled = email.trim() === '' || password.trim() === '';
  if (userError) {
    const { message = '', code } = userError;
    switch (code) {
      case 400:
        alert('User authorization error, please try again)');
        dispatch(resetError());
        break;

      default:
        alert(message);
        dispatch(resetError());
    }
  }

  const handleUserChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(authOperations.loginUser(user));
    setEmail('');
    setPassword('');
  };
  return (
    <Box as="main">
      <Container maxW="container.lg">
        <Form onSubmit={handleSubmit}>
          <FormControl color="black" mt="10px">
            <FormLabel>Email</FormLabel>
            <Input
              borderColor="black"
              placeholder="enter your email"
              _placeholder={{
                opacity: 0.7,
                color: 'white',
                fontStyle: 'italic',
              }}
              type="email"
              name="email"
              value={email}
              onChange={handleUserChange}
            ></Input>
          </FormControl>
          <FormControl color="black" mt="10px">
            <FormLabel>Password</FormLabel>
            <InputGroup size="md">
              <Input
                borderColor="black"
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="enter your password"
                _placeholder={{
                  opacity: 0.7,
                  color: 'black',
                  fontStyle: 'italic',
                }}
                color="black"
                name="password"
                value={password}
                onChange={handleUserChange}
                minLength="7"
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={handleClick}
                  color="gray.500"
                  fontStyle="italic"
                >
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          {/* <Submit type="submit" disabled={isDisabled}>
            Log in
          </Submit> */}
          <Box
            display="flex"
            alignItems="center"
            mt="10px"
            justifyContent="center"
          >
            <Button colorScheme="whatsapp" type="submit" disabled={isDisabled}>
              Sign up
            </Button>
          </Box>
        </Form>
      </Container>
    </Box>
  );
};

export default LoginForm;
