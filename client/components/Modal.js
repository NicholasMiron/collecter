import React from 'react';
import PropTypes from 'prop-types';

import AddField from './Forms/AddField';

const Modal = ({ formType, hideModal }) => {
  if (formType === 'addItem') {
    return (
      <div id='outerModal' onMouseDown={hideModal}>
        <div id='form'>
          <h1>Hello</h1>
          <h2>There</h2>
        </div>
      </div>
    );
  } if (formType === 'editItem') {
    return <></>;
  } if (formType === 'addField') {
    return (
      <div id='outerModal' onMouseDown={hideModal}>
        <div id='form'>
          <AddField />
        </div>
      </div>
    );
  } if (formType === 'editField') {
    return <></>;
  }
  return <></>;
};

Modal.propTypes = {
  formType: PropTypes.string,
  hideModal: PropTypes.func,
};

export default Modal;
