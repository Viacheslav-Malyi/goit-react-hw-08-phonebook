import { ContactsBox, List } from './ContactsList.styled';
import operation from '../../redux/store/contacts-operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState, useMemo } from 'react';
import Modal from 'components/Modal/Modal';
import ContactItem from 'components/ContactItem/ContactItem';
import ChangeContactForm from 'components/ChangeContactForm/ChangeContactForm';

const ContactsList = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.user.user.name);
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const [currentContact, setCurrentContact] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!userName) {
      return;
    }
    dispatch(operation.getContacts());
  }, [dispatch, userName]);

  const visibleContacts = useMemo(() => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  const handleDeleteContact = id => {
    dispatch(operation.deleteContact(id));
  };

  const contactChange = id => {
    const contact = contacts.find(contact => contact.id === id);
    setCurrentContact(contact);
    setShowModal(state => !state);
  };

  const closeModal = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      setShowModal(state => !state);
    }
    return;
  };

  return (
    <>
      <ContactsBox>
        <List>
          {visibleContacts.map(({ name, number, id }) => (
            <ContactItem
              key={`${id}`}
              name={name}
              number={number}
              id={id}
              handleDeleteContact={handleDeleteContact}
              contactChange={contactChange}
            />
          ))}
        </List>
      </ContactsBox>
      {showModal && (
        <Modal closeModal={closeModal}>
          <ChangeContactForm
            currentContact={currentContact}
            closeModal={setShowModal}
          />
        </Modal>
      )}
    </>
  );
};
export default ContactsList;
