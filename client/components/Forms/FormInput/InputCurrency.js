import React from 'react';
import PropTypes from 'prop-types';

const InputCurrency = ({
  name, labelText, required, handleChange,
}) => {
  const toCurrency = (e) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    if (e.target.value[0] !== '$') {
      e.target.value = formatter.format(e.target.value);
    }
    handleChange(e);
  };

  return (
    <div className={'formItem'}>
      <label htmlFor={name}>{labelText}</label>
      <input
        type={'text'}
        name={name}
        required={required}
        onBlur={toCurrency}
        onChange={handleChange}
      />
    </div>
  );
};

InputCurrency.propTypes = {
  name: PropTypes.string,
  labelText: PropTypes.string,
  required: PropTypes.required,
  handleChange: PropTypes.func,
};

export default InputCurrency;
