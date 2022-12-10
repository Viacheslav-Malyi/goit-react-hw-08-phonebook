import { useState } from 'react';
import operations from 'redux/store/contacts-operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  Button,
} from '@chakra-ui/react';

import { Form } from './Form.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleContactChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const submitForm = async e => {
    e.preventDefault();
    const contact = {
      name,
      number,
    };
    for (const el of contacts) {
      if (el.name.toLowerCase() === contact.name.toLocaleLowerCase()) {
        alert(`Конткт з таким ім'ям вже існує`);
        setName('');
        setNumber('');
        return;
      }
    }
    await dispatch(operations.addContact(contact));
    await dispatch(operations.getContacts());
    setName('');
    setNumber('');
  };

  return (
    <>
      <Form onSubmit={submitForm}>
        <FormControl color="black">
          <FormLabel color="black">Name</FormLabel>
          <Input
            borderColor="black"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleContactChange}
          />
        </FormControl>

        <FormControl mt="10px" color="black">
          <FormLabel color="black">Number</FormLabel>
          <InputGroup borderColor="black">
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleContactChange}
            />
          </InputGroup>
        </FormControl>
        <Box display="flex" justifyContent="center" mt="10px">
          <Button colorScheme="whatsapp" type="submit">
            Add Contact
          </Button>
        </Box>
      </Form>
    </>
  );
};

export default ContactForm;
