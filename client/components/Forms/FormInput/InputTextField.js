import React from 'react';
import PropTypes from 'prop-types';

const InputTextField = ({
  name, maxLength = 20, required = false, placeholder = '', value = '',
}) => (
    <input
      type="text"
      name={name}
      maxLength={maxLength}
      required={required}
      placeholder={placeholder}
      defaultValue={value}
    />
);

InputTextField.propTypes = {
  name: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default InputTextField;
