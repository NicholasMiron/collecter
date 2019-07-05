import React from 'react';
import PropTypes from 'prop-types';

const InputYear = ({ name, labelText, handleChange }) => (
    <div className='formItem'>
      <label forHtml={name}>{labelText}</label>
      <input type={'number'} name={name} min={1700} max={2030} step={1} defaultValue={2019} onChange={handleChange} />
    </div>
);

InputYear.propTypes = {
  name: PropTypes.string,
  labelText: PropTypes.string,
  handleChange: PropTypes.func,
};

export default InputYear;
