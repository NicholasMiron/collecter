import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ addField, addItem }) => (
  <div id='footer'>
    <div>Generate Report</div>
    <div onClick={() => addField()}>Add Collection Field</div>
    <div onClick={() => addItem()}>Add Item</div>
  </div>
);

export default Footer;

Footer.propTypes = {
  addField: PropTypes.func,
  addItem: PropTypes.func,
};
