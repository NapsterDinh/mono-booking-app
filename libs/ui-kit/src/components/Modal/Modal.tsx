import type { FC } from 'react';
import React from 'react';
import { StyledModal } from './styles';
import type { ModalProps } from './types';

const Modal: FC<ModalProps> = (props) => {
  return <StyledModal {...props} />;
};

Modal.defaultProps = {};

export default Modal;
