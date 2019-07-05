import React from 'react';
import PropTypes from 'prop-types';

const InputRadio = ({
  name, labelText, options, handleChange,
}) => (
    <div className={'formItem'}>
      <div>{labelText}</div>
      {options.map((option, i) => (
        <div className={'radio'} key={i}>
          <label>
            <input type={'radio'} name={name} value={option} onChange={handleChange}/>
            {option}
          </label>
        </div>
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
