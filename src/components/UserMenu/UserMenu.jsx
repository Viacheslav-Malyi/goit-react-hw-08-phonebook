import { Button, Text } from '@chakra-ui/react';
import { UserMenuBox } from './UserMenu.styled';
import { useSelector, useDispatch } from 'react-redux';
import authOperations from '../../redux/store/auth-operations';

const UserMenu = () => {
  const name = useSelector(state => state.user.user.name);
  const dispatch = useDispatch();

  return (
    <>
      <UserMenuBox>
        <Text as="em" fontSize="md" p="5px" color="white">
          Welcome{' '}
          <Text as="b" color="white.200" fontSize="md">
            {name}
          </Text>
        </Text>
        <Button
          colorScheme="white"
          size="sm"
          type="button"
          onClick={() => {
            dispatch(authOperations.logOut());
          }}
        >
          Log out
        </Button>
      </UserMenuBox>
    </>
  );
};

export default UserMenu;
