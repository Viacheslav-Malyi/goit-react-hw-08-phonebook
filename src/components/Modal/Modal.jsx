import { useEffect } from 'react';
//import { createPortal } from 'react-dom';
import { Backdrop, ModalContent } from './Modal.styled';
import PropTypes from 'prop-types';

//const modalRoot = document.querySelector('#modal-root');

const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    const escClose = e => {
      closeModal(e);
    };
    window.addEventListener('keydown', escClose);
    return () => {
      window.removeEventListener('keydown', escClose);
    };
  });
  return (
    <Backdrop
      onClick={e => {
        closeModal(e);
      }}
    >
      <ModalContent>{children}</ModalContent>
    </Backdrop>
  );
};
export default Modal;
Modal.propTypes = {
  closeModal: PropTypes.func,
};
