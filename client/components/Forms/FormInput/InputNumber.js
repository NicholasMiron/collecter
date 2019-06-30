import React from 'react';
import PropTypes from 'prop-types';


const InputNumber = ({
  placeholder, name, min, max, step, required,
}) => (
  <>
    <label>{placeholder}</label>
    <input
      type='number'
      name={name}
      min={min}
      max={max}
      step={step}
      required={required}
    />
  </>
);

InputNumber.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  required: PropTypes.bool,
};

export default InputNumber;
