import React from 'react';
import PropTypes from 'prop-types';

const InputDate = ({
  name, labelText, min, max, value,
}) => (
  <div className={'formItem'}>
    <label forHtml={name}>{labelText}</label>
    <input
      type="date"
      name={name}
      min={min}
      max={max}
      defaultValue={value}
    />
  </div>
);

InputDate.propTypes = {
  name: PropTypes.string,
  labelText: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  value: PropTypes.string,
};

export default InputDate;
