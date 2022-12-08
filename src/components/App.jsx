import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { ContactList } from './ContactList/ContactList';
import { Container } from './Container/Container';
import { Filter } from './Filter/Filter';
import { FormContact } from './FormContact/FormContact';
import { Title } from './Title/Title';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title title={'Phonebook'} />
      <FormContact />
      <Filter />
      <Title title={'Contacts'} />

      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </Container>
  );
};
