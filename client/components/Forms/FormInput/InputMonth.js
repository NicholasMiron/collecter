import React from 'react';
import PropTypes from 'prop-types';

const InputMonth = ({
  name, labelText, min, max, value, required, handleChange,
}) => (
    <div className={'formItem'}>
      <label forHtml={name}>{labelText}</label>
      <input
        type={'month'}
        name={name}
        min={min}
        max={max}
        required={required}
        defaultValue={value}
        onChange={handleChange}
      />
    </div>
);

InputMonth.propTypes = {
  name: PropTypes.string,
  labelText: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  handleChange: PropTypes.func,
};

export default InputMonth;
