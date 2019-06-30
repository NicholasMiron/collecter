import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ addField }) => (
  <div id='footer'>
    <div>Generate Report</div>
    <div onClick={() => addField()}>Add Collection Field</div>
    <div>Add Item</div>
  </div>
);

export default Footer;

Footer.propTypes = {
  addField: PropTypes.func,
};
