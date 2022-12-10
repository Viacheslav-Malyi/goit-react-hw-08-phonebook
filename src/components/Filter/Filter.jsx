import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/store/contactsSlice';
import { FormControl, Text, Input, Box, Container } from '@chakra-ui/react';

export default function Filter() {
  const dispatch = useDispatch();
  return (
    <>
      <Box as="section" pt="10px">
        <Container
          maxW="container.lg"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <FormControl color="black">
            <Text textAlign="center" fontSize="xl">
              Find contacts by name
            </Text>
            <Input
              mt="10px"
              type="text"
              onChange={e => {
                dispatch(setFilter({ text: e.target.value }));
              }}
            />
          </FormControl>
        </Container>
      </Box>
    </>
  );
}
