import React from 'react';
import PropTypes from 'prop-types';

import InputTextField from './FormInput/InputTextField';
import InputDropDown from './FormInput/InputDropdown';

const AddItem = ({ fields }) => (
    <>
      {fields.map((field) => {
        const type = field.inputType;
        if (type === 'string') {
          return <></>;
        }
        return <></>;
      })}
    </>
);

AddItem.propTypes = {
  fields: PropTypes.array,
};

export default AddItem;
