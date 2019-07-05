import React from 'react';
import PropTypes from 'prop-types';

const InputToggle = ({
  name, labelText, required, defaultOn, handleChange,
}) => (
    <div className={'formItem'}>
      <label htmlFor={name}>{labelText}</label>
      <input
        type={'checkbox'}
        name={name}
        checked={defaultOn}
        required={required}
        onChange={handleChange}
      />
    </div>
);

InputToggle.propTypes = {
  name: PropTypes.string,
  labelText: PropTypes.string,
  defaultOn: PropTypes.bool,
  required: PropTypes.bool,
  handleChange: PropTypes.func,
};

export default InputToggle;
