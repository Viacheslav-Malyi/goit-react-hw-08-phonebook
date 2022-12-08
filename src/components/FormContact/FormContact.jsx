import { Label, Input, Button, FormWrapper } from './Form.styled';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
export const FormContact = () => {
  const initialValues = {
    name: '',
    number: '',
  };

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    if (
      contacts.some(el => el.name.toLowerCase() === values.name.toLowerCase())
    ) {
      alert('this contact are alredy in your phonebook');
      return;
    }
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormWrapper>
        <Label>
          Name
          <Input type="text" name="name" />
        </Label>
        <Label>
          Number
          <Input type="text" name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormWrapper>
    </Formik>
  );
};
