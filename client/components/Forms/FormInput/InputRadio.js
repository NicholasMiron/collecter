import React from 'react';
import PropTypes from 'prop-types';

const InputRadio = ({
  name, labelText, options, handleChange,
}) => (
    <div className={'formItem'}>
      <div>{labelText}</div>
      {options.map((option, i) => (
        <label key={i}>
          <input type={'radio'} name={name} value={option} onChange={handleChange}/>
          {option}
        </label>
      ))}

    </div>
);

InputRadio.propTypes = {
  name: PropTypes.string,
  labelText: PropTypes.string,
  options: PropTypes.array,
  handleChange: PropTypes.func,
};

export default InputRadio;
