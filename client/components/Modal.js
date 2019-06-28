import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ formType, displayed, hideModal }) => {
  if (displayed) {
    return (
      <div id='outerModal' onMouseDown={hideModal}>
        <div id='form'>
          <h1>Hello</h1>
          <h2>There</h2>
        </div>
      </div>
    );
  }
  return <></>;
};

Modal.propTypes = {
  displayed: PropTypes.bool,
  hideModal: PropTypes.func,
};

export default Modal;
