import { Item, ItemBox, ContactsBtn } from './ContactItem.styled';
import { Text, Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const ContactItem = ({
  name,
  number,
  handleDeleteContact,
  contactChange,
  id,
}) => {
  return (
    <Item>
      <ItemBox>
        <Text as="em" color="black.200" fontSize="xl">
          {name} :
        </Text>
        <Text fontSize="lg" color="black" ml="5px">
          {number}
        </Text>
        <Button
          colorScheme="red"
          ml="5px"
          type="button"
          onClick={() => {
            handleDeleteContact(id);
          }}
        >
          Delete
        </Button>
        <ContactsBtn
          colorScheme="orange"
          ml="5px"
          type="button"
          onClick={() => {
            contactChange(id);
          }}
        >
          Change
        </ContactsBtn>
      </ItemBox>
    </Item>
  );
};

export default ContactItem;
ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  handleDeleteContact: PropTypes.func,
  contactChange: PropTypes.func,
  id: PropTypes.string,
};
