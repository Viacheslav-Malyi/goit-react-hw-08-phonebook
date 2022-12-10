import { Form } from './RegisterForm.styled';
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
import { useState } from 'react';
import authOperations from '../../redux/store/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { resetError } from 'redux/store/auth';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const userError = useSelector(state => state.user.error);
  const dispatch = useDispatch();
  const isDisabled =
    email.trim() === '' || name.trim() === '' || password.trim() === '';
  if (userError) {
    const { message = '', code } = userError;
    switch (code) {
      case 400:
        alert('Error creating user, please try again)');
        dispatch(resetError());
        break;

      case 500:
        alert('server error, try reloading the page or try again later');
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
      case 'name':
        setName(value);
        break;
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
      name,
      email,
      password,
    };
    dispatch(authOperations.registerUser(user));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <Box as="main">
        <Container maxW="container.lg">
          <Form onSubmit={handleSubmit}>
            <FormControl color="white">
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="enter your name"
                _placeholder={{
                  opacity: 0.7,
                  color: 'white',
                  fontStyle: 'italic',
                }}
                type="text"
                name="name"
                value={name}
                onChange={handleUserChange}
              ></Input>
            </FormControl>
            <FormControl color="white" mt="10px">
              <FormLabel>Email</FormLabel>
              <Input
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
            <FormControl color="white" mt="10px">
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="enter your password"
                  _placeholder={{
                    opacity: 0.7,
                    color: 'white',
                    fontStyle: 'italic',
                  }}
                  color="white"
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
            <Box
              display="flex"
              alignItems="center"
              mt="10px"
              justifyContent="center"
            >
              <Button
                colorScheme="whatsapp"
                type="submit"
                disabled={isDisabled}
              >
                Sign up
              </Button>
            </Box>
          </Form>
        </Container>
      </Box>
    </>
  );
};

export default RegisterForm;
