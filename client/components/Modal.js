import React from 'react';
import PropTypes from 'prop-types';

import AddField from './Forms/AddField';
import AddItem from './Forms/AddItem';

const Modal = ({
  formType, hideModal, submitField, columns, submitItem,
}) => {
  if (formType) {
    let form = <></>;
    if (formType === 'addItem') {
      form = <AddItem fields={columns} submitItem={submitItem}/>;
    } if (formType === 'editItem') {
      return <></>;
    } if (formType === 'addField') {
      form = <AddField submitField={submitField} />;
    } if (formType === 'editField') {
      return <></>;
    }
    return (
      <div id={'outerModal'}>
        <div id={'form'}>
          {form}
        <div id={'closeModal'} onClick={hideModal}>close</div>
        </div>
      </div>
    );
  }
  return <></>;
};

Modal.propTypes = {
  formType: PropTypes.string,
  hideModal: PropTypes.func,
  submitField: PropTypes.func,
  columns: PropTypes.array,
  submitItem: PropTypes.func,
};

export default Modal;
