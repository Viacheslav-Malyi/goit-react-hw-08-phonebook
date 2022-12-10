import styled from '@emotion/styled';
import { Box, Button } from '@chakra-ui/react';
export const Item = styled.li`
  margin-top: 10px;
`;

export const ItemBox = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 420px) {
    flex-direction: column;
    width: auto;
    margin: 0 auto;
  }
`;

export const ContactsBtn = styled(Button)`
  @media screen and (max-width: 420px) {
    margin-top: 5px;
  }
`;
