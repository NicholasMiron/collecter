import React from 'react';
import PropTypes from 'prop-types';


const InputNumber = ({
  labelText, name, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER, step, required = false, handleChange,
}) => (
  <div className={'formItem'}>
    <label forHtml={'name'}>{labelText}</label>
    <input
      type='number'
      name={name}
      min={min}
      max={max}
      step={step}
      required={required}
      onChange={handleChange}
    />
  </div>
);

InputNumber.propTypes = {
  labelText: PropTypes.string,
  name: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  required: PropTypes.bool,
  handleChange: PropTypes.handleChange,
};

export default InputNumber;
