import css from '../../components/phonebook.module.css';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <ul className={css.contact__list}>
      {visibleContacts.map(contact => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};
