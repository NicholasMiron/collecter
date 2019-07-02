import React from 'react';
import PropTypes from 'prop-types';

const InputTextField = ({
  name, maxLength = 20, required = false, placeholder = '', value = '', handleChange, labelText,
}) => (
    <div id={'formItem'}>
    <label forHtml={name}>{labelText}</label>
    <input
      type="text"
      name={name}
      required={required}
      placeholder={placeholder}
      maxLength={maxLength}
      defaultValue={value}
      autoComplete={'off'}
      onChange={handleChange}
      />
    </div>
);

InputTextField.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  labelText: PropTypes.string,
};

export default InputTextField;
