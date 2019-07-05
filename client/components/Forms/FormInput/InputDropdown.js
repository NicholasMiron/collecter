import React from 'react';
import PropTypes from 'prop-types';

const InputDropDown = ({
  name, labelText = '', required = false, values = [], multiple = false, handleChange,
}) => (
    <div className={'formItem'}>
      <label forHtml={name}>{labelText}</label>
      <select name={name} required={required} onChange={handleChange} placeholder='Choose One' multiple={multiple}>
        <option value={'Pick one'} disabled selected>{multiple ? 'Pick One or More' : 'Pick One'}</option>
        {values.map(value => (
          <option value={value} key={value}>{value}</option>
        ))}
      </select>
    </div>
);

InputDropDown.propTypes = {
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  required: PropTypes.bool,
  multiple: PropTypes.bool,
  values: PropTypes.array,
  handleChange: PropTypes.func,
};

export default InputDropDown;
