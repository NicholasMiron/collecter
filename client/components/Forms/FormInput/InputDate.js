import React from 'react';
import PropTypes from 'prop-types';

const InputDate = ({ name }) => (
  <>
    <input
      type="date"
      name={name}
    />
  </>
);

InputDate.propTypes = {
  name: PropTypes.string,
};

export default InputDate;
