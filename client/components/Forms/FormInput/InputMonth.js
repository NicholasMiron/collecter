import React from 'react';
import PropTypes from 'prop-types';

const InputMonth = ({
  name, labelText, min, max, value,
}) => (
    <div className={'formItem'}>
      <label forHtml={name}>{labelText}</label>
      <input type={'month'} name={name} min={min} max={max} defaultValue={value}/>
    </div>
);

InputMonth.propTypes = {
  name: PropTypes.string,
  labelText: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  value: PropTypes.string,
};

export default InputMonth;
