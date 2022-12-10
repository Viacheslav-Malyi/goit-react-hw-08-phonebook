import { useSelector } from 'react-redux';
import ContactsList from 'components/ContactsList/ContactsList';
import { Box, Container, Heading } from '@chakra-ui/react';
import ContactForm from '../Form/Form';
import Filter from 'components/Filter/Filter';

const Contacts = () => {
  const contacts = useSelector(state => state.contacts.items);
  return (
    <>
      <Box as="main">
        <Container
          maxW="container.lg"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          pt="50px"
        >
          <Heading fontSize="5xl" color="black">
            Phonebook
          </Heading>
          <ContactForm />
          {contacts.length > 0 && <Filter />}
          <ContactsList />
        </Container>
      </Box>
    </>
  );
};

export default Contacts;
