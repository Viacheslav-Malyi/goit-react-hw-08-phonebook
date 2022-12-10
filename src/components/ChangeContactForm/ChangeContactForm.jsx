import { Form } from './ChangeContactForm.styled';
import { useState } from 'react';
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  IconButton,
  Button,
} from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import operations from 'redux/store/contacts-operations';
import PropTypes from 'prop-types';

const ChangeContactForm = ({ currentContact, closeModal }) => {
  const { id, name, number } = currentContact;
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);
  const dispatch = useDispatch();

  const handleContactChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setNewName(value);
        break;
      case 'number':
        setNewNumber(value);
        break;
      default:
        return;
    }
  };

  const changeContact = async e => {
    e.preventDefault();
    const changedContact = {
      id,
      name: newName,
      number: newNumber,
    };
    await dispatch(operations.changeContact(changedContact));
    closeModal(state => !state);
  };

  return (
    <>
      {/* <Form onSubmit={changeContact}>
      <Label>
        <Property>Name</Property>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={newName}
          onChange={handleContactChange}
        ></Input>
      </Label>
      <Label>
        <Property>Number</Property>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={newNumber}
          onChange={handleContactChange}
        ></Input>
      </Label>
      <Submit type="submit">ChangeContact</Submit>
    </Form> */}
      <Form onSubmit={changeContact}>
        <FormControl color="white">
          <FormLabel color="white">Name</FormLabel>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={newName}
            onChange={handleContactChange}
          />
        </FormControl>

        <FormControl mt="10px" color="white">
          <FormLabel color="white">Number</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              size="20px"
              children={
                <IconButton
                  variant="outline"
                  aria-label="Call Sage"
                  fontSize="20px"
                  icon={<PhoneIcon color="white" />}
                />
              }
            />
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={newNumber}
              onChange={handleContactChange}
            />
          </InputGroup>
        </FormControl>
        <Box display="flex" justifyContent="center" mt="10px">
          <Button colorScheme="whatsapp" type="submit">
            Change Contact
          </Button>
        </Box>
      </Form>
    </>
  );
};
export default ChangeContactForm;
ChangeContactForm.propTypes = {
  currentContact: PropTypes.object,
  closeModal: PropTypes.func,
};
